import {fonts} from './fonts';

export const screenOptions = {
  headerShown: false,
  animation: 'fade',
  orientation: 'portrait_up',
};

export const fontConfig = {
  ios: {
    regular: {
      fontFamily: fonts.font400,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: fonts.font500,
      fontWeight: 'normal',
    },
    light: {
      fontFamily: fonts.font300,
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: fonts.font200,
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: fonts.font400,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: fonts.font500,
      fontWeight: 'normal',
    },
    light: {
      fontFamily: fonts.font300,
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: fonts.font200,
      fontWeight: 'normal',
    },
  },
};

export const OverboardButton = [
  {title: 'Get Started', path: 'register', reverse: true},
  {title: 'I already have an account', path: 'login', reverse: false},
];

export const LoginInput = [
  {icon: 'email', p: 'Email', name: 'email', def: 'johnmark@gmail.com'},
  {
    icon: 'form-textbox-password',
    p: 'Password',
    name: 'password',
    def: '12345678',
  },
];
export const ChangePasswordInput = [
  {p: 'Password', name: 'password'},
  {p: 'Confirm Password', name: 'c_password'},
];

export const RegisterInput = [
  {icon: 'account', p: 'Full Name', name: 'name'},
  {icon: 'email', p: 'Email', name: 'email'},
  {icon: 'phone', p: 'Phone Number', name: 'number'},
  {
    icon: 'form-textbox-password',
    p: 'Password',
    name: 'password',
    pw: true,
  },
  {
    icon: 'form-textbox-password',
    p: 'Confirm Password',
    name: 'c_password',
    pw: true,
  },
];
