import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <div className="lg:pl-80">
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6 h-[70vh] flex justify-center items-center">
      <div className="text-center items-center flex flex-col">
        <ChatBubbleLeftEllipsisIcon className="h-12 text-gray-500" />
        <h3 className="mt-2 text-sm font-semibold text-gray-900">Select a chat</h3>
        <p className="mt-1 text-sm text-gray-500">Select a chat from the sidebar!</p>
      </div>
      </div>
    </div>
  )
}

export default Home;
