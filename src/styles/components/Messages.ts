import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  containerMain: {
    height: hp(75),
  },
  container: {
    height: hp(58),
  },
  headingMain: {
    fontSize: wp(5),
  },
  msgByUserContainer: {
    width: wp(70),
  },
  chatImage: {
    height: wp(60),
    width: wp(60),
  },
  chatText: {
    fontSize: wp(4),
  },
});
