import Avatar from "@/app/components/Avatar";

const Body = () => {
  return ( 
    <div className="flex-1 overflow-y-auto">
      <div className="flex gap-3 p-4">
        <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <div className="text-sm text-gray-500">
              Ricky Smith
            </div>
            <div className="text-xs text-gray-400">
              11:00 AM
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl">
            Hello There!
          </div>
        </div>
      </div>
      <div className="ml-auto flex gap-3 p-4 justify-end">
        <div className="order-2">
          <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 justify-end">
            <div className="text-sm text-gray-500">
              You
            </div>
            <div className="text-xs text-gray-400">
              11:00 AM
            </div>
          </div>
          <div className="p-4 bg-emerald-500 rounded-xl text-white">
            Hello There!
          </div>
        </div>
      </div>
      <div className="ml-auto flex gap-3 p-4 justify-end">
        <div className="order-2">
          <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 justify-end">
            <div className="text-sm text-gray-500">
              You
            </div>
            <div className="text-xs text-gray-400">
              11:00 AM
            </div>
          </div>
          <div className="overflow-hidden bg-emerald-500 rounded-xl text-white aspect-auto">
            <img className="h-72" src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg" />
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Body;