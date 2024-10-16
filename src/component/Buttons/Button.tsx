import React, {FC} from 'react';
import {Text, ActivityIndicator, View} from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {CustomButtonProps} from '../../util/type';
import {width} from '../../util/constants';
import {colors} from '../../util/colors';
import {GlobalStyle} from '../../util/GlobalStyle';
import styles from './style';

const Button: FC<CustomButtonProps> = props => {
  const {
    onPress,
    loader,
    style,
    disabled,
    title,
    marginTop,
    small,
    round,
    white,
    isMarginTop,
    textRestyle,
    Google,
  } = props;

  const back =
    white || Google ? colors.white : loader ? colors.grey : colors.DarkSky;

  return (
    <AwesomeButton
      height={48}
      raiseLevel={5}
      onPress={onPress}
      backgroundColor={back}
      backgroundDarker={back}
      disabled={disabled || loader}
      borderRadius={round ? 100 : 10}
      width={small ? width - 100 : width - 20}
      style={[
        styles.containerStyle,
        {marginTop: isMarginTop ? marginTop : 12},
        style,
      ]}>
      <View style={GlobalStyle.row}>
        {loader && (
          <ActivityIndicator
            size={20}
            color={colors.black}
            style={{marginRight: 10}}
          />
        )}
        {Google && (
          <Icon
            name="google"
            size={17}
            color={colors.black}
            type={IconType.AntDesign}
            style={{marginRight: 10}}
          />
        )}
        <Text style={[styles.title, textRestyle]}>
          {loader ? 'Loading...' : title}
        </Text>
      </View>
    </AwesomeButton>
  );
};

export default Button;
