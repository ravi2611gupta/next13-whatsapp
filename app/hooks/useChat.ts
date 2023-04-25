import { useParams } from "next/navigation";
import { useMemo } from "react";

const useChat = () => {
  const params = useParams();

  const isOpen = useMemo(() => !!params.conversationId, [params.conversationId]);

  return useMemo(() => ({
    isOpen
  }), [isOpen]);
};

export default useChat;
