"use client";
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	useBreakpointValue,
} from "@chakra-ui/react";

export default function Historic() {
	// Para garantir que o TableContainer se ajuste ao tamanho da tela
	const tableContainerProps = useBreakpointValue({
		base: {
			borderWidth: "1px",
			borderRadius: "md",
			boxShadow: "md",
		},
		lg: {
			borderWidth: "1px",
			borderRadius: "md",
			boxShadow: "md",
		},
	});

	return (
		<div className="flex flex-col w-[90%] max-w-[1600px] h-[535px] mx-auto mt-[110px] mb-[170px]">
			<h1 className="text-[#5B5B5B] text-2xl font-bold self-center mb-8">
				Histórico de ocorrências
			</h1>
			<TableContainer {...tableContainerProps}>
				<Table variant="striped" colorScheme="#fff">
					<Thead bg="#75FFCA" color="white">
						<Tr>
							<Th textAlign="center" borderRight="1px" borderColor="#75FFCA">
								Data
							</Th>
							<Th textAlign="center" borderRight="1px" borderColor="#75FFCA">
								Hora
							</Th>
							<Th textAlign="center" borderRight="1px" borderColor="#75FFCA">
								End.
							</Th>
							<Th textAlign="center" borderRight="1px" borderColor="#75FFCA">
								Tipo
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr _hover={{ bg: "#fff" }}>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								inches
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								millimetres (mm)
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								25.4
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								null
							</Td>
						</Tr>
						<Tr _hover={{ bg: "#fff" }}>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								inches
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								millimetres (mm)
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								25.4
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								null
							</Td>
						</Tr>
						<Tr _hover={{ bg: "#fff" }}>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								inches
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								millimetres (mm)
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								25.4
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								null
							</Td>
						</Tr>
						<Tr _hover={{ bg: "#fff" }}>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								inches
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								millimetres (mm)
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								25.4
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								null
							</Td>
						</Tr>
						<Tr _hover={{ bg: "#fff" }}>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								inches
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								millimetres (mm)
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								25.4
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								null
							</Td>
						</Tr>
						<Tr _hover={{ bg: "#fff" }}>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								inches
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								millimetres (mm)
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								25.4
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								null
							</Td>
						</Tr>
						<Tr _hover={{ bg: "#fff" }}>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								inches
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								millimetres (mm)
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								25.4
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								null
							</Td>
						</Tr>
						<Tr _hover={{ bg: "#fff" }}>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								inches
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								millimetres (mm)
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								25.4
							</Td>
							<Td textAlign="center" borderRight="1px" borderColor="#75FFCA">
								null
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</div>
	);
}
