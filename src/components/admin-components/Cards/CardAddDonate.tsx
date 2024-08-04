import Image from "next/image";
import add from "../../../../public/plus.svg";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { setupAPIClient } from "@/app/lib/api";
import { useState } from "react";

export const CardAddDonate: React.FC = ({}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [meta, setMeta] = useState(0);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const api = setupAPIClient();

    try {
      await api.post("/campaigns",
        {
            name: name,
            description: description,
            goalAmount: meta,
            startDate: startDate,
            endDate: endDate,
            status: 'active',
            latitude: 0,
            longitude: 0,
            qrCode: qrCode
        },
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

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        onClick={onOpen}
        className={`relative flex flex-col bg-[#2F2F2F] w-[400px] h-[200px] rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px] overflow-hidden border border-white`}
      >
        <Image
          src={add}
          alt="add"
          className={`absolute right-[7rem] top-[50%] translate-y-[-50%] scale-[30%] rounded-full`}
        />
        <div className="my-auto text-[#fff] self-end w-[250px]">
          <h1 className=" font-bold text-3xl pl-8">Adicionar Campanha</h1>
          <p className=" text-sm pl-4 "></p>
        </div>
      </div>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent width="394px" border="solid" borderColor="#fff">
          <ModalHeader bgColor="#2F2F2F">
            <h1 className="text-[#fff] text-2xl font-bold self-center text-center">
              Dados da ocorrência
            </h1>
          </ModalHeader>
          <ModalCloseButton color="#FF5A5A" />
          <ModalBody as="form" onSubmit={handleSubmit} p={5} bgColor="#2F2F2F">
            <p className="text-sm mt-2 text-start font-light text-[#fff]">
              Nome
            </p>
            <input
              id="name"
              type="text"
              placeholder="Digite o nome da campanha"
              className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <p className="text-sm mt-2 text-start font-light text-[#fff]">
              Descrição
            </p>
            <input
              id="description"
              type="text"
              placeholder="Digite a descrição"
              className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p className="text-sm mt-2 text-start font-light text-[#fff]">
              Qr code do pix
            </p>
            <input
              id="qrCode"
              type="text"
              placeholder="Digite o qr code do pix da campanha"
              className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
              required
              value={qrCode}
              onChange={(e) => setQrCode(e.target.value)}
            />
            <p className="text-sm mt-2 text-start font-light text-[#fff]">
              Meta
            </p>
            <input
              id="meta"
              type="number"
              placeholder="Digite a meta da campanha"
              className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
              required
              value={meta}
              onChange={(e) => setMeta(Number(e.target.value))}
            />
            <p className="text-sm mt-2 text-start font-light text-[#fff]">
              data de inicio
            </p>
            <input
              id="startDate"
              type="date"
              className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
              required
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <p className="text-sm mt-2 text-start font-light text-[#fff]">
              data de final
            </p>
            <input
              id="endDate"
              type="date"
              className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
              required
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <button
              type="submit"
              className="w-[342px] h-[58px] bg-adminGradient text-[#fff] rounded-lg mt-4 text-xl font-semibold"
            >
              CADASTRAR
            </button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
