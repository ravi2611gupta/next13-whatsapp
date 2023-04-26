'use client';

import { PaperAirplaneIcon, PhotoIcon } from "@heroicons/react/24/solid";
import Input from "@/app/components/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { CldUploadButton } from "next-cloudinary";

const Form = () => {
  const params = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      message: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue('message', '', { shouldValidate: true });
    axios.post('/api/messages', {
      ...data,
      conversationId: params.conversationId
    })
  }

  const handleUpload = (result: any) => {
    axios.post('/api/messages', {
      imageUrl: result.info.secure_url,
      conversationId: params.conversationId
    })
  }

  return ( 
    <form onSubmit={handleSubmit(onSubmit)} className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4">
      <CldUploadButton options={{ maxFiles: 1 }} onUpload={handleUpload} uploadPreset="pgc9ehd5">
        <PhotoIcon className="h-10 text-sky-500" />
      </CldUploadButton>
      <Input id="message" register={register} errors={errors} required placeholder="Write a message" />
      <button type="submit" className="rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition">
        <PaperAirplaneIcon className="lg:h-5 h-4 text-white" />
      </button>
    </form>
  );
}
 
export default Form;