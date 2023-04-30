'use client';

import clsx from "clsx";

import useChat from "../hooks/useChat";
import EmptyState from "../components/EmptyState";

const Home = () => {
  const { isOpen } = useChat();

  return (
    <div className={clsx(
      'lg:pl-80 h-full lg:block', 
      isOpen ? 'block' : 'hidden'
    )}>
      <EmptyState />
    </div>
  )
}

export default Home;
