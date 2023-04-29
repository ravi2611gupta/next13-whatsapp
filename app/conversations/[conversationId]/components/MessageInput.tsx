'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { classNames } from "../../../helpers";

interface InputProps {
  icon?: any;
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({ icon: Icon, placeholder, id, type, required, register, errors }) => {
  return (
    <div className="relative w-full">
      {Icon && (<Icon 
        className="
          absolute
          left-3
          top-[10px]
          h-5 
          text-gray-400
        "
      />)}
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className={
          classNames(`
            text-black
            font-light
            py-2
            px-4
            bg-neutral-100 
            w-full 
            rounded-full
            focus:outline-none
          `,
          Icon && 'pl-10'
        )
        }
      />
    </div>
   );
}
 
export default Input;