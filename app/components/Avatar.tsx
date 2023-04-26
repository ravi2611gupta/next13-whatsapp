import { classNames } from "../helpers";

interface AvatarProps {
  src?: string | null;
  large?: boolean;
};

const Avatar: React.FC<AvatarProps> = ({ src, large }) => {
  const imgClass = classNames('rounded-full', large ? 'h-16 w-16 md:h-24 md:w-24' : 'h-9 w-9 md:h-11 md:w-11');
  const dotClass = classNames('absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0', large ? 'h-4 w-4 md:h-6 md:w-6' : 'h-2 w-2 md:h-3 md:w-3')

  return ( 
    <span className="relative inline-block">
      <img
        className={imgClass}
        src={src || '/images/placeholder.jpg'}
        alt=""
      />
    <span className={dotClass} />
  </span>
  );
}

export default Avatar;
