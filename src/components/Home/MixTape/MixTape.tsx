import * as React from 'react';
import { View, Text, Image } from 'react-native';

const MixTape = () => {
  return (
    <View>
      <Text>오늘부터 믹스테잎</Text>
      <Image
        source={{ uri: 'https://vibe.naver.com//img/bn_campaign.7c901a82.png' }}
      />
    </View>
  );
};

export default MixTape;
