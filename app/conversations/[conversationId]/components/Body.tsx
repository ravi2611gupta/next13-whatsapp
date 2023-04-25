import Avatar from "@/app/components/Avatar";
import MessageBox from "./MessageBox";
import { Message } from "@prisma/client";

interface BodyProps {
  messages: Message[];
}

const Body: React.FC<BodyProps> = ({ messages = [] }) => {
  return ( 
    <div className="flex-1 overflow-y-auto">
      {messages.map((message) => (
        <MessageBox key={message.id} data={message} />
      ))}
      {/* <MessageBox isOwn />
      <MessageBox imageSrc="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg" />
      <MessageBox isOwn imageSrc="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg" /> */}
    </div>
   );
}
 
export default Body;