import styles from './styles';
import React, {FC} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {BodyProps} from '../../util/type';
import {GlobalStyle} from '../../util/GlobalStyle';
import {colors} from '../../util/colors';

const Body: FC<BodyProps> = props => {
  const {children, style, between} = props;
  return (
    <SafeAreaView
      style={[
        between ? styles.Center_Container : GlobalStyle.container,
        style,
      ]}>
      <StatusBar backgroundColor={colors.Sky} barStyle={'light-content'} />

      {children}
    </SafeAreaView>
  );
};

export default Body;
