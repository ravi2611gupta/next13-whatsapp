'use client';

import axios from 'axios';
import React from 'react'
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { User } from '@prisma/client';
import { CldUploadButton } from 'next-cloudinary';

import Input from "../inputs/Input";
import Modal from '../modals/Modal';
import Button from '../Button';

interface SettingsModalProps {
  isOpen?: boolean;
  onClose: () => void;
  currentUser: User;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ 
  isOpen, 
  onClose, 
  currentUser
}) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser.name,
      imageUrl: currentUser.imageUrl
    }
  });

  const imageUrl = watch('imageUrl');

  const handleUpload = (result: any) => {
    setValue('imageUrl', result.info.secure_url, { 
      shouldValidate: true 
    });
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios.post('/api/settings', data)
    .then(() => {
      router.refresh();
      onClose();
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Edit your public information.
            </p>

            <div className="mt-10 flex flex-col gap-y-8">
              <Input label="Name" id="name" errors={errors} required register={register} />
              <div>
                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <img className="rounded-full h-12 w-12" src={imageUrl || currentUser.imageUrl} />
                  <CldUploadButton options={{ maxFiles: 1 }} onUpload={handleUpload} uploadPreset="pgc9ehd5">
                    <Button
                      secondary
                      type="button"
                    >
                      Change
                    </Button>
                  </CldUploadButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Button secondary onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">
            Save
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default SettingsModal;
