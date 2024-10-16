import {Text} from 'react-native';
import React, {FC} from 'react';
import {style} from './style';
import {ValidationType} from '../../util/type';

const Validation: FC<ValidationType> = props => {
  const {isError, message, center} = props;
  const textAlign = center ? 'center' : 'left';
  return (
    <>
      {isError && (
        <Text style={[style.helperText, {textAlign}]}>{message}</Text>
      )}
    </>
  );
};

export default Validation;
