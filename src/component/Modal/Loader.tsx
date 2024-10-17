import React, {FC} from 'react';
import style from './style';
import Modal from 'react-native-modal';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {loaderType} from '../../util/type';

const Loader: FC<loaderType> = props => {
  const {visible} = props;
  return (
    <Modal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      isVisible={visible}
      style={[style.MainModal, style.Modal_Container]}>
      <View
        style={[
          style.ModalContainer,
          {backgroundColor: '#FCFCFC', borderWidth: 0.8},
        ]}>
        <LottieView
          autoPlay
          style={style.LottieView}
          source={require('../../assets/lottie/loader.json')}
        />
        <Text style={style.ModalText}>Please Wait...</Text>
      </View>
    </Modal>
  );
};

export default Loader;
