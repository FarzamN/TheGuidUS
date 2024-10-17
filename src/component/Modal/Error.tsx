import React, {FC} from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import style from './style';
import {loaderType} from '../../util/type';

const Error: FC<loaderType> = props => {
  const {message, visible} = props;
  return (
    <Modal
      isVisible={visible}
      animationIn={'flash'}
      animationOut={'fadeOut'}
      style={[style.MainModal, style.Modal_Container]}>
      <View style={style.ModalContainer}>
        <LottieView
          autoPlay
          loop={false}
          style={style.LottieView}
          source={require('../../assets/lottie/error.json')}
        />
        <Text style={[style.ModalText, {color: 'red'}]}>{message}</Text>
      </View>
    </Modal>
  );
};
export default Error;
