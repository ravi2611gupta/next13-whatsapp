import { cache } from "react";

import prisma from "@/app/libs/prismadb";

interface IParams {
  conversationId?: string;
}

const getMessages = cache(async (
  params: IParams
) => {
  const { conversationId } = params;

  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId
      },
      include: {
        sender: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return messages;
  } catch (error: any) {
    return [];
  }
});

export default getMessages;
