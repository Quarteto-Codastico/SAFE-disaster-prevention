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
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function CreateCategoryModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="w-full flex justify-end">
        <Button
          onClick={onOpen}
          bgColor={"#75FFCA"}
          borderBottomRadius="none"
          className="bg-[#75FFCA] p-2 rounded-t-xl flex items-center gap-2 font-semibold"
          _hover={{ filter: "auto", brightness: "95%" }}
        >
          Adicionar categoria <AiOutlinePlus />
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textTransform={"uppercase"}>Criar Categoria</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome: </FormLabel>
              <Input placeholder="Nome da categoria..." required />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor={"#75FFCA"}
              _hover={{ filter: "auto", brightness: "95%" }}
              mr={3}
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
