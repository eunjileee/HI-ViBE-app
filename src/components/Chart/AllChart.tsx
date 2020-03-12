import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Chart from './Chart';
import MV from './MV';

const AllChart = props => {
  return (
    <>
      <Title>
        <SubTitle>
          <Name>{props.title}</Name>
          <Date>{props.chartDate}</Date>
        </SubTitle>
        <More>더보기</More>
      </Title>
      <ScrollView horizontal>
        <Container>
          {props.items.map(el => {
            return (
              <Chart
                img={el.image_url}
                trackTitle={el.album_title}
                artistName={el.artist_name}
              />
            );
          })}
        </Container>
        <MVContainer>
          {props.items.map(el => {
            return (
              <MV
                video={el.video_url}
                videoTitle={el.mv_title}
                artist={el.artist}
              />
            );
          })}
        </MVContainer>
      </ScrollView>
    </>
  );
};

export default AllChart;

const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const SubTitle = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Name = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: white;
`;

const Date = styled.Text`
  color: gray;
`;

const More = styled.Text`
  color: white;
`;

const Container = styled.View`
  height: 300;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 40;
`;

const MVContainer = styled.View`
  flex-direction: row;
  margin-bottom: 40;
`;
