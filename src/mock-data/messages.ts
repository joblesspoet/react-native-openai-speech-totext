import {Message, ROLE} from '../types';

export const MESSAGES: Array<Message> = [
  {
    role: ROLE.User,
    content: 'How are you?',
  },
  {
    role: ROLE.User,
    content: 'Create an image of a dog playing wiht cat.',
  },
  {
    role: ROLE.Assistant,
    content: 'Create an image of a dog playing wiht cat.',
  },
  {
    role: ROLE.Assistant,
    content:
      'https://media.istockphoto.com/id/1050049486/photo/mini-robot-finger-point.jpg?s=612x612&w=0&k=20&c=JZmXc0VPN-2aVSzzwAyNepvR8Yg1ZdaFbn7jn9U-l7U=',
  },
];
