import * as React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const ChartList = props => {
  return (
    <Charts>
      <Img source={{ uri: `${props.image}` }} />
      <View>
        <Num>1</Num>
        <Text>⌃</Text>
      </View>
      <Contents>
        <TrackTitle>{props.name}</TrackTitle>
        <Artist>{props.artist}</Artist>
      </Contents>
    </Charts>
  );
};

export default ChartList;

// fixed
const Charts = styled.View`
  flex-direction: row;
  margin-right: 150px;
`;

const Img = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  margin-right: 20px;
`;

const Num = styled.Text`
  font-size: 18;
  margin-right: 18px;
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
  margin-top: 5px;
  font-size: 16;
  color: gray;
`;
