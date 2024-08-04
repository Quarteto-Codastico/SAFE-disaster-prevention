import Image, { StaticImageData } from "next/image";
import { FaTrash } from "react-icons/fa";
import React from "react";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { setupAPIClient } from "@/app/lib/api";

interface CardDonateProps {
  id: string;
  icon: StaticImageData;
  desc: string;
  title: string;
}

export const CardDonateAdmin: React.FC<CardDonateProps> = ({
  id,
  icon,
  title,
  desc,
}) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();

    const api = setupAPIClient();
    try {
      await api.delete(`/campaigns/${id}`,
        {
        withCredentials: true,
      });
      window.location.reload();
    } catch (err: any) {
      if (err.response?.status === 409) {
      } else {
        console.error("Erro ao cadastrar usuário:", err);
      }
    }
  };
  return (
	
    <>
      <div
        className={`relative flex flex-col bg-adminGradient w-[400px] h-[200px] rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px] overflow-hidden group border-2 border-white`}
      >
        <button onClick={onOpen} className="absolute top-1 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaTrash color="#FF5A5A" />
        </button>
        <div className="my-auto text-[#fff] self-end w-[250px]">
          <h1 className="font-bold text-3xl pl-4">{title}</h1>
          <p className="text-sm pl-4">{desc}</p>
        </div>
        <Image
          src={icon}
          alt="icon"
          className={`absolute bottom-[3rem] right-[16rem] w-[180px] h-[180px] rounded-full`}
        />
      </div>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent width="394px" border="solid" borderColor="#fff">

          <ModalCloseButton color="#FF5A5A" />
          <ModalBody p={5} bgColor="#2F2F2F">
		  	<h1 className="text-[#fff] text-2xl font-bold self-center text-center mt-8">
              Deseja deletar A campanha?
            </h1>
			<button
				onClick={handleDelete}
              className="w-[342px] h-[58px] bg-adminGradient text-[#fff] rounded-lg mt-4 text-xl font-semibold"
            >
              CONFIRMAR
            </button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
