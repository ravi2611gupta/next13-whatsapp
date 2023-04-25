import getConversationById from "@/app/actions/getConversationById";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import getMessages from "@/app/actions/getMessages";

interface IParams {
  conversationId: string;
}

const ChatId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params);
  const messages = await getMessages(params);

  if (!conversation) {
    return (
      <p>SOmething went wrong!</p>
    )
  }

  return ( 
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body messages={messages} />
        <Form />
      </div>
    </div>
  );
}

export default ChatId;