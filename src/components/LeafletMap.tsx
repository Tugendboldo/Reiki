import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet with Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface LeafletMapProps {
  address: string;
  className?: string;
}

export const LeafletMap: React.FC<LeafletMapProps> = ({ address, className = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([51.1657, 10.4515], 6); // Center of Germany as default
    mapInstanceRef.current = map;

    // Add MapBox tile layer (using free tier)
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      attribution: '© <a href="https://www.mapbox.com/">Mapbox</a> © <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      tileSize: 512,
      zoomOffset: -1,
      maxZoom: 18
    }).addTo(map);

    // Geocode address using OpenStreetMap Nominatim API
    const geocodeAddress = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`
        );
        const data = await response.json();
        
        if (data && data.length > 0) {
          const { lat, lon, display_name } = data[0];
          const latitude = parseFloat(lat);
          const longitude = parseFloat(lon);
          
          // Set map view to the geocoded location
          map.setView([latitude, longitude], 15);
          
          // Add custom marker
          const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `
              <div style="
                background: linear-gradient(135deg, #9333ea, #ec4899);
                width: 30px;
                height: 30px;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 3px solid white;
                box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <div style="
                  width: 8px;
                  height: 8px;
                  background: white;
                  border-radius: 50%;
                  transform: rotate(45deg);
                "></div>
              </div>
            `,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
            popupAnchor: [0, -30]
          });
          
          const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
          
          // Add popup with location info
          marker.bindPopup(`
            <div style="font-family: system-ui, -apple-system, sans-serif; min-width: 200px;">
              <h3 style="margin: 0 0 8px 0; color: #9333ea; font-size: 16px; font-weight: 600;">
                Erika Natural Healing
              </h3>
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px; line-height: 1.4;">
                ${display_name}
              </p>
              <div style="display: flex; gap: 8px; margin-top: 12px;">
                <a href="https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}" 
                   target="_blank" 
                   style="
                     background: linear-gradient(135deg, #9333ea, #ec4899);
                     color: white;
                     padding: 6px 12px;
                     border-radius: 6px;
                     text-decoration: none;
                     font-size: 12px;
                     font-weight: 500;
                   ">
                  Directions
                </a>
                <a href="tel:+491609946957" 
                   style="
                     background: #f3f4f6;
                     color: #374151;
                     padding: 6px 12px;
                     border-radius: 6px;
                     text-decoration: none;
                     font-size: 12px;
                     font-weight: 500;
                   ">
                  Call
                </a>
              </div>
            </div>
          `);
          
          // Open popup by default
          marker.openPopup();
        }
      } catch (error) {
        console.error('Geocoding error:', error);
        // Fallback to a general location in Germany if geocoding fails
        map.setView([51.1657, 10.4515], 6);
      }
    };

    geocodeAddress();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [address]);

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-full min-h-[300px] rounded-2xl ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};