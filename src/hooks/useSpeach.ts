import {useEffect, useState, useCallback} from 'react';
import Voice, {
  SpeechErrorEvent,
  SpeechResultsEvent,
} from '@react-native-community/voice';

export const useSpeech = () => {
  const [speaking, setSpeaking] = useState<boolean>(false);
  const [result, setResult] = useState<string | undefined>('');

  const onSpeechStartHandler = useCallback(() => {
    console.log('Speech started.');
  }, []);

  const onSpeechEndHandler = useCallback(() => {
    console.log('Speech ended.');
    setSpeaking(false);
  }, []);

  const onSpeechResultsHandler = useCallback((data: SpeechResultsEvent) => {
    console.log(data);
    if (data.value !== undefined) {
      setResult(data.value[0]);
    }
  }, []);

  const onSpeechErrorHandler = useCallback((e: SpeechErrorEvent) => {
    console.log('Error...', e);
    setSpeaking(false);
  }, []);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;
    Voice.onSpeechError = onSpeechErrorHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [
    onSpeechStartHandler,
    onSpeechEndHandler,
    onSpeechResultsHandler,
    onSpeechErrorHandler,
  ]);

  const startSpeech = async () => {
    try {
      await Voice.start('en-US');
      setSpeaking(true);
    } catch (e) {
      setSpeaking(false);
      console.log(e);
    }
  };

  const stopSpeech = async () => {
    await Voice.stop();
  };

  return {result, speaking, startSpeech, stopSpeech};
};
