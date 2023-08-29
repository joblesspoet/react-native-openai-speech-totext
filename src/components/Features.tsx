import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles/components/Features';
import {FeatureCard} from './FeatureCard';
import ChatGptIcon from '../assets/images/chatgptIcon.png';
import DalleIcon from '../assets/images/dalleIcon.png';
import SmartAIIcon from '../assets/images/smartaiIcon.png';

export const Features = () => {
  return (
    <View style={styles.container} className="space-y-10">
      <Text style={styles.headingMain} className="text-gray-700 font-semibold">
        Featues
      </Text>
      <FeatureCard
        cardColor="bg-emerald-200"
        cardImage={ChatGptIcon}
        cardDescription="ChatGPT is an AI-powered language model developed by OpenAI, capable of generating human-like text based on context and past conversations."
        cardTitle="ChatGpt"
      />

      <FeatureCard
        cardColor="bg-purple-200"
        cardImage={DalleIcon}
        cardDescription="DALL·E 2 is an AI system that can create realistic images and art from a description in natural language."
        cardTitle="DALL-E"
      />
      <FeatureCard
        cardColor="bg-cyan-200"
        cardImage={SmartAIIcon}
        cardDescription="Smart Chat AI, the revolutionary AI chat application that utilizes the cutting-edge Chat GPT technology from OpenAI. With its advanced language."
        cardTitle="Smart AI"
      />
    </View>
  );
};
