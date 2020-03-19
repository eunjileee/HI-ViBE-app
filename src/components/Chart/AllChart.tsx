import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Chart from './Chart';
import MV from './MV';

const AllChart = props => {
  return (
    <>
      <TitleBar>
        <SubTitle>
          <Name>{props.title}</Name>
          <Date>{props.chartDate}</Date>
        </SubTitle>
        <More>더보기</More>
      </TitleBar>
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

// Title
const TitleBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 23px 15px 0;
`;

const SubTitle = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

const Name = styled.Text`
  margin-bottom: 7px;
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

const Date = styled.Text`
  font-size: 15px;
  color: gray;
`;

const More = styled.Text`
  font-size: 15px;
  color: #616161;
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
