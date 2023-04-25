'use client';

import { DocumentPlusIcon, MicrophoneIcon, PaperAirplaneIcon, PhotoIcon } from "@heroicons/react/24/solid";

import Input from "@/app/components/Input";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const Form = () => {
  const params = useParams();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      message: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios.post('/api/messages', {
      ...data,
      conversationId: params.conversationId
    }).then(() => {
      router.refresh();
    })
  }

  return ( 
    <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4">
      <PhotoIcon className="h-10 text-sky-500" />
      <Input id="message" register={register} errors={errors} required placeholder="Write a message" />
      <div onClick={handleSubmit(onSubmit)} className="rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition">
        <PaperAirplaneIcon className="lg:h-5 h-4 text-white" />
      </div>
    </div>
  );
}
 
export default Form;