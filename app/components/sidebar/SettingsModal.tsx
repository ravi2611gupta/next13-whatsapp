'use client';

import React from 'react'
import { useRouter } from 'next/navigation';
import AuthInput from '@/app/(site)/components/AuthInput';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Modal from '../Modal';
import Avatar from '../Avatar';
import { User } from '@prisma/client';
import { CldUploadButton } from 'next-cloudinary';
import axios from 'axios';

interface SettingsModalProps {
  isOpen?: boolean;
  onClose: () => void;
  currentUser: User;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, currentUser }) => {
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
    setValue('imageUrl', result.info.secure_url, { shouldValidate: true });
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
              <AuthInput label="Name" id="name" errors={errors} required register={register} />

              <div>
                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <Avatar src={imageUrl || currentUser.imageUrl} />
                  <CldUploadButton options={{ maxFiles: 1 }} onUpload={handleUpload} uploadPreset="pgc9ehd5">
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </CldUploadButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default SettingsModal;
