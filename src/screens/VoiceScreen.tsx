import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {styles} from '../styles/Home';
import {Messages, Features} from '../components';
import {Message, ROLE} from '../types';
import {RecordingButton, ButtonSmall} from '../components/buttons';
import {useSpeech} from '../hooks/useSpeach';
import {makeACall} from '../api/openai';

export const VoiceScreen = () => {
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const {result, speaking, startSpeech, stopSpeech} = useSpeech();

  const clearMessageHistory = () => {
    setMessages([]);
  };

  const btnRecordingHandler = async () => {
    await startSpeech();
  };

  const stopRecording = async () => {
    await stopSpeech();
  };

  const processRequest = (updatedMessages: Array<Message>) => {
    // push the new message into messages array
    setLoading(true);
    makeACall(result as string, updatedMessages)
      .then(resp => {
        setLoading(false);
        if (resp.msg) {
          setMessages(resp.data);
        }
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (result) {
      const newMessages = [
        ...messages,
        {
          role: ROLE.User,
          content: result,
        },
      ];
      setMessages(newMessages);

      processRequest(newMessages);
    }
  }, [result]);

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        <View className="flex-row justify-center">
          <Image
            source={require('../assets/images/botIcon.png')}
            style={styles.botIcon}
          />
        </View>
        {messages.length > 0 ? <Messages messages={messages} /> : <Features />}
        <View className="flex justify-center items-center">
          {loading ? (
            <Image
              source={require('../assets/images/loading.gif')}
              style={styles.loadingImg}
            />
          ) : (
            <RecordingButton
              btnOnPress={btnRecordingHandler}
              recording={speaking}
            />
          )}

          {speaking && (
            <ButtonSmall
              title="Stop"
              btnStyle="bg-red-400 rounded-3xl p-2 absolute left-10"
              onPress={stopRecording}
            />
          )}

          {messages.length > 0 && (
            <ButtonSmall title="Clear" onPress={clearMessageHistory} />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};
