"use client";
import Image, { StaticImageData } from "next/image";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
} from "@chakra-ui/react";

import { FaMapMarkedAlt } from "react-icons/fa";
import Link from "next/link";

interface CardDonateProps {
	icon: StaticImageData;
	qrCode: StaticImageData;
	desc: string;
	title: string;
	recebedor: string;
	loc: string;
}

export const CardDonate: React.FC<CardDonateProps> = ({
	icon,
	title,
	desc,
	qrCode,
	recebedor,
	loc,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<div
				onClick={onOpen}
				className="relative flex flex-col bg-clientGradient w-[400px] h-[200px] rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px] overflow-hidden cursor-pointer"
			>
				<div className="my-auto text-[#5b5b5b] self-end w-[250px]">
					<h1 className="font-bold text-3xl pl-4">{title}</h1>
					<p className="text-sm pl-4">{desc}</p>
				</div>
				<Image
					src={icon}
					alt="icon"
					className="absolute bottom-[3rem] right-[16rem] w-[180px] h-[180px] rounded-full"
				/>
			</div>

			<Modal
				isCentered
				onClose={onClose}
				isOpen={isOpen}
				motionPreset="slideInBottom"
			>
				<ModalOverlay />
				<ModalContent width="394px">
					<ModalHeader>
						<h1 className="text-[#5B5B5B] text-2xl font-bold self-center">
							Realize uma doação para:
						</h1>
					</ModalHeader>
					<ModalCloseButton color="#FF5A5A" />
					<ModalBody>
						<h1 className="text-[#5B5B5B] text-xl font-bold self-center text-center">
							{title}
						</h1>
						<p className="text-sm px-16 text-center font-light">{desc}</p>
						<div className="flex justify-center mx-auto w-[150px] h-[130px] mt-6 relative">
							<Image
								src={icon}
								alt="icon"
								className="w-[130px] h-[130px] rounded-[100%] mx-auto"
							/>
							<Link href={`${loc}`} className="flex justify-between items-center rounded-xl absolute bg-[#3FFFB6] w-[90%] h-[25px] px-2 top-[7.3rem]">
								
									<p className="text-sm font-semibold text-[#5B5B5B]">
										Ver no Mapa
									</p>
									<FaMapMarkedAlt className="text-[#5B5B5B]" />
							</Link>
						</div>
						<h1 className="text-[#A8A8A8] text-lg font-bold self-center text-center mt-6">
							Nome do recebedor
						</h1>
						<p className="text-sm text-center font-semibold text-[#5B5B5B] mb-3">
							{recebedor}
						</p>
						<div className="border-[1px] border-[#A8A8A8] rounded-lg mx-auto w-[150px] mb-6">
							<Image
								src={qrCode}
								alt="qr-code"
								className="h-[150px] w-[150px] p-2 "
							/>
						</div>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
