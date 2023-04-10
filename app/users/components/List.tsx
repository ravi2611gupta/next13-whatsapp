import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import Input from "../../components/Input";
import ChatBox from "../../components/ChatBox";

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Hey, just checking if...',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Hey, just checking if...',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Hey, just checking if...',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const List = () => {
  return ( 
    <aside className="pb-20lg:pb-0 fixed inset-y-0 lg:left-20 w-full lg:w-80 overflow-y-auto border-r border-gray-200 lg:block">
      <div className="px-5">
        <div className="flex-col">
          <div className="text-2xl font-bold text-neutral-800 pt-4">
            People
          </div>
          <div className="my-2">
            <Input icon={MagnifyingGlassIcon} placeholder="Search" />
          </div>
        </div>
        <div className="text-sm text-neutral-500 font-light my-4">
          Active (3)
        </div>
        {people.map((person) => (
          <ChatBox
            imageUrl={person.imageUrl}
            name={person.name}
            key={person.email}
          />
        ))}
      </div>
    </aside>
   );
}
 
export default List;