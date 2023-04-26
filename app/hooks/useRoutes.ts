import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";
import { ArrowLeftOnRectangleIcon, ChatBubbleOvalLeftIcon, UsersIcon } from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";

const useRoutes = () => {
  const pathname = usePathname();
  const params = useParams();

  const routes = useMemo(() => [
    { 
      label: 'Chat', 
      href: '/conversations', 
      icon: ChatBubbleOvalLeftIcon,
      active: pathname === '/conversations' || !!params.conversationId
    },
    { 
      label: 'Users', 
      href: '/users', 
      icon: UsersIcon, 
      active: pathname === '/users'
    },
    { 
      label: 'Logout', 
      onClick: () => signOut(),
      href: '#',
      icon: ArrowLeftOnRectangleIcon, 
    }
  ], [pathname, params]);

  return routes;
};

export default useRoutes;
