import React, {useEffect, useRef} from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from '../styles/components/Messages';
import {MessageyCard} from './MessageyCard';
import {MessagesProps} from '../types';

export const Messages: React.FunctionComponent<MessagesProps> = ({
  messages,
}) => {
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    if (messages.length > 0 && listRef.current) {
      // Add null check here
      listRef.current.scrollToEnd({animated: true});
    }
  }, [messages]);
  return (
    <View className="space-y-2 flex-1">
      <Text
        style={styles.headingMain}
        className="text-gray-700 font-semibold ml-1">
        Assistant
      </Text>
      <View style={styles.container} className="bg-neutral-200 rounded-3xl p-4">
        <FlatList
          initialNumToRender={50}
          ref={listRef}
          data={messages}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => <MessageyCard {...item} />}
        />
      </View>
    </View>
  );
};
