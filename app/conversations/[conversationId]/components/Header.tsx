'use client';

import { ChevronLeftIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

import Avatar from "@/app/components/Avatar";
import Link from "next/link";
import { useState } from "react";
import ProfileDrawer from "./ProfileDrawer";
import { Conversation, User } from "@prisma/client";
import useOtherUser from "@/app/hooks/useOtherUser";

interface HeaderProps {
  conversation: Conversation & {
    users: User[]
  };
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
  <>
    <ProfileDrawer user={otherUser} isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    <div className="bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
      <div className="flex gap-3 items-center">
        <Link href="/conversations" className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer">
          <ChevronLeftIcon className="h-6" />
        </Link>
        <Avatar src={otherUser.imageUrl} />
        <div className="flex flex-col">
          <div>{otherUser.name}</div>
          <div className="text-sm font-light text-neutral-500">Active</div>
        </div>
      </div>
      <EllipsisHorizontalIcon 
        onClick={() => setDrawerOpen(true)}
        className="
          h-8
          text-sky-500
          cursor-pointer
          hover:text-sky-600
          transition
        "
      />
    </div>
    </>
  );
}
 
export default Header;
