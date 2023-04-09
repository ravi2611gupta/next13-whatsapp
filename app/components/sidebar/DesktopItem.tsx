'use client';

import Link from "next/link";

import { classNames } from "@/app/helpers";

interface DesktopItemProps {
  label: string;
  href: string;
  icon: any;
  active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({ label, href, icon: Icon, active }) => {
  return ( 
    <li key={label} className="xl:w-full">
      <Link
        href={href}
        className={classNames(
          active ? 'bg-emerald-800 text-white' : 'text-white hover:text-white hover:bg-emerald-800',
          'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold'
        )}
      >
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className="sr-only">{label}</span>
        <div className="hidden xl:block">
          {label}
        </div>
      </Link>
    </li>
   );
}
 
export default DesktopItem;