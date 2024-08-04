'use client'
// components/MapComponent.js
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  useEffect(() => {
    // Garantir que Leaflet seja importado apenas no cliente
    import('leaflet').then(L => {
      const DefaultIcon = L.icon({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      });
      L.Marker.prototype.options.icon = DefaultIcon;
    });
  }, []);

  return (
    <MapContainer center={[-3.69, -40.35]} zoom={13} style={{ height: '480px', width: '1250px'}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MapComponent;
