'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import Input from "../../components/Input";

import useChat from "@/app/hooks/useChat";
import { classNames } from "@/app/helpers";
import { Conversation, Message, User } from "@prisma/client";
import ConversationBox from "./ConversationBox";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";
import { pusherClient } from "@/app/libs/pusher";
import axios from "axios";

interface ConversationListProps {
  initialItems: (Conversation & { users: User[]; messages: Message[] })[];
  title?: string;
}

const ConversationList: React.FC<ConversationListProps> = ({ initialItems, title }) => {
  const [items, setItems] = useState(initialItems);

  const router = useRouter();
  const params = useParams();
  const { isOpen } = useChat();
  const session = useSession();

  const { conversationId } = params;

  const pusherKey = useMemo(() => {
    return session.data?.user?.email
  }, [session.data?.user?.email])

  useEffect(() => {
    if (!pusherKey) {
      return;
    }

    pusherClient.subscribe(pusherKey);

    const updateHandler = (conversation: Conversation & { users: User[]; messages: Message[] }) => {
      setItems((current) => current.map((currentConversation) => {
        if (currentConversation.id === conversation.id) {
          return conversation;
        }

        return currentConversation;
      }));
    }

    const newHandler = (conversation: Conversation & { users: User[]; messages: Message[] }) => {
      setItems((current) => [conversation, ...current]);
    }

    pusherClient.bind('conversation:update', updateHandler)
    pusherClient.bind('conversation:new', newHandler)
  }, [pusherKey, router]);

  return ( 
    <aside className={classNames(`
      fixed 
      inset-y-0 
      pb-20
      lg:pb-0
      lg:left-20 
      lg:w-80 
      lg:block
      overflow-y-auto 
      border-r 
      border-gray-200 
    `, isOpen ? 'hidden' : 'block w-full left-0')}>
      <div className="px-5">
        <div className="flex-col">
          <div className="text-2xl font-bold text-neutral-800 pt-4">
            {title}
          </div>
          <div className="my-2">
            {/* <Input register={() => ([])}  icon={MagnifyingGlassIcon} placeholder="Search" /> */}
          </div>
        </div>
        {items.map((item) => (
          <ConversationBox
            key={item.id}
            data={item}
            selected={conversationId === item.id}
          />
        ))}
      </div>
    </aside>
   );
}
 
export default ConversationList;
