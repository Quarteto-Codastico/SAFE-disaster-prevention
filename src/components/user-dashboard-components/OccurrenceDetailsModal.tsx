"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaMapMarkedAlt } from "react-icons/fa";
import Link from "next/link";
import { Occurrence, OccurrenceFiles } from "@/types/Occurrence"; // Ajuste o caminho conforme necessário
import { useEffect, useState } from "react";
import Image from "next/image";

interface OccurrenceDetailsModalProps {
  occurrence: Occurrence | null;
}

const OccurrenceDetailsModal: React.FC<OccurrenceDetailsModalProps> = ({
  occurrence,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [files, setFile] = useState<OccurrenceFiles[] | null>(null);

  useEffect(() => {
    if (occurrence && occurrence.files.length > 0) {
      setFile(occurrence.files);
    }
  }, [occurrence]);

  if (!occurrence) return null;

  return (
    <>
      <div>
        <button onClick={onOpen}>VER DETALHES</button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h1 className="text-[#5B5B5B] text-2xl font-bold text-center">
              Detalhes da Ocorrência
            </h1>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1 className="text-[#5B5B5B] text-xl font-bold text-center">
              {occurrence.title}
            </h1>
            <p className="text-sm px-4 text-center font-light">
              {occurrence.description}
            </p>
            {files && (
              <div className="flex justify-center flex-wrap gap-4">
                {files.map((file) => (
                  <Image
                    key={file.filename}
                    alt="Imagem da ocorrência"
                    src={file.filePath}
                    width={200}
                    height={200}
                  />
                ))}
              </div>
            )}
            <div className="flex justify-center mt-6">
              <Link
                href={`https://www.google.com/maps?q=${occurrence.latitude},${occurrence.longitude}`}
                passHref
                target="_blank"
              >
                <div className="flex justify-between items-center rounded-xl bg-[#3FFFB6] px-4 py-2 gap-2">
                  <p className="text-sm font-semibold text-[#5B5B5B]">
                    Ver no Mapa
                  </p>
                  <FaMapMarkedAlt className="text-[#5B5B5B]" />
                </div>
              </Link>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OccurrenceDetailsModal;
