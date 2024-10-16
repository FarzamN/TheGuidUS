import React from 'react';
import {style} from './style';
import {View} from 'react-native';
import {OverboardButton} from '../../util/Data';
import {InOverBoard} from '../../util/interface';
import {GlobalStyle} from '../../util/GlobalStyle';
import {Body, Button, FullImage} from '../../component';

const OverBoard = ({navigation}: InOverBoard) => {
  return (
    <Body between>
      <FullImage
        style={style.Image_Box}
        source={require('../../assets/images/logo.png')}
      />

      {/* <Heading center text="Chat for life" /> */}
      <View style={style.Overboard_Box}>
        {OverboardButton.map(({path, reverse, title}) => (
          <Button
            title={title}
            white={reverse}
            key={title.toString()}
            onPress={() => navigation.navigate(path)}
          />
        ))}
        <View style={GlobalStyle.Vertical_Space} />
      </View>
    </Body>
  );
};

export default OverBoard;
