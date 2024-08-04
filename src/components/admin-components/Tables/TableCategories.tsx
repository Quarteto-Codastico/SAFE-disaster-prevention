import { Category } from "@/types/Category";
import { getFormattedDate } from "@/utils/getFormattedDate";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

type TableCategoriesProps = {
  categories: Category[];
};

export default function TableCategories({ categories }: TableCategoriesProps) {
  return (
    <TableContainer className="border border-[#75FFCA] rounded-tl-lg rounded-b-lg shadow-lg overflow-x-auto w-full">
      <Table variant="striped" size="sm" className="w-full border-collapse">
        <Thead className="bg-[#75FFCA] border-b border-[#75FFCA]">
          <Tr>
            <Th textAlign="center">Nome</Th>
            <Th textAlign="center">Status</Th>
            <Th textAlign="center">Criado em</Th>
            <Th textAlign="center">Última atualização</Th>
          </Tr>
        </Thead>
        <Tbody>
          {categories.length > 0 ? (
            categories.map((category) => (
              <Tr
                key={category.id}
                className="hover:bg-gray-100 border-b border-[#75FFCA]"
              >
                <Td textAlign="center">{category.name}</Td>
                <Td textAlign="center">{category.status.toUpperCase()}</Td>
                <Td textAlign="center">
                  {getFormattedDate(category.createdAt)}
                </Td>
                <Td textAlign="center">
                  {getFormattedDate(category.updatedAt)}
                </Td>
              </Tr>
            ))
          ) : (
            <Tr className="hover:bg-gray-100 border-b border-[#75FFCA]">
              <Td colSpan={4} className="px-4 py-2 text-center">
                Nenhuma categoria encontrada
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
