import React, {FC} from 'react';
import {Text} from 'react-native';
import styles from './style';
import {HeadingType} from '../../util/type';

const Sub: FC<HeadingType> = props => {
  const {text, style, center, marginTop} = props;
  return (
    <Text
      style={[
        styles.Sub,
        {
          marginTop: marginTop,
          textAlign: center ? 'center' : 'left',
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export default Sub;
