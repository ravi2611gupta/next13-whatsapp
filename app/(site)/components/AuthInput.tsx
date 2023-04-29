'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface AuthInputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
}

const AuthInput: React.FC<AuthInputProps> = ({
  label,
  id,
  register,
  required,
  errors,
  type = 'text'
}) => {
  return ( 
    <div>
      <label 
        htmlFor={id} 
        className="
          block 
          text-sm 
          font-medium 
          leading-6 
          text-gray-900
        "
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          {...register(id, { required })}
          className={`
            form-input
            block 
            w-full 
            rounded-md 
            border-0 
            py-1.5 
            text-gray-900 
            shadow-sm 
            ring-1 
            ring-inset 
            ring-gray-300 
            placeholder:text-gray-400 
            focus:ring-2 
            focus:ring-inset 
            focus:ring-sky-600 
            sm:text-sm 
            sm:leading-6
            ${errors[id] ? 'focus:ring-rose-500' : 'focus:ring-sky-600'}
          `}
        />
      </div>
    </div>
   );
}
 
export default AuthInput;