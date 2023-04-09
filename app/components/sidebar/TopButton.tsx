'use client';

import { Bars3Icon } from "@heroicons/react/24/outline";

import useSidebar from "@/app/hooks/useSidebar";

const TopButton = () => {
  const sidebar = useSidebar();

  return ( 
    <button type="button" className="-m-2.5 p-2.5 text-gray-100 lg:hidden" onClick={sidebar.onOpen}>
      <span className="sr-only">Open sidebar</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
   );
}
 
export default TopButton;
