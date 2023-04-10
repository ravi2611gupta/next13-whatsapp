import { classNames } from "../helpers";

interface InputProps {
  icon?: any;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ icon: Icon, placeholder }) => {
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