"use client";
import { FaPlus } from "react-icons/fa";
import dynamic from "next/dynamic";

// Importa o componente Map dinamicamente, sem renderização no lado do servidor
const Map = dynamic(
  () => import("@/components/user-dashboard-components/Map"),
  { ssr: false }
);

export default function Alerts() {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[1600px] mt-[110px]">
      <div className="flex w-[84%] justify-between mr-0 mb-4">
        <h1 className="text-[#5B5B5B] text-2xl font-bold">
          Mapa de ocorrências
        </h1>
        <button className="flex justify-center items-center font-semibold gap-4 py-2 px-6 bg-clientGradient rounded-[16px] text-[#5B5B5B]">
          REGISTRAR OCORRÊNCIAS
          <FaPlus className="text-2xl text-[#5B5B5B]" />
        </button>
      </div>
      <div className="w-[1250px] h-[480px]">
        <Map />
      </div>
    </div>
  );
}
