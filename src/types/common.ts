import React from 'react';

export type CommonCardProps = {
  cardColor: string;
  cardImage: any;
  cardTitle: string;
  cardDescription: string;
};

export enum ROLE {
  User = 'user',
  Assistant = 'Assistant',
}

export type Message = {
  role: ROLE;
  content: string;
};

export type ChatImageProps = {
  source: string;
};
export type MessagesProps = {
  messages: Array<Message>;
};
