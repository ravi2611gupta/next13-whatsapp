'use client';

import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { EllipsisHorizontalIcon, TrashIcon } from '@heroicons/react/24/outline';
import ConfirmModal from './ConfirmModal';

const Options = () => {
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <>
      <ConfirmModal isOpen={confirmOpen} onClose={() => setConfirmOpen(false)} />
      <Popover className="relative">
        <Popover.Button className="inline-flex items-center text-sm font-semibold leading text-gray-900">
          <EllipsisHorizontalIcon 
            className="
              h-8
              text-sky-500
              cursor-pointer
              hover:text-sky-600
              transition
            "
          />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute top-4 -left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-3/4 ">
            <div onClick={() => setConfirmOpen(true)} className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-rose-500 shadow-lg ring-1 ring-gray-900/5 cursor-pointer">
              <div className="hover:text-rose-600 flex gap-2 items-center">
                <TrashIcon className="h-5" />
                <div>
                  Delete conversation
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )
}

export default Options;
