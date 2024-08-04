import { setupAPIClient } from "@/app/lib/api";
import { Category } from "@/types/Category";
import { getUserDataFromCookie } from "@/utils/getUserDataFromCookie";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios, { AxiosError } from "axios";
import React, { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import InputMask from "react-input-mask";

type CreateOccurrenceModalProps = {
  categories: Category[];
  latitude: number;
  longitude: number;
};

export default function CreateOccurrenceModal({
  categories,
  latitude,
  longitude,
}: CreateOccurrenceModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [categoryId, setCategoryId] = React.useState("");
  const [cep, setCep] = React.useState("");
  const api = setupAPIClient();
  const toast = useToast();

  useEffect(() => {
    if (categories.length > 0) {
      setCategoryId(categories[0].id);
    }
  });

  const handleCreateOccurrence = async () => {
    if (!title) {
      toast({
        title: "Título da ocorrência é obrigatório",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    if (!description) {
      toast({
        title: "Descrição da ocorrência é obrigatória",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    if (!categoryId) {
      toast({
        title: "Categoria da ocorrência é obrigatória",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    if (!categoryId) {
      toast({
        title: "CEP é obrigatório",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }

    try {
      await api.post(
        "/occurences",
        { title, description, categoryId, latitude, longitude, zipCode: cep },
        { withCredentials: true }
      );
      onClose();
      setTitle("");
      setDescription("");
      setCategoryId("");
      setCep("");
      toast({
        title: "Categoria criada com sucesso",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    } catch (err: AxiosError | any) {
      console.error(err);
      toast({
        title: err.response.data.message,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      setTitle("");
      setDescription("");
      setCategoryId("");
      setCep("");
      onClose();
    }
  };

  return (
    <>
      <button
        onClick={onOpen}
        className="flex justify-center items-center font-semibold gap-4 py-2 px-6 bg-clientGradient rounded-[16px] text-[#5B5B5B]"
      >
        REGISTRAR OCORRÊNCIAS
        <FaPlus className="text-2xl text-[#5B5B5B]" />
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textTransform={"uppercase"}>
            Criar Ocorrência
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Título: </FormLabel>
              <input
                placeholder="Título da ocorrência..."
                required
                value={title}
                className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Descrição: </FormLabel>
              <input
                placeholder="Descrição da ocorrência..."
                className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>CEP: </FormLabel>
              <InputMask
                id="cep"
                mask={"99999-999"}
                className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
                required
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Categoria: </FormLabel>
              <Select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor={"#75FFCA"}
              _hover={{ filter: "auto", brightness: "95%" }}
              mr={3}
              onClick={handleCreateOccurrence}
            >
              Cadastrar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
