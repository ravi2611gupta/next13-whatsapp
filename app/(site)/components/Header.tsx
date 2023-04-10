import { ChevronLeftIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

import Avatar from "@/app/components/Avatar";
import Link from "next/link";

const Header = () => {
  return ( 
    <div className="bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
      <div className="flex gap-3 items-center">
        <Link href="/" className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer">
          <ChevronLeftIcon className="h-6" />
        </Link>
        <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <div className="flex flex-col">
          <div>Leslie Alexander</div>
          <div className="text-sm font-light text-neutral-500">Active</div>
        </div>
      </div>
      <EllipsisHorizontalIcon 
        className="
          h-8
          text-sky-500
          cursor-pointer
          hover:text-sky-600
          transition
        "
      />
    </div>
  );
}
 
export default Header;
