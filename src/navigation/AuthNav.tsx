import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Login,
  Register,
  OverBoard,
  OTPScreen,
  ChangePassword,
  ForgetPassword,
} from '../screen/auth';
import {screenOptions} from '../util/Data';

const AuthNav = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="OverBoard" screenOptions={screenOptions}>
        {[
          {n: 'login', c: Login},
          {n: 'register', c: Register},
          {n: 'OverBoard', c: OverBoard},
          {n: 'otpScreen', c: OTPScreen},
          {n: 'ForgetPassword', c: ForgetPassword},
          {n: 'changePassword', c: ChangePassword},
        ].map(({n, c}) => (
          <Screen name={n} component={c} key={n} />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};

export default AuthNav;
