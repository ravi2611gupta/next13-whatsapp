import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import { pusherServer } from '@/app/libs/pusher'
import prisma from "@/app/libs/prismadb";

interface IParams {
  conversationId?: string;
}

export async function POST(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const currentUser = await getCurrentUser();
    const {
      conversationId
    } = params;

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const updatedConversation = await prisma.conversation.update({
      where: {
        id: conversationId
      },
      data: {
        seenBy: {
          push: currentUser.email
        },
      },
      include: {
        users: true,
        messages: true
      }
    });

    pusherServer.trigger(currentUser.email, 'conversation-list', updatedConversation);

    return NextResponse.json(updatedConversation)
  } catch (error) {
    console.log(error, 'ERROR_MESSAGES')
    return new NextResponse('Error', { status: 500 });
  }
}