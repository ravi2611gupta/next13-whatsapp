'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import Input from "../../components/inputs/Input";

import useChat from "@/app/hooks/useChat";
import { classNames } from "@/app/helpers";
import { User } from "@prisma/client";
import UserBox from "./UserBox";

interface UserListProps {
  items: User[];
  title?: string;
}

const UserList: React.FC<UserListProps> = ({ items, title }) => {
  const { isOpen } = useChat();

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
            {/* <Input register={() => ([])} icon={MagnifyingGlassIcon} placeholder="Search" /> */}
          </div>
        </div>
        {items.map((item) => (
          <UserBox
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </aside>
   );
}
 
export default UserList;
