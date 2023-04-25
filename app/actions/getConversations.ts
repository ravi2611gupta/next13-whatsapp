import { cache } from "react";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversations = cache(async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser?.id) {
    return [];
  }

  try {
    const conversations = await prisma.conversation.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
      where: {
        userIds: {
          has: currentUser.id
        }
      },
      include: {
        users: true
      }
    });

    return conversations;
  } catch (error: any) {
    return [];
  }
});

export default getConversations;
