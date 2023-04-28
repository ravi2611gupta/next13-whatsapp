'use client';

import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import {  Message, User } from "@prisma/client";

import { pusherClient } from "@/app/libs/pusher";
import MessageBox from "./MessageBox";

type MessageType = Message & { sender: User, seen: User[] };

interface BodyProps {
  initialMessages: MessageType[];
}

const Body: React.FC<BodyProps> = ({ initialMessages = [] }) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState(initialMessages);
  const params = useParams();
  const { conversationId } = params;

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);

  useEffect(() => {
    pusherClient.subscribe(conversationId)
    bottomRef?.current?.scrollIntoView();

    const messageHandler = (message: MessageType) => {
      axios.post(`/api/conversations/${conversationId}/seen`);

      setMessages((current) => [...current, message]);
      
      bottomRef?.current?.scrollIntoView();
    };

    const updateMessageHandler = (newMessage: MessageType) => {
      console.log('UDPATE_HANDLER', newMessage)
      setMessages((current) => current.map((currentMessage) => {
        if (currentMessage.id === newMessage.id) {
          return newMessage;
        }
  
        return currentMessage;
      }))
    };
  

    pusherClient.bind('messages:new', messageHandler)
    pusherClient.bind('message:update', updateMessageHandler);

    return () => {
      pusherClient.unsubscribe(conversationId)
      pusherClient.unbind('messages:new', messageHandler)
      pusherClient.unbind('message:update', updateMessageHandler)
    }
  }, [conversationId]);

  return ( 
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, i) => (
        <MessageBox isLast={i === messages.length - 1} key={message.id} data={message} />
      ))}
      <div className="pt-24" ref={bottomRef} />
    </div>
  );
}
 
export default Body;