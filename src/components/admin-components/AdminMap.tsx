"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Occurrence } from "@/types/Occurrence";
import { setupAPIClient } from "@/app/lib/api";
import AdminOccurrenceDetailsModal from "../admin-components/Modals/AdminOccurrenceDetailsModal";

export type AdminMapProps = {
  latitude: number | null;
  longitude: number | null;
};
// URLs dos ícones para o Leaflet
const iconUrl = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png";
const iconRetinaUrl =
  "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png";
const shadowUrl =
  "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png";

const AdminMap = ({ latitude, longitude }: AdminMapProps) => {
  const [occurrences, setOccurrences] = useState<Occurrence[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [center, setCenter] = useState<L.LatLngExpression | null>(null);

  useEffect(() => {
    if (latitude && longitude) {
      setCenter([latitude, longitude]);
    }
  }, [latitude, longitude]);


  useEffect(() => {
    const fetchOccurrences = async () => {
      try {
        const api = setupAPIClient();
        const response = await api.get("/occurences", {
          withCredentials: true,
        });
        setOccurrences(response.data);
        setError(null);
      } catch (err: any) {
        setError("Erro ao buscar ocorrências. Tente novamente.");
        console.error("Erro ao buscar ocorrências:", err);
      }
    };

    fetchOccurrences();
  }, []);

  useEffect(() => {
    import("leaflet").then((L) => {
      const DefaultIcon = L.icon({
        iconUrl,
        iconRetinaUrl,
        shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
      L.Marker.prototype.options.icon = DefaultIcon;
    });
  }, []);

  // Verifica se há ocorrências e ajusta o tipo das coordenadas

  return center ? (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {occurrences.map((occurrence) => (
        <Marker
          key={occurrence.id}
          position={[occurrence.latitude, occurrence.longitude]}
          icon={
            new L.Icon({
              iconUrl,
              iconRetinaUrl,
              shadowUrl,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41],
            })
          }
        >
          <Popup>
            <AdminOccurrenceDetailsModal occurrence={occurrence} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  ) : (
    <div className="w-full flex justify-center py-10 text-white">
      Erro ao carregar a localização, por favor ative a localização do seu
      navegador e recarregue a página.
    </div>
  );
};
export default AdminMap;
