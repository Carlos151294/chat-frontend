import { useEffect, useReducer, useCallback } from "react";
import { getMessages } from "../../api/chat";

import { Message, MessageAction } from "./types";

interface MessagesState {
  messages: Message[];
  initialized: boolean;
}

export function useChatData(): [MessagesState, React.Dispatch<MessageAction>] {
  const chatReducer = (state: MessagesState, action: MessageAction): MessagesState => {
    switch (action.type) {
      case "fetch":
        return {
          ...state,
          initialized: true,
          messages: action.payload.data,
        };
      case "add":
        return {
          ...state,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, {
    messages: [],
    initialized: false,
  });

  const fetchChat = useCallback(async () => {
    const data: Message[] = await getMessages();
    dispatch({ type: "fetch", payload: { data } });
  }, []);

  useEffect(() => {
    fetchChat();
  }, [fetchChat]);

  return [state, dispatch];
}
