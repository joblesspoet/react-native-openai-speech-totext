import React from 'react';
import {Text, View} from 'react-native';
import {Message, ROLE} from '../types';
import {styles} from '../styles/components/Messages';
import {ChatImage} from './ChatImage';

export const MessageyCard: React.FunctionComponent<Message> = item => {
  const containerFor =
    item.role === ROLE.User ? 'justify-end' : 'justify-start';
  const textFor =
    item.role === ROLE.User
      ? 'rounded-tr-none bg-white'
      : 'rounded-tl-none bg-emerald-100';

  return (
    <View className={`flex-row ${containerFor}  mb-2`}>
      <View
        style={styles.msgByUserContainer}
        className={`p-2 flex rounded-2xl ${textFor}`}>
        {item.content.includes('https') ? (
          <ChatImage source={item.content} />
        ) : (
          <Text className="text-neutral-800" style={styles.chatText}>
            {item.content}
          </Text>
        )}
      </View>
    </View>
  );
};
