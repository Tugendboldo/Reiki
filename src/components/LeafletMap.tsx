import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet with Vite
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

    // Clean up existing map
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Initialize map with Hannover coordinates as default
    const hanoverCoords: [number, number] = [52.3759, 9.7320]; // Hannover city center
    const map = L.map(mapRef.current).setView(hanoverCoords, 13);
    mapInstanceRef.current = map;

    // Add OpenStreetMap tile layer (free and reliable)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map);

    // Geocode the specific address and add marker
    const geocodeAndAddMarker = async () => {
      try {
        // More specific search query for better results
        const searchQuery = 'Bronsartstraße 5, 30161 Hannover, Germany';
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1&countrycodes=de&addressdetails=1`
        );
        
        if (!response.ok) {
          throw new Error('Geocoding request failed');
        }
        
        const data = await response.json();
        console.log('Geocoding response:', data);
        
        if (data && data.length > 0) {
          const { lat, lon, display_name } = data[0];
          const latitude = parseFloat(lat);
          const longitude = parseFloat(lon);
          
          console.log('Found coordinates:', { latitude, longitude });
          
          // Set map view to the geocoded location with higher zoom
          map.setView([latitude, longitude], 16);
          
          // Create custom marker icon
          const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `
              <div style="
                background: linear-gradient(135deg, #9333ea, #ec4899);
                width: 32px;
                height: 32px;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 3px solid white;
                box-shadow: 0 4px 12px rgba(0,0,0,0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
              ">
                <div style="
                  width: 10px;
                  height: 10px;
                  background: white;
                  border-radius: 50%;
                  transform: rotate(45deg);
                "></div>
              </div>
            `,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
          });
          
          // Add marker to map
          const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
          
          // Create popup content
          const popupContent = `
            <div style="font-family: system-ui, -apple-system, sans-serif; min-width: 220px; padding: 4px;">
              <h3 style="margin: 0 0 8px 0; color: #9333ea; font-size: 18px; font-weight: 600;">
                Erika Natural Healing
              </h3>
              <p style="margin: 0 0 4px 0; color: #374151; font-size: 14px; font-weight: 500;">
                Lister Hof-Oase
              </p>
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px; line-height: 1.4;">
                Bronsartstr. 5 (Backyard building)<br>
                30161 Hannover, Germany
              </p>
              <div style="display: flex; gap: 8px; margin-top: 12px;">
                <a href="https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style="
                     background: linear-gradient(135deg, #9333ea, #ec4899);
                     color: white;
                     padding: 8px 12px;
                     border-radius: 6px;
                     text-decoration: none;
                     font-size: 12px;
                     font-weight: 500;
                     display: inline-block;
                   ">
                  🧭 Directions
                </a>
                <a href="tel:+491609946957" 
                   style="
                     background: #f3f4f6;
                     color: #374151;
                     padding: 8px 12px;
                     border-radius: 6px;
                     text-decoration: none;
                     font-size: 12px;
                     font-weight: 500;
                     display: inline-block;
                   ">
                  📞 Call
                </a>
              </div>
            </div>
          `;
          
          marker.bindPopup(popupContent, {
            maxWidth: 300,
            className: 'custom-popup'
          });
          
          // Open popup automatically
          marker.openPopup();
          
        } else {
          console.warn('No geocoding results found, using Hannover center');
          // Fallback: Add marker at Hannover center
          const fallbackMarker = L.marker(hanoverCoords).addTo(map);
          fallbackMarker.bindPopup(`
            <div style="font-family: system-ui, -apple-system, sans-serif;">
              <h3 style="margin: 0 0 8px 0; color: #9333ea;">Erika Natural Healing</h3>
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                Bronsartstr. 5, 30161 Hannover<br>
                <small>Exact location being resolved...</small>
              </p>
            </div>
          `);
        }
      } catch (error) {
        console.error('Geocoding error:', error);
        // Fallback: Add marker at Hannover center
        const fallbackMarker = L.marker(hanoverCoords).addTo(map);
        fallbackMarker.bindPopup(`
          <div style="font-family: system-ui, -apple-system, sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: #9333ea;">Erika Natural Healing</h3>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              Lister Hof-Oase<br>
              Bronsartstr. 5, 30161 Hannover
            </p>
          </div>
        `);
      }
    };

    // Wait for map to be fully ready before adding markers
    map.whenReady(() => {
      geocodeAndAddMarker();
    });

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
      className={`w-full h-full min-h-[300px] rounded-2xl border border-gray-200 ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};