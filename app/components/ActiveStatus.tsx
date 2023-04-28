'use client';

import { useEffect } from "react";
import { pusherClient } from "../libs/pusher";
import useActiveChannel from "../hooks/useActiveChannel";

const ActiveStatus = () => {
  useActiveChannel();

  return null;
}
 
export default ActiveStatus;