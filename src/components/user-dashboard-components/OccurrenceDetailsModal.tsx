"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaMapMarkedAlt } from "react-icons/fa";
import Link from "next/link";
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

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <h1 className="text-[#5B5B5B] text-2xl font-bold text-center">
            Detalhes da Ocorrência
          </h1>
        </ModalHeader>
        <ModalCloseButton color="#FF5A5A" />
        <ModalBody>
          <h1 className="text-[#5B5B5B] text-xl font-bold text-center">
            {occurrence.title}
          </h1>
          <p className="text-sm px-4 text-center font-light">
            {occurrence.description}
          </p>
          <div className="flex justify-center mt-6">
            <Link
              href={`https://www.google.com/maps?q=${occurrence.latitude},${occurrence.longitude}`}
              passHref
            >
              <a className="flex justify-between items-center rounded-xl bg-[#3FFFB6] px-4 py-2">
                <p className="text-sm font-semibold text-[#5B5B5B]">
                  Ver no Mapa
                </p>
                <FaMapMarkedAlt className="text-[#5B5B5B]" />
              </a>
            </Link>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OccurrenceDetailsModal;
