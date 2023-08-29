import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type ButtonSmallProps = {
  onPress: () => void;
  title: string;
  btnStyle?: string;
};
export const ButtonSmall: React.FunctionComponent<ButtonSmallProps> = ({
  onPress,
  title,
  btnStyle = 'bg-neutral-400 rounded-3xl p-2 absolute right-10',
}) => {
  return (
    <TouchableOpacity onPress={onPress} className={btnStyle}>
      <Text className="text-white font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};
