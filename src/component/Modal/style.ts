import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';
import {fonts} from '../../util/fonts';

export default StyleSheet.create({
  MainModal: {
    margin: 0,
    justifyContent: 'center',
  },
  Modal_Container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  ModalContainer: {
    width: '70%',
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: colors.Sky,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  LottieView: {
    height: 150,
    alignSelf: 'center',
  },
  ModalText: {
    padding: 20,
    fontSize: 16,
    color: colors.Sky,
    textAlign: 'center',
    fontFamily: fonts.font500,
  },
});
