import Input from "@/app/components/Input";
import { DocumentPlusIcon, MicrophoneIcon, PaperAirplaneIcon, PhotoIcon } from "@heroicons/react/24/solid";

const Form = () => {
  return ( 
    <div className="pt-4 px-4 bg-white border-t flex items-center gap-4">
      <PhotoIcon className="h-8 text-gray-400" />
      <MicrophoneIcon className="h-6 text-gray-400" />
      <DocumentPlusIcon className="h-6 text-gray-400" />
      <Input placeholder="Write a message" />
      <div className="rounded-full p-2 bg-emerald-500 cursor-pointer hover:bg-emerald-600 transition">
        <PaperAirplaneIcon className="h-6 text-white" />
      </div>
    </div>
  );
}
 
export default Form;