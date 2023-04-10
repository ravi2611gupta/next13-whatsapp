import Input from "@/app/components/Input";
import { DocumentPlusIcon, MicrophoneIcon, PaperAirplaneIcon, PhotoIcon } from "@heroicons/react/24/solid";

const Form = () => {
  return ( 
    <div className="py-4 px-4 bg-white border-t flex items-center gap-4">
      <PhotoIcon className="h-10 text-sky-500" />
      <MicrophoneIcon className="h-8 text-sky-500" />
      <DocumentPlusIcon className="h-8 text-sky-500" />
      <Input placeholder="Write a message" />
      <div className="rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition">
        <PaperAirplaneIcon className="h-6 text-white" />
      </div>
    </div>
  );
}
 
export default Form;