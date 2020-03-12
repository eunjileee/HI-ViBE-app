import * as React from 'react';
import { View, Text, Image } from 'react-native';

const LikeSlide = props => {
  return (
    <View>
      <Image source={props.img} />
      <Text>{props.title}</Text>
      <Text>{props.subTitle}</Text>
    </View>
  );
};
export default LikeSlide;
