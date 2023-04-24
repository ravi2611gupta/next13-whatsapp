'use client';

import DesktopItem from "./DesktopItem";
import useRoutes from "@/app/hooks/useRoutes";

const DesktopSidebar = () => {
  const routes = useRoutes();

  return ( 
    <div className="
      hidden 
      lg:fixed 
      lg:inset-y-0 
      lg:left-0 
      lg:z-50 
      lg:block 
      lg:w-20 
      xl:px-6
      lg:overflow-y-auto 
      lg:bg-white 
      lg:border-r-[1px]
      lg:pb-4
    ">
      <nav className="mt-4">
        <ul role="list" className="flex flex-col items-center space-y-1">
          {routes.map((item) => (
            <DesktopItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
              onClick={item.onClick}
            />
          ))}
        </ul>
      </nav>
    </div>
   );
}
 
export default DesktopSidebar;