import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from '../screens/WelcomeScreen';
import {VoiceScreen} from '../screens/VoiceScreen';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Voice" component={VoiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
