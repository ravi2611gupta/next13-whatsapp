import { useParams } from "next/navigation";
import { useMemo } from "react";

const useChat = () => {
  const params = useParams();

  const isOpen = useMemo(() => !!params.chatId, [params.chatId]);

  return useMemo(() => ({
    isOpen
  }), [isOpen]);
};

export default useChat;
