export interface Message {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  ratings: number[];
}

export interface MessageFetchAction {
  type: "fetch";
  payload: {
    data: Message[];
  };
}

export interface MessageAddAction {
  type: "add";
  payload: {
    message: Message;
  };
}

export type MessageAction = MessageFetchAction | MessageAddAction;
