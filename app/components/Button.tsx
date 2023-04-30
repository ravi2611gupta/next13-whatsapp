interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  fullWidth,
  children
}) => {
  return ( 
    <button
      type={type}
      className="
        flex 
        w-full 
        justify-center 
        rounded-md 
        bg-sky-500 
        px-3 
        py-2 
        text-sm 
        font-semibold 
        text-white 
        shadow-sm 
        hover:bg-sky-600 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        focus-visible:outline-sky-600
      "
    >
      {children}
    </button>
   );
}
 
export default Button;