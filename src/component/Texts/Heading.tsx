import {Text} from 'react-native';
import React, {FC} from 'react';
import {HeadingType} from '../../util/type';
import styles from './style';

const Heading: FC<HeadingType> = props => {
  const {text, style, center, marginTop} = props;

  return (
    <Text
      style={[
        styles.Heading,
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

export default Heading;
