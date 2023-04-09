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
          h-6 
          text-gray-300
        "
      />)}
      <input
        placeholder={placeholder}
        className={
          classNames(`
            text-gray-500
            text-sm
            py-3
            px-4
            bg-neutral-100 
            w-full 
            rounded-xl
            focus:outline-none
          `,
          Icon && 'pl-11'
        )
        }
      />
    </div>
   );
}
 
export default Input;