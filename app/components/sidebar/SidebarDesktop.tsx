'use client';

import DesktopItem from "./DesktopItem";
import useRoutes from "@/app/hooks/useRoutes";


const SidebarDesktop = () => {
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
      xl:w-72 
      xl:px-6
      lg:overflow-y-auto 
      lg:bg-emerald-500 
      lg:pb-4
    ">
      <div className="flex h-16 shrink-0 items-center lg:justify-center xl:justify-start">
        <img
          className="h-10 w-auto mt-4 xl:pl-2"
          src="/images/logo.png"
          alt="Whatsapp"
        />
      </div>
      <nav className="mt-8">
        <ul role="list" className="flex flex-col xl:items-start lg:items-center space-y-1">
          {routes.map((item) => (
            <DesktopItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
            />
          ))}
        </ul>
      </nav>
    </div>
   );
}
 
export default SidebarDesktop;