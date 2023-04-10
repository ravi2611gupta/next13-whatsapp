import Body from "./Body";
import Form from "./Form";
import Header from "./Header";

const Messenger = () => {
  return ( 
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header />
        <Body />
        <Form />
      </div>
    </div>
   );
}
 
export default Messenger;