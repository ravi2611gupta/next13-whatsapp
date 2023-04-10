import Link from "next/link";

import { classNames } from "@/app/helpers";

interface MobileItemProps {
  href: string;
  icon: any;
  active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({ href, icon: Icon, active }) => {
  return ( 
    <Link href={href} className={classNames(
        active ? 'bg-gray-100 text-black' : 'text-gray-500 hover:text-black hover:bg-gray-100',
        'group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4'
      )}>
      <Icon className="h-6 w-6" />
    </Link>
   );
}
 
export default MobileItem;