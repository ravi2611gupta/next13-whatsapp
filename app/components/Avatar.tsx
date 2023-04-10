interface AvatarProps {
  src: string;
};

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return ( 
    <span className="relative inline-block">
      <img
        className="h-11 w-11 rounded-full"
        src={src}
        alt=""
      />
    <span className="absolute right-0 top-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
  </span>
  );
}

export default Avatar;
