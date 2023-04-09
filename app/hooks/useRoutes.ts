import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";
import { ChatBubbleLeftRightIcon, UsersIcon } from "@heroicons/react/24/outline";

const useRoutes = () => {
  const pathname = usePathname();
  const params = useParams();

  const routes = useMemo(() => [
    { 
      label: 'Chat', 
      href: '/', 
      icon: ChatBubbleLeftRightIcon,
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
