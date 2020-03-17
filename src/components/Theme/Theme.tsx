import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import theme from '../../../data/theme.js';

interface theme {
  description: string;
  id: number;
  img: string;
}

interface data {
  data: theme[];
}

export default class Theme extends Component<object, data> {
  state = {
    data: theme.station_list,
  };

  render() {
    const { data } = this.state;

    return (
      <View>
        <View>
          <Title>DJ</Title>
        </View>
        <View>
          <Station>느낌별 스테이션</Station>
          <StationContainer>
            {data.map(el => {
              return <Img key={el.id} source={{ uri: `${el.img}` }} />;
            })}
          </StationContainer>
        </View>
      </View>
    );
  }
}

const Title = styled.Text`
  color: white;
`;

const Img = styled.Image`
  width: 50;
  height: 50;
`;

const Station = styled.Text`
  color: white;
`;

const StationContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
