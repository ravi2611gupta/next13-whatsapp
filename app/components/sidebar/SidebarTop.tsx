import TopButton from "./TopButton";

const SidebarTop = () => {
  return ( 
    <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-emerald-500 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <TopButton />
      <div className="flex-1 text-sm font-semibold leading-6 text-white">Chat</div>
    </div>
   );
}
 
export default SidebarTop;