import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from "@chakra-ui/react";

export default function Historic() {
	return (
		<div className="flex flex-col w-[90%] max-w-[1600px] h-[535px] mx-auto mt-[110px] mb-[170px]">
			<h1 className="text-[#5B5B5B] text-2xl font-bold self-center mb-8">Histórico de ocorrências</h1>
			<TableContainer className="border border-[#75FFCA] rounded-lg shadow-lg overflow-x-auto ">
				<Table variant="striped" size="sm" className="w-full border-collapse">
					<Thead className="bg-[#75FFCA] border-b border-[#75FFCA]">
						<Tr>
							<Th className="text-left px-4 py-2 border-r border-[#75FFCA]">
								Data
							</Th>
							<Th className="text-left px-4 py-2 border-r border-[#75FFCA]">
								Hora
							</Th>
							<Th className="text-left px-4 py-2 border-r border-[#75FFCA]">
								End.
							</Th>
							<Th className="text-left px-4 py-2">Tipo</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr className="hover:bg-gray-100 border-b border-[#75FFCA]">
							<Td className="px-4 py-2 border-r border-[#75FFCA]">inches</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]">
								millimetres (mm)
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								25.4
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								null
							</Td>
						</Tr>
						<Tr className="hover:bg-gray-100 border-b border-[#75FFCA]">
							<Td className="px-4 py-2 border-r border-[#75FFCA]">inches</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]">
								millimetres (mm)
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								25.4
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								null
							</Td>
						</Tr>
						<Tr className="hover:bg-gray-100 border-b border-[#75FFCA]">
							<Td className="px-4 py-2 border-r border-[#75FFCA]">inches</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]">
								millimetres (mm)
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								25.4
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								null
							</Td>
						</Tr>
						<Tr className="hover:bg-gray-100 border-b border-[#75FFCA]">
							<Td className="px-4 py-2 border-r border-[#75FFCA]">inches</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]">
								millimetres (mm)
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								25.4
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								null
							</Td>
						</Tr>
						<Tr className="hover:bg-gray-100 border-b border-[#75FFCA]">
							<Td className="px-4 py-2 border-r border-[#75FFCA]">inches</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]">
								millimetres (mm)
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								25.4
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								null
							</Td>
						</Tr>
						<Tr className="hover:bg-gray-100 border-b border-[#75FFCA]">
							<Td className="px-4 py-2 border-r border-[#75FFCA]">inches</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]">
								millimetres (mm)
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								25.4
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								null
							</Td>
						</Tr>
						<Tr className="hover:bg-gray-100 border-b border-[#75FFCA]">
							<Td className="px-4 py-2 border-r border-[#75FFCA]">inches</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]">
								millimetres (mm)
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								25.4
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								null
							</Td>
						</Tr>
						<Tr className="hover:bg-gray-100 border-b border-[#75FFCA]">
							<Td className="px-4 py-2 border-r border-[#75FFCA]">inches</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]">
								millimetres (mm)
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								25.4
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								null
							</Td>
						</Tr>
						<Tr className="hover:bg-gray-100 border-b border-[#75FFCA]">
							<Td className="px-4 py-2 border-r border-[#75FFCA]">inches</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]">
								millimetres (mm)
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								25.4
							</Td>
							<Td className="px-4 py-2 border-r border-[#75FFCA]" isNumeric>
								null
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</div>
	);
}
