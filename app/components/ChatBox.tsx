import Link from "next/link";

import Avatar from "@/app/components/Avatar";

interface ChatBoxProps {
  name: string;
  imageUrl: string;
  message: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ name, imageUrl, message }) => {
  return ( 
    <div
      className="
        mb-3
        w-full 
        relative 
        flex 
        items-center 
        space-x-3 
        bg-white 
        px-3 
        py-5 
        hover:bg-gray-100
        rounded-xl
        transition
      "
    >
      <Avatar src={imageUrl} />
      <div className="min-w-0 flex-1">
        <Link href="/123" className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-medium text-gray-900">{name}</p>
            <p className="text-xs text-gray-400 font-light">4:30 PM</p>
          </div>
          <p className="truncate text-sm text-gray-500">{message}</p>
        </Link>
      </div>
    </div>
  );
}
 
export default ChatBox;
