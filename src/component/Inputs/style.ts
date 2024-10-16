import {StyleSheet} from 'react-native';
import {width} from '../../util/constants';
import {colors} from '../../util/colors';
import {fonts} from '../../util/fonts';

export default StyleSheet.create({
  Container: {
    marginTop: 10,
    width: width - 20,
  },
  InputStyles: {
    fontSize: 16,
    borderRadius: 15,
    width: width - 20,
    color: colors.white,
    alignSelf: 'center',
    fontFamily: fonts.font400,
    backgroundColor: colors.Non,
  },
});
