import { cache } from "react";

import prisma from "@/app/libs/prismadb";

const getMessages = cache(async (
  conversationId: string
) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId
      },
      include: {
        sender: true
      },
      orderBy: {
        createdAt: 'asc'
      }
    });

    return messages;
  } catch (error: any) {
    return [];
  }
});

export default getMessages;
