'use client';

import Modal from '@/app/components/Modal';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <img src={src} />
    </Modal>
  )
}

export default ImageModal;
