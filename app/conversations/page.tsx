'use client';

import { classNames } from "../helpers";
import useChat from "../hooks/useChat";
import EmptyState from "../components/EmptyState";

const Home = () => {
  const { isOpen } = useChat();

  return (
    <div className={classNames('lg:pl-80 h-full lg:block', isOpen ? 'block' : 'hidden')}>
      <EmptyState />
    </div>
  )
}

export default Home;
