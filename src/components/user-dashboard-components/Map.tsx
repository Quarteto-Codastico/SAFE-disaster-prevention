"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Occurrence } from "@/types/Occurrence";
import { setupAPIClient } from "@/app/lib/api";
import { useDisclosure } from "@chakra-ui/react";
import OccurrenceDetailsModal from "./OccurrenceDetailsModal";

// URLs dos ícones para o Leaflet
const iconUrl = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png";
const iconRetinaUrl =
  "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png";
const shadowUrl =
  "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png";

const Map = () => {
  const [occurrences, setOccurrences] = useState<Occurrence[]>([]);
  const [selectedOccurrence, setSelectedOccurrence] =
    useState<Occurrence | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const center: L.LatLngExpression =
    occurrences.length > 0
      ? [occurrences[0].latitude, occurrences[0].longitude]
      : [-23.55, -46.63]; // Localização padrão

  return (
    <>
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
            eventHandlers={{
              click: () => {
                setSelectedOccurrence(occurrence);
                onOpen();
              },
            }}
          ></Marker>
        ))}
      </MapContainer>

      <OccurrenceDetailsModal
        occurrence={selectedOccurrence}
        isOpen={isOpen}
        onClose={() => {
          setSelectedOccurrence(null);
          onClose();
        }}
      />
    </>
  );
};

export default Map;
