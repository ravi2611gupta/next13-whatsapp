import { cache } from "react";

import prisma from "@/app/libs/prismadb";
import { pusherServer } from "../libs/pusher";
import getCurrentUser from "./getCurrentUser";

const getConversationById = cache(async (
  conversationId: string
) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.email) {
      return null;
    }
  
    const conversation = await prisma.conversation.update({
      where: {
        id: conversationId
      },
      include: {
        users: true,
        messages: true
      },
      data: {
        seenBy: {
          push: currentUser.email
        }
      }
    });

    await pusherServer.trigger(currentUser.email, 'conversation-list', conversation);

    return conversation;
  } catch (error: any) {
    return null;
  }
});

export default getConversationById;
