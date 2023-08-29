import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  botIcon: {
    width: hp(15),
    height: hp(15),
  },
  loadingImg: {
    width: hp(10),
    height: hp(10),
  },
});
