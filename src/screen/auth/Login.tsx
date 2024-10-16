import React, {useState} from 'react';
import {style} from './style';
import {SubmitHandler, useForm} from 'react-hook-form';
import {ILogin, ILoginInput} from '../../util/interface';
import {GlobalStyle} from '../../util/GlobalStyle';
import {Body, Button, FullImage, MainInput, Validation} from '../../component';
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
  const offset = useSharedValue(0);
  const dispatch: AppDispatch = useDispatch();

  const [load, setLoad] = useState<boolean>(false);
  const [error, setError] = useState<{visible: boolean; msg: string}>({
    visible: false,
    msg: '',
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  const OFFSET = 40;
  const TIME = 250;

  const shake = () => {
    offset.value = withSequence(
      withTiming(-OFFSET, {duration: TIME / 2}),
      withRepeat(withTiming(OFFSET, {duration: TIME}), 3, true),
      withTiming(0, {duration: TIME / 2}),
    );
  };

  const onSubmit: SubmitHandler<ILoginInput> = async inputs => {
    setError({visible: false, msg: ''});
    // dispatch(loginApi(inputs, setLoad, setError, shake));
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
                required: required('Email'),
                pattern: emailPattern,
              };
          return (
            <Animated.View key={name} style={[animatedStyle]}>
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
            </Animated.View>
          );
        })}
        <Validation
          isError={error.visible}
          message="Email or password is invalid"
        />
        <TouchableOpacity>
          {/* <Text style={style.forget}>Forget password</Text> */}
        </TouchableOpacity>
        <Button
          title="Submit"
          onPress={handleSubmit(onSubmit)}
          style={{marginTop: 20}}
        />
        <View style={GlobalStyle.height} />
        <Button
          title="Create a new account"
          onPress={() => navigate('register')}
        />
      </ScrollView>
      {/* <Loader visible={load} /> */}
      {/* <Error visible={error} message={msg} /> */}
    </Body>
  );
};

export default Login;
