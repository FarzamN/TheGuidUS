import React, {useState} from 'react';
import {style} from './style';
import {SubmitHandler, useForm} from 'react-hook-form';
import {ILogin, ILoginInput} from '../../util/interface';
import {GlobalStyle} from '../../util/GlobalStyle';
import {
  Body,
  Button,
  Error,
  FullImage,
  Loader,
  MainInput,
  Sub,
  Validation,
} from '../../component';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';
import {
  emailPattern,
  maxLength,
  minLength,
  required,
} from '../../util/constants';
import {LoginInput} from '../../util/Data';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';

const Login = ({navigation}: ILogin) => {
  const {navigate} = navigation;
  const dispatch: AppDispatch = useDispatch();

  const [load, setLoad] = useState<boolean>(false);
  const [err, setErr] = useState<{visible: boolean; msg: string}>({
    visible: false,
    msg: '',
  });

  const onSubmit = async (inputs: any) => {
    setErr({visible: false, msg: ''});
    // dispatch(loginApi(inputs, setLoad, setErr, shake));
    // dispatch(setUser(inputs));
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});
  return (
    <Body>
      <FullImage
        style={style.Image_Box}
        source={require('../../assets/images/logo.png')}
      />
      <ScrollView
        style={GlobalStyle.Padding}
        showsVerticalScrollIndicator={false}>
        <View style={GlobalStyle.height} />
        {LoginInput.map(({name, p, icon, def}) => {
          const isPassword = name === 'password';
          const isError = errors[isPassword ? 'password' : 'email'];
          const rules = isPassword
            ? {
                minLength,
                maxLength,
                required: required('Password'),
              }
            : {
                pattern: emailPattern,
                required: required('Email'),
              };
          return (
            <MainInput
              isIcon
              icon={icon}
              name={name}
              rules={rules}
              placeholder={p}
              control={control}
              isError={!!isError}
              password={isPassword}
              defaultValue={`${def}`}
              message={isError?.message}
              keyboardType={isPassword ? 'default' : 'email-address'}
            />
          );
        })}
        <Validation
          isError={err.visible}
          message="Email or password is invalid"
        />
        <TouchableOpacity>
          <Sub style={style.forget} text="Forget Password?" />
        </TouchableOpacity>
        <Button
          title="Submit"
          onPress={handleSubmit(onSubmit)}
          loader
          marginTop={20}
        />
        <View style={GlobalStyle.height} />
        <Button
          white
          title="Create a new account"
          onPress={() => navigate('register')}
        />
      </ScrollView>
      <Error visible={err.visible} message={err.msg} />
    </Body>
  );
};

export default Login;
