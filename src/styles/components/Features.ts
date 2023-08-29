import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    height: hp(70),
  },
  headingMain: {
    fontSize: wp(6.5),
  },
  gptIcon: {
    height: hp(4),
    width: hp(4),
  },
  cardTitle: {
    fontSize: wp(4.8),
  },
  cardDescription: {
    fontSize: wp(3.8),
  },
});
