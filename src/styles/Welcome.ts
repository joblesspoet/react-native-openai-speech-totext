import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  headingMain: {
    fontSize: wp(10),
  },
  subHeading: {
    fontSize: wp(4),
  },
  btnGetStarted: {
    backgroundColor: '#607D8B',
  },
  btnGetStartedText: {
    fontSize: wp(6),
  },
  mainLogo: {
    height: wp(75),
    width: wp(75),
  },
});
