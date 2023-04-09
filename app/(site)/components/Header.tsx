import Avatar from "@/app/components/Avatar";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return ( 
    <div className="bg-white w-full flex border-b-[1px] sm:px-6 pb-4 px-4 lg:px-8 justify-between items-center">
      <div className="flex gap-3 items-center">
        <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <div className="flex flex-col">
          <div>Leslie Alexander</div>
          <div className="text-sm text-emerald-500 font-light">Online</div>
        </div>
      </div>
      <EllipsisHorizontalCircleIcon 
        className="
          h-8
          text-emerald-500
          cursor-pointer
          hover:text-emerald-600
          transition
        "
      />
    </div>
  );
}
 
export default Header;
