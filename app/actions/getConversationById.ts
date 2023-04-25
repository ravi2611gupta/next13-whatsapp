import { cache } from "react";

import prisma from "@/app/libs/prismadb";

interface IParams {
  conversationId?: string;
}

const getConversationById = cache(async (
  params: IParams
) => {
  const { conversationId } = params;

  try {
    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId
      },
      include: {
        users: true
      }
    });

    return conversation;
  } catch (error: any) {
    return null;
  }
});

export default getConversationById;
