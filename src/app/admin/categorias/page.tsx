"use client";

import { setupAPIClient } from "@/app/lib/api";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Category } from "@/types/Category";
import { getFormattedDate } from "@/utils/getFormattedDate";
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

  console.log(categories);

  return (
    <div className="flex flex-col min-h-[60vh] gap-4 items-center">
      <div className="w-full flex flex-row justify-center">
        <h1 className="flex text-2xl font-semibold text-center">Categorias</h1>
      </div>
      <div className="flex w-full max-w-[70vw] flex-col items-center">
        <div className="w-full flex justify-end">
          <button className="bg-green-500 p-2 rounded-xl text-white flex items-center gap-2">
            Adicionar categoria <AiOutlinePlus />
          </button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Criado em</TableHead>
              <TableHead className="text-right">Última atualização</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.length > 0 ? (
              categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{category.status.toUpperCase()}</TableCell>
                  <TableCell className="text-right">
                    {getFormattedDate(category.createdAt)}
                  </TableCell>
                  <TableCell className="text-right">
                    {getFormattedDate(category.updatedAt)}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  Nenhuma categoria encontrada
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
