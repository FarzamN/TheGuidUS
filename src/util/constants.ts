import {Dimensions, Platform} from 'react-native';
import {EmailRegix} from './url';

export const {width, height} = Dimensions.get('screen');

export const f_inch = width <= 350 && height <= 600;
export const tab = width >= 768 && height >= 1024;
export const phone = width <= 400 && height <= 800;

export const OS = Platform.OS;
export const iOS = Platform.OS === 'ios';
export const android = Platform.OS === 'android';

export const minLength = {
  value: 8,
  message: 'minimum length is 8',
};

export const maxLength = {
  value: 16,
  message: 'maximum length is 16',
};

export const emailPattern = {
  value: EmailRegix,
  message: 'Email is not valid',
};

export const required = (type: String) => {
  return `${type} is Required`;
};
