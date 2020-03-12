import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
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
          <View>
            <ChartTitle>차트</ChartTitle>
          </View>
          <ChartData>
            {data.map(el => {
              return (
                <AllChart
                  title={el.title}
                  chartDate={el.chart_data}
                  items={el.items}
                />
              );
            })}
          </ChartData>
        </Container>
      </ScrollView>
    );
  }
}

const Container = styled.View`
  flex: 1;
  padding-left: 20;
  padding-right: 20;
  background-color: black;
`;

const ChartTitle = styled.Text`
  margin-top: 75;
  font-size: 30;
  font-weight: bold;
  color: white;
`;

const ChartData = styled.View`
  margin-top: 7%;
`;
