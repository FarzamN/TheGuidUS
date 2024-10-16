import {StyleSheet} from 'react-native';
import {fonts} from '../../util/fonts';
import {colors} from '../../util/colors';

export default StyleSheet.create({
  Heading: {
    color: colors.black,
    fontSize: 20,
    fontFamily: fonts.font600,
  },
  Sub: {
    fontSize: 15,
    color: colors.black,
    fontFamily: fonts.font400,
  },
});
