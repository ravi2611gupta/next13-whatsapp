import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";
import { ChatBubbleOvalLeftIcon, UsersIcon } from "@heroicons/react/24/solid";

const useRoutes = () => {
  const pathname = usePathname();
  const params = useParams();

  const routes = useMemo(() => [
    { 
      label: 'Chat', 
      href: '/', 
      icon: ChatBubbleOvalLeftIcon,
      active: pathname === '/' || !!params.chatId
    },
    { 
      label: 'Users', 
      href: '/users', 
      icon: UsersIcon, 
      active: pathname === '/users'
    }
  ], [pathname, params]);

  return routes;
};

export default useRoutes;
