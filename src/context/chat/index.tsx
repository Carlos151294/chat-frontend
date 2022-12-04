import React, { useContext, ReactNode } from "react";

import { useChatData } from "./state";
import { useSocket } from "../socket/index";

type ChatProviderProps = {
  children: ReactNode;
};

type ChatContextType = {
  messages: [];
  messagesDispatch: React.Dispatch<any>;
};

const ChatContext = React.createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [{ messages, initialized }, messagesDispatch] = useChatData();
  const { socket, isConnected } = useSocket();
  console.log({ socket, isConnected });
  return (
    <ChatContext.Provider value={{ messages, messagesDispatch }}>
      {initialized ? children : <div>loading...</div>}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const chatContext = useContext(ChatContext);
  if (!chatContext) {
    throw new Error("Component beyond ChatContext!");
  }
  return chatContext;
};
