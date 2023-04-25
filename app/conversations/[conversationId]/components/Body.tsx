import Avatar from "@/app/components/Avatar";
import Message from "./Message";

const Body = () => {
  return ( 
    <div className="flex-1 overflow-y-auto">
      <Message />
      <Message isOwn />
      <Message imageSrc="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg" />
      <Message isOwn imageSrc="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg" />
    </div>
   );
}
 
export default Body;