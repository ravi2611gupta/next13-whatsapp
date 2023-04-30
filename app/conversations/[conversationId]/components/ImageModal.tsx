'use client';

import Modal from '@/app/components/modals/Modal';

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ 
  isOpen, 
  onClose, 
  src
}) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <img className="w-full h-full" src={src} />
    </Modal>
  )
}

export default ImageModal;
