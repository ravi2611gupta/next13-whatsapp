'use client';

import React, { useCallback } from 'react'
import { Dialog } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import Modal from '@/app/components/modals/Modal';
import Button from '@/app/components/Button';

interface ConfirmModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ 
  isOpen, 
  onClose 
}) => {
  const params = useParams();
  const router = useRouter();
  const { conversationId } = params;
  
  const onDelete = useCallback(() => {
    axios.delete(`/api/conversations/${conversationId}`)
    .then(() => {
      onClose();
      router.push('/conversations');
      router.refresh();
    })
  }, [router, conversationId, onClose]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="sm:flex sm:items-start">
        <div 
          className="
            mx-auto 
            flex 
            h-12 
            w-12 
            flex-shrink-0 
            items-center 
            justify-center 
            rounded-full 
            bg-red-100 
            sm:mx-0 
            sm:h-10 
            sm:w-10
          "
        >
          <ExclamationTriangleIcon 
            className="h-6 w-6 text-red-600" 
            aria-hidden="true"
          />
        </div>
        <div 
          className="
            mt-3 
            text-center 
            sm:ml-4 
            sm:mt-0 
            sm:text-left
          "
        >
          <Dialog.Title 
            as="h3" 
            className="text-base font-semibold leading-6 text-gray-900"
          >
            Delete conversation
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this conversation? This action cannot be undone.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <Button
          danger
          onClick={onDelete}
        >
          Delete
        </Button>
        <Button
          secondary
          onClick={onClose}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  )
}

export default ConfirmModal;
