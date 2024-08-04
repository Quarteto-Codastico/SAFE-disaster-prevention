"use client";

import { setupAPIClient } from "@/app/lib/api";
import TableCategories from "@/components/admin-components/Tables/TableCategories";

import { Category } from "@/types/Category";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const api = setupAPIClient();

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
    <div className="flex flex-col min-h-[60vh] gap-4 items-center">
      <div className="w-full flex flex-row justify-center">
        <h1 className="flex text-2xl font-semibold text-center">Categorias</h1>
      </div>
      <div className="flex w-full max-w-[70vw] flex-col items-center">
        <div className="w-full flex justify-end">
          <button className="bg-[#75FFCA] p-2 rounded-t-xl flex items-center gap-2 font-semibold">
            Adicionar categoria <AiOutlinePlus />
          </button>
        </div>
        <TableCategories categories={categories} />
      </div>
    </div>
  );
}
