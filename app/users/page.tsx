import List from './components/List';

const People = () => {
  return (
    <>
      <List />
      <div className="hidden lg:block lg:pl-80 h-full">
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6 h-full flex justify-center items-center bg-gray-100">
        <div className="text-center items-center flex flex-col">
          <h3 className="mt-2 text-2xl font-semibold text-gray-900">Select a chat or start a new conversation</h3>
        </div>
        </div>
      </div>
    </>
   );
}
 
export default People;
