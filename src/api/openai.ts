import axios from 'axios';
import {Message, ROLE} from '../types';
import {OPENAI_SECRET_KEY} from '@env';

// Constants for API key and endpoints
const CHAT_GPT_END_POINT = 'https://api.openai.com/v1/chat/completions';
const DALLE_END_POINT = 'https://api.openai.com/v1/images/generations';

// Create an Axios client with headers
const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPENAI_SECRET_KEY}`,
  },
});

// Main function to initiate the call
export const makeACall = async (prompt: string, messages: Array<Message>) => {
  try {
    console.log(prompt, messages);
    // Ask if the message wants to generate an image
    const res = await client.post(CHAT_GPT_END_POINT, {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: ROLE.User,
          content: `Does this message want to generate an AI picture, image, art or anything similar? ${prompt} . Simply answer with a yes or no.`,
        },
      ],
    });

    // Check the response for image generation decision
    const isArt = res.data?.choices[0]?.message?.content.trim();
    console.log(isArt);
    if (isArt.toLowerCase().includes('yes')) {
      // Generate image using image generation API
      return imageGenerateUsingDalle(prompt, messages);
    } else {
      // Continue with chat GPT API call
      return chatgptAPICall(prompt, messages);
    }
  } catch (error: any) {
    console.log('Error in text check. ', error.request, error.response);
    return Promise.reject({
      msg: false,
      data: error?.message,
    });
  }
};

// Call GPT-3.5 Turbo for chat continuation
const chatgptAPICall = async (prompt: string, messages: Array<Message>) => {
  try {
    console.log(prompt, messages);
    const res = await client.post(CHAT_GPT_END_POINT, {
      model: 'gpt-3.5-turbo',
      messages,
    });

    // Extract the response answer and update messages
    const answer = res.data?.choices[0]?.message?.content;

    return Promise.resolve({
      msg: true,
      data: [
        ...messages,
        {
          role: ROLE.Assistant,
          content: answer,
        },
      ],
    });
  } catch (error: any) {
    console.log('Error in chat ', error);
    return Promise.reject({
      msg: false,
      data: error?.message,
    });
  }
};

// Generate image using DALL-E
const imageGenerateUsingDalle = async (
  prompt: string,
  messages: Array<Message>,
) => {
  try {
    const res = await client.post(DALLE_END_POINT, {
      prompt,
      n: 1,
      size: '256x256',
    });

    // Extract the URL and update messages
    const url = res?.data?.data[0]?.url;
    return Promise.resolve({
      msg: true,
      data: [
        ...messages,
        {
          role: ROLE.Assistant,
          content: url,
        },
      ],
    });
  } catch (error: any) {
    console.log('Error in image generate ', error);
    return Promise.reject({
      msg: false,
      data: error?.message,
    });
  }
};
