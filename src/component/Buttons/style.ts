import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';
import {fonts} from '../../util/fonts';

export default StyleSheet.create({
  containerStyle: {
    marginTop: 10,
    alignSelf: 'center',
  },
  loading: {
    fontSize: 16,
    marginLeft: 10,
    color: colors.white,
    fontFamily: fonts.font500,
  },
  title: {
    fontSize: 15,
    textTransform: 'capitalize',
    fontFamily: fonts.font600,
  },

  // Wallpaper Button style
  WPContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    height: 45,
  },
  text: {color: '#000', fontSize: 16, fontFamily: fonts.font600},
});
