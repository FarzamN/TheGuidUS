import {View, TextInput, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {style} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {colors} from '../../util/colors';
import {SearchBarType} from '../../util/type';
import {GlobalStyle, Row} from '../../util/GlobalStyle';

const SearchBar: FC<SearchBarType> = props => {
  const {onChange, value, onClose} = props;

  return (
    <View style={[style.SearchContainer, GlobalStyle.Space_Between]}>
      <Row>
        <Icon
          type={IconType.Ionicons}
          name="search"
          size={20}
          color={colors.white}
        />
        <TextInput
          autoFocus
          value={value}
          placeholder="Search"
          onChangeText={onChange}
          cursorColor={colors.lightBlue}
          selectionColor={colors.lightBlue}
          style={style.SearchInput}
          placeholderTextColor={colors.Grey}
        />
      </Row>
      <TouchableOpacity onPress={onClose}>
        <Icon
          size={20}
          color={colors.white}
          name="close-circle"
          type={IconType.Ionicons}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
