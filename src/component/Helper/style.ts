import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../util/colors';
import {fonts} from '../../util/fonts';
import {width} from '../../util/constants';

export const style = StyleSheet.create({
  Divider: {
    width: width - 20,
    height: 1,
    borderRadius: 100,
    backgroundColor: 'grey',
  },
  helperText: {
    color: 'red',
    fontSize: 13,
    marginTop: 7,
    fontFamily: fonts.font500,
    left: 10,
  },

  ImageContainer: {
    width: 120,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    alignSelf: 'center',
  },
  IconBox: {
    bottom: 0,
    right: 15,
    padding: 5,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: colors.Main,
  },

  KeyboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  key: {
    backgroundColor: colors.white,
    width: '18%',
    borderRadius: 10,
    aspectRatio: 1 / 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    fontSize: 20,
    fontFamily: fonts.font600,
  },

  // !--------- Full Image styles
  indicator: {
    position: 'absolute',
  },
  // !--------- search bar styles

  SearchContainer: {
    height: 60,
    width: '100%',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    borderColor: colors.white,
    marginTop: StatusBar.currentHeight,
  },
  SearchInput: {
    fontSize: 15,
    maxWidth: '89%',
    borderColor: colors.white,
    fontFamily: fonts.font500,
  },

  // !--------- Plus Box styles
  PlusBoxContainer: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    zIndex: 1,
    backgroundColor: colors.Main,
    width: 55,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // !--------- Custom Toast styles

  ToastText1: {
    fontSize: 15,
    fontFamily: fonts.font600,
  },
  ToastText2: {
    fontSize: 13,
    fontFamily: fonts.font500,
  },
  ToastIconBox: {
    paddingRight: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
