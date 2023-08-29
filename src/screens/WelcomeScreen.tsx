import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/Welcome';

export const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToVoice = () => {
    navigation.navigate('Voice' as never);
  };

  return (
    <SafeAreaView className="flex flex-1 justify-around bg-white">
      <View className="space-y-2 ">
        <Text
          style={styles.headingMain}
          className="text-center font-bold text-gray-700">
          Homer
        </Text>
        <Text
          style={styles.subHeading}
          className="text-center tracking-wider text-gray-600 font-semibold ">
          The Future is here, powered by AI.
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image
          source={require('../assets/images/welcomeIcon.png')}
          style={styles.mainLogo}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={handleNavigateToVoice}
        style={styles.btnGetStarted}
        className="m-4 p-4 rounded-2xl">
        <Text
          style={styles.btnGetStartedText}
          className="text-center font-bold text-white">
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
