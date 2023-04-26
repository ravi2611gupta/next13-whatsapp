'use client';

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Conversation, Message, User } from "@prisma/client";

import Avatar from "@/app/components/Avatar";
import useOtherUser from "@/app/hooks/useOtherUser";
import { format } from "date-fns";

interface ConversationBoxProps {
  data: Conversation & {
    users: User[];
    messages: Message[]
  },
  selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({ data, selected }) => {
  const otherUser = useOtherUser(data);
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/conversations/${data.id}`);
  }, [data, router]);

  const lastMessage = useMemo(() => {
    const messages = data.messages || [];

    return messages[messages.length - 1];
  }, [data.messages]);
  
  return ( 
    <div
      onClick={handleClick}
      className={`
        w-full 
        relative 
        flex 
        items-center 
        space-x-3 
        p-3 
        hover:bg-neutral-100
        rounded-lg
        transition
        cursor-pointer
        ${selected ? 'bg-neutral-100' : 'bg-white'}
      `}
    >
      <Avatar src={otherUser.image} />
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-medium text-gray-900">{otherUser.name}</p>
            {lastMessage?.createdAt && (
              <p className="text-xs text-gray-400 font-light">{format(new Date(lastMessage.createdAt), 'p')}</p>
            )}
          </div>
          <p className="truncate text-sm text-gray-500">{lastMessage?.body}</p>
        </div>
      </div>
    </div>
  );
}
 
export default ConversationBox;
