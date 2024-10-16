import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const style = StyleSheet.create({
  Overboard_Box: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    paddingTop: 20,
  },
  Image_Box: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  codeFieldRoot: {
    marginVertical: 10,
    justifyContent: 'space-evenly',
  },
  cell: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
  },
  CellBox: {
    borderRadius: 10,
    backgroundColor: colors.lightgrey,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },

  resendText: {fontWeight: '600'},
});
