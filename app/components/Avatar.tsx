import { classNames } from "../helpers";

interface AvatarProps {
  src: string;
  large?: boolean;
};

const Avatar: React.FC<AvatarProps> = ({ src, large }) => {
  const imgClass = classNames('rounded-full', large ? 'h-24 w-24' : 'h-11 w-11');
  const dotClass = classNames('absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0', large ? 'h-6 w-6' : 'h-3 w-3')

  return ( 
    <span className="relative inline-block">
      <img
        className={imgClass}
        src={src}
        alt=""
      />
    <span className={dotClass} />
  </span>
  );
}

export default Avatar;
