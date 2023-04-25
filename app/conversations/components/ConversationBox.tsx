import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Conversation, User } from "@prisma/client";

import Avatar from "@/app/components/Avatar";
import useOtherUser from "@/app/hooks/useOtherUser";

interface ConversationBoxProps {
  data: Conversation & {
    users: User[]
  }
}

const ConversationBox: React.FC<ConversationBoxProps> = ({ data }) => {
  const otherUser = useOtherUser(data);
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/conversations/${data.id}`);
  }, [data, router]);

  return ( 
    <div
      onClick={handleClick}
      className="
        w-full 
        relative 
        flex 
        items-center 
        space-x-3 
        bg-white 
        p-3 
        hover:bg-neutral-100
        rounded-lg
        transition
        cursor-pointer
      "
    >
      <Avatar src={otherUser.image} />
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-medium text-gray-900">{otherUser.name}</p>
            {data.lastMessage && (
              <p className="text-xs text-gray-400 font-light">4:30 PM</p>
            )}
          </div>
          <p className="truncate text-sm text-gray-500">{data.lastMessage}</p>
        </div>
      </div>
    </div>
  );
}
 
export default ConversationBox;
