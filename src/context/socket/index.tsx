import React, { useContext, useState, useEffect, ReactNode } from "react";
import { io, Socket } from "socket.io-client";

import { ClientToServerEvents, ServerToClientEvents } from "./types";

type SocketProviderProps = {
  children: ReactNode;
};

type SocketContextType = {
  socket: Socket | null;
  isConnected: boolean;
};

const SocketContext = React.createContext<SocketContextType | undefined>(
  undefined
);

export function SocketProvider({ children }: SocketProviderProps) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
      "http://localhost:3001"
    );

    setSocket(socket);

    socket.on("connect", () => {
      console.log('socket connected', socket.id);
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      console.log('socket disconnect', socket.id);
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
}

export function useSocket() {
  const socketContext = useContext(SocketContext);
  if (!socketContext) {
    throw new Error("Component beyond SocketContext!");
  }
  return socketContext;
}
