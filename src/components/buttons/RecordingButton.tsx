import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/components/Buttons';
import RecordingButtonIcon from '../../assets/images/recordingIcon.png';
import RecordingButtonLoading from '../../assets/images/voiceLoading.gif';

type RecordingButtonProps = {
  recording: boolean;
  btnOnPress?: () => void;
};

export const RecordingButton: React.FC<RecordingButtonProps> = ({
  recording = false,
  btnOnPress,
}) => {
  if (recording) {
    return <RecordingImage imgSource={RecordingButtonLoading} />;
  }

  return (
    <TouchableOpacity onPress={btnOnPress}>
      <RecordingImage imgSource={RecordingButtonIcon} />
    </TouchableOpacity>
  );
};

const RecordingImage: React.FC<{imgSource: any}> = ({imgSource}) => (
  <Image style={styles.btnRecording} source={imgSource} resizeMode="contain" />
);
