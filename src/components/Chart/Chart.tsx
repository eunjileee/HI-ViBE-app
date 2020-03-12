import * as React from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

interface chart {
  title: string;
  charDate: string;
  imageUrl: string;
  trackTitle: string;
  artistName: string;
}

interface data {
  data: chart[];
}

const Chart = props => {
  return (
    <Charts>
      <Img source={{ uri: `${props.img}` }} />
      <View>
        <Num>1</Num>
        <Text>⌃</Text>
      </View>
      <Contents>
        <TrackTitle>{props.trackTitle}</TrackTitle>
        <Artist>{props.artistName}</Artist>
      </Contents>
    </Charts>
  );
};

export default Chart;

const Charts = styled.View`
  flex-direction: row;
`;

const Img = styled.Image`
  width: 50;
  height: 50;
  margin-bottom: 10;
  margin-right: 20;
`;

const Num = styled.Text`
  font-size: 18;
  margin-right: 18;
  color: white;
`;

const Contents = styled.View`
  flex-direction: column;
  justify-content: flex-start;
`;

const TrackTitle = styled.Text`
  font-size: 18;
  color: white;
`;

const Artist = styled.Text`
  font-size: 16;
  color: gray;
`;
