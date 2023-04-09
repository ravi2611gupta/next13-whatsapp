'use client';

import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { classNames } from "@/app/helpers";

interface MobileItemProps {
  label: string;
  href: string;
  icon: any;
}

const MobileItem: React.FC<MobileItemProps> = ({
  label,
  href,
  icon: Icon,
}) => {
  const pathname = usePathname();

  const active = useMemo(() => {
    return pathname === href;
  }, [pathname, href]);

  return ( 
    <li key={label}>
      <Link
        href={href}
        className={classNames(
          active
            ? 'bg-emerald-800 text-white'
            : 'text-gray-100 hover:text-white hover:bg-emerald-800',
          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
        )}
      >
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        {label}
      </Link>
    </li>
   );
}
 
export default MobileItem;