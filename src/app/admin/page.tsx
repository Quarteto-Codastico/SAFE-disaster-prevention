"use client";
import { FaPlus } from "react-icons/fa";
import dynamic from "next/dynamic";
import CreateOccurrenceModal from "@/components/admin-components/Modals/CreateOccurrenceModal";
import { useEffect, useState } from "react";
import { Category } from "@/types/Category";
import { setupAPIClient } from "../lib/api";

// Importa o componente Map dinamicamente, sem renderização no lado do servidor
const AdminMap = dynamic(
  () => import("@/components/admin-components/AdminMap"),
  { ssr: false }
);

export default function AdmintDashboard() {
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
        <h1 className="text-white text-2xl font-bold">Mapa de ocorrências</h1>
        {latitude && longitude && (
          <CreateOccurrenceModal
            categories={categories}
            latitude={latitude}
            longitude={longitude}
          />
        )}
      </div>
      <div className="w-[1250px] h-[480px] mb-10">
        <AdminMap latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
}
