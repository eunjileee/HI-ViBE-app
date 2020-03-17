import * as React from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { chart } from '../../data/chart';
import AllChart from '../components/Chart/AllChart';

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

export default class ChartScreen extends React.Component<object, data> {
  state = {
    data: chart.data,
  };

  // componentDidMount = () => {
  //   fetch('https://apis.naver.com/vibeWeb/musicapiweb/vibe/v2/chart/home')
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log('firstly: ', res.data);
  //       this.setState(
  //         {
  //           data: res.data,
  //         },
  //         () => {
  //           console.log('secondly: ', this.state.data);
  //         }
  //       );
  //     });
  // };

  render() {
    const { data } = this.state;

    return (
      <ScrollView>
        <Container>
          <Title>차트</Title>
          <View>
            {data.map(el => {
              return (
                <AllChart
                  title={el.title}
                  chartDate={el.chart_date}
                  items={el.items}
                />
              );
            })}
          </View>
        </Container>
      </ScrollView>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 7%;
  padding-top: 10%;
  background-color: black;
`;

const Title = styled.Text`
  padding-right: 3%;
  margin-bottom: 7%;
  font-size: 30;
  font-weight: bold;
  color: white;
`;
