import {View, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {style} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {GlobalStyle} from '../../util/GlobalStyle';
import {ImageType} from '../../util/type';
import {colors} from '../../util/colors';

const SelectImage: FC<ImageType> = props => {
  const {onPress, source} = props;
  return (
    <View style={style.ImageContainer}>
      <Image
        resizeMode="contain"
        style={[GlobalStyle.full, {borderRadius: 100}]}
        source={source}
      />
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={style.IconBox}>
        <Icon
          size={16}
          name="camera"
          type={IconType.Entypo}
          color={colors.lightBlue}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SelectImage;
