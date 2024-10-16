import {StyleSheet} from 'react-native';
import {width} from '../../util/constants';
import {colors} from '../../util/colors';

const {create, absoluteFillObject} = StyleSheet;
export default create({
  Center_Container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.Sky,
  },

  Image_Box: {
    width: width / 2,
    aspectRatio: 1 / 1,
    alignSelf: 'center',
  },
});
