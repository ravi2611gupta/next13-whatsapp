import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

export async function POST(
  request: Request,
) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const {
      userId
    } = body;

    if (!currentUser?.id || !userId) {
      return NextResponse.json(null);
    }

    const existingConversations = await prisma.conversation.findMany({
      where: {
        userIds: {
          hasEvery: [currentUser.id, userId]
        }
      }
    });

    const singleConversation = existingConversations[0];

    if (singleConversation) {
      return NextResponse.json(singleConversation);
    }

    const newConversation = await prisma.conversation.create({
      data: {
        users: {
          connect: [
            {
              id: currentUser.id
            },
            {
              id: userId
            }
          ]
        }
      }
    });

    return NextResponse.json(newConversation)
  } catch (error) {
    return NextResponse.json(null);
  }
}