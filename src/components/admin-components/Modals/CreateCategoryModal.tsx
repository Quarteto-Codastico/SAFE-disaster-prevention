import { setupAPIClient } from "@/app/lib/api";
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
  useToast,
} from "@chakra-ui/react";
import { AxiosError } from "axios";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

type CreateCategoryModalProps = {
  refetchCategories: () => void;
};

export default function CreateCategoryModal({
  refetchCategories,
}: CreateCategoryModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = React.useState("");
  const api = setupAPIClient();
  const toast = useToast();

  const handleCreateCategory = async () => {
    if (!name) {
      toast({
        title: "Nome da categoria é obrigatório",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }

    try {
      await api.post("/categories", { name }, { withCredentials: true });
      refetchCategories();
      onClose();
      setName("");
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
      setName("");
      onClose();
    }
  };

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
              <Input
                placeholder="Nome da categoria..."
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor={"#75FFCA"}
              _hover={{ filter: "auto", brightness: "95%" }}
              mr={3}
              onClick={handleCreateCategory}
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
