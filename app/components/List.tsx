'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import Input from "./Input";
import ChatBox from "./ChatBox";

import useChat from "@/app/hooks/useChat";
import { classNames } from "@/app/helpers";

interface ListProps {
  items: any[];
  title?: string;
}

const List: React.FC<ListProps> = ({ items, title }) => {
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
            <Input icon={MagnifyingGlassIcon} placeholder="Search" />
          </div>
        </div>
        {items.map((item) => (
          <ChatBox
            imageUrl={item.imageUrl}
            name={item.name}
            key={item.email}
            message={item.role}
          />
        ))}
      </div>
    </aside>
   );
}
 
export default List;