import React from 'react';
import {Image, View} from 'react-native';
import {ChatImageProps} from '../types';
import {styles} from '../styles/components/Messages';

export const ChatImage: React.FunctionComponent<ChatImageProps> = ({
  source,
}) => {
  return (
    <View className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
      <Image
        source={{uri: source}}
        resizeMode="contain"
        className="rounded-2xl"
        style={styles.chatImage}
      />
    </View>
  );
};
