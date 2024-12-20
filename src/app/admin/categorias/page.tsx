"use client";

import { setupAPIClient } from "@/app/lib/api";
import CreateCategoryModal from "@/components/admin-components/Modals/CreateCategoryModal";
import TableCategories from "@/components/admin-components/Tables/TableCategories";

import { Category } from "@/types/Category";
import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const api = setupAPIClient();

  function refetchCategories() {
    api.get("/categories").then((response) => {
      setCategories(response.data);
    });
  }

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
    <div className="flex flex-col min-h-[60vh] gap-4 items-center mt-[110px]">
      <div className="w-full flex flex-row justify-center">
        <h1 className="flex text-2xl font-semibold text-center text-white">
          Categorias
        </h1>
      </div>
      <div className="flex w-full max-w-[70vw] flex-col items-center">
        <CreateCategoryModal refetchCategories={refetchCategories} />
        <TableCategories categories={categories} />
      </div>
    </div>
  );
}
