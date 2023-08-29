import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../styles/components/Features';
import {CommonCardProps} from '../types/common';

export const FeatureCard: React.FunctionComponent<CommonCardProps> = ({
  cardColor,
  cardImage,
  cardTitle,
  cardDescription,
}) => {
  return (
    <View
      testID="feature-card"
      className={`${cardColor} p-4 rounded-xl space-y-2 mb-2`}>
      <View className="flex-row items-center space-x-1">
        <Image style={styles.gptIcon} source={cardImage} />
        <Text style={styles.cardTitle} className="font-semibold text-gray-700">
          {cardTitle}
        </Text>
      </View>
      <Text
        style={styles.cardDescription}
        className="text-gray-700 font-medium">
        {cardDescription}
      </Text>
    </View>
  );
};
