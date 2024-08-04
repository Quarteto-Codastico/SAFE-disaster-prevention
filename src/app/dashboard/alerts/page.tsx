"use client";
import { FaPlus } from "react-icons/fa";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Category } from "@/types/Category";
import { setupAPIClient } from "@/app/lib/api";
import CreateOccurrenceModal from "@/components/admin-components/Modals/CreateOccurrenceModal";

// Importa o componente Map dinamicamente, sem renderização no lado do servidor
const Map = dynamic(
  () => import("@/components/user-dashboard-components/Map"),
  { ssr: false }
);

export default function Alerts() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const api = setupAPIClient();

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (err) => {
          console.error(err);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");
        setCategories(response.data);
      } catch (err: any) {
        console.error(err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[1600px] mt-[110px]">
      <div className="flex w-[84%] justify-between mr-0 mb-4">
        <h1 className="text-[#5B5B5B] text-2xl font-bold">
          Mapa de ocorrências
        </h1>
        {latitude && longitude && (
          <CreateOccurrenceModal
            categories={categories}
            latitude={latitude}
            longitude={longitude}
          />
        )}
      </div>
      <div className="w-[1250px] h-[480px]">
        <Map latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
}
