import MessageBox from "./MessageBox";
import { Message, User } from "@prisma/client";

interface BodyProps {
  messages: (Message & { sender: User })[];
}

const Body: React.FC<BodyProps> = ({ messages = [] }) => {
  return ( 
    <div className="flex-1 overflow-y-auto">
      {messages.map((message) => (
        <MessageBox key={message.id} data={message} />
      ))}
    </div>
   );
}
 
export default Body;