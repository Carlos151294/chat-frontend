import { useEffect, useReducer, useCallback } from "react";
// import { getMessages } from '../../api/chat';

import { MessageAction } from "./types";

interface MessagesState {
  messages: [];
  initialized: boolean;
}

export function useChatData(): [MessagesState, React.Dispatch<MessageAction>] {
  const chatReducer = (state: MessagesState, action: MessageAction) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, {
    messages: [],
    initialized: false,
  });

  const fetchChat = useCallback(async () => {
    // const data = await getMessages()
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await response.json();
    console.log(data);
  }, []);

  useEffect(() => {
    fetchChat();
  }, [fetchChat]);

  return [state, dispatch];
}
