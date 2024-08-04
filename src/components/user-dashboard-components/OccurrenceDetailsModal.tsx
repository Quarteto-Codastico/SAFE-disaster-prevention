"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Occurrence } from "@/types/Occurrence"; // Ajuste o caminho conforme necessário

interface OccurrenceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  occurrence: Occurrence | null;
}

const OccurrenceDetailsModal: React.FC<OccurrenceDetailsModalProps> = ({
  isOpen,
  onClose,
  occurrence,
}) => {
  if (!occurrence) return null;

  const statusMap: { [key: string]: string } = {
    active: "Ativo",
    pending: "Pendente",
    inactive: "Inativo",
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center" fontSize="2xl" color="gray.600">
          Detalhes da Ocorrência
        </ModalHeader>
        <ModalCloseButton color="red.400" />
        <ModalBody>
          <VStack spacing={4} align="start">
            <Text fontSize="xl" fontWeight="bold" color="gray.700">
              {occurrence.title}
            </Text>
            <Text fontSize="md" color="gray.500">
              {occurrence.description}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Status: <strong>{statusMap[occurrence.status]}</strong>
            </Text>
            <Text fontSize="sm" color="gray.600">
              Código Postal: <strong>{occurrence.zipCode}</strong>
            </Text>
            <Button
              as="a"
              href={`https://www.google.com/maps?q=${occurrence.latitude},${occurrence.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="teal"
              variant="solid"
              leftIcon={<FaMapMarkedAlt />}
            >
              Ver no Mapa
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OccurrenceDetailsModal;
