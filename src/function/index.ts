import {colors} from '../util/colors';
import {Appearance} from 'react-native';
import Toast from 'react-native-toast-message';
import BootSplash from 'react-native-bootsplash';
import navigationColor from 'react-native-system-navigation-bar';

export const checkUserDetails = () => {
  BootSplash.hide();
};

export const BarColor = () => {
  navigationColor.setNavigationColor(colors.Sky, 'dark', 'navigation');
};

export const catchErr = 'Session Expired Login Again';
// 'Session is Expired please login again'
export const sessionExp = (mes: string) => {
  Toast.show({
    type: 'error',
    text1: 'Session Expired',
    text2: mes,
  });
};

export const catchFun = () => {
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: 'Something went wrong',
  });
};

export const appColor = () => {
  Appearance.setColorScheme('light');
};
