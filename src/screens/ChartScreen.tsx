import * as React from 'react';
import { FlatList, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { domesticAlbumList, foreignAlbumList, video } from '../../config';
import { chart } from '../../data/chart';
import LatestList from '../components/Chart/ LatestList';
import ChartList from '../components/Chart/ChartList';
import MVList from '../components/Chart/MVList';

interface chart {
  album_id: number;
  album_name: string;
  album_image: string;
  album_artist_name: string;
}

interface video {
  video_id: number;
  video_name: string;
  video_image: string;
  video_artist: string;
}

interface data {
  domesticAlbumList: chart[];
  foreignAlbumList: chart[];
  video: video[];
}

export default class ChartScreen extends React.Component<object, data> {
  state: data = {
    domesticAlbumList: [],
    foreignAlbumList: [],
    video: [],
  };

  componentDidMount() {
    this.getChartList();
  }

  getChartList() {
    // 국내 급상승
    fetch(domesticAlbumList)
      .then(res => res.json())
      .then(res => {
        this.setState({
          domesticAlbumList: res.domestic_like_album_list,
        });
      });
    // 해외 급상승
    fetch(foreignAlbumList)
      .then(res => res.json())
      .then(res => {
        this.setState({
          foreignAlbumList: res.foreign_like_album_list,
        });
      });
    //뮤직비디오
    fetch(video)
      .then(res => res.json())
      .then(res => {
        this.setState({
          video: res.video_list,
        });
      });
  }

  render() {
    const { domesticAlbumList, foreignAlbumList, video } = this.state;
    return (
      <ScrollView>
        <Container>
          <TitleBar>
            <Title>차트</Title>
          </TitleBar>

          {/* 국내 급상승 🔥 */}
          <ChartContainer>
            <ChartBar>
              <ChartTitle>
                <Name>국내 급상승 🔥</Name>
                <Date>오후 2시 업데이트</Date>
              </ChartTitle>
              <More>더보기</More>
            </ChartBar>
            <ScrollView horizontal>
              <ListContainer>
                <FlatList
                  data={domesticAlbumList}
                  renderItem={({ item }) => (
                    <ChartList
                      name={item.album_name}
                      image={item.album_image}
                      artist={item.album_artist_name}
                    />
                  )}
                  keyExtractor={item => item.album_id}
                />
              </ListContainer>
            </ScrollView>
          </ChartContainer>

          {/* 해외 급상승 🔥 */}
          <ChartContainer>
            <ChartBar>
              <ChartTitle>
                <Name>해외 급상승 🔥</Name>
                <Date>오전 1시 업데이트</Date>
              </ChartTitle>
              <More>더보기</More>
            </ChartBar>
            <ScrollView horizontal>
              <ListContainer>
                <FlatList
                  data={foreignAlbumList}
                  renderItem={({ item }) => (
                    <ChartList
                      name={item.album_name}
                      image={item.album_image}
                      artist={item.album_artist_name}
                    />
                  )}
                  keyExtractor={item => item.album_id}
                />
              </ListContainer>
            </ScrollView>
          </ChartContainer>

          {/* 뮤직비디오 Top 50 */}
          <ChartContainer>
            <ChartBar>
              <ChartTitle>
                <Name>뮤직비디오 Top 50</Name>
                <Date>13시간 전 업데이트</Date>
              </ChartTitle>
              <More>더보기</More>
            </ChartBar>
            <FlatList
              data={video}
              horizontal
              renderItem={({ item }) => (
                <MVList
                  name={item.video_name}
                  image={item.video_image}
                  artist={item.video_artist}
                />
              )}
              keyExtractor={item => item.video_id}
            />
          </ChartContainer>

          {/*  뮤지션리그 Top 100 */}
          <ChartContainer>
            <ChartBar>
              <ChartTitle>
                <Name>뮤지션리그 Top 100</Name>
                <Date>2시간 전 업데이트</Date>
              </ChartTitle>
              <More>더보기</More>
            </ChartBar>
            <ScrollView horizontal>
              <ListContainer>
                <FlatList
                  data={foreignAlbumList}
                  renderItem={({ item }) => (
                    <ChartList
                      name={item.album_name}
                      image={item.album_image}
                      artist={item.album_artist_name}
                    />
                  )}
                  keyExtractor={item => item.album_id}
                />
              </ListContainer>
            </ScrollView>
          </ChartContainer>

          {/*  8년전 오늘, 국내 Top 100 */}
          <ChartContainer>
            <ChartBar>
              <ChartTitle>
                <Name>8년전 오늘, 국내 Top 100</Name>
              </ChartTitle>
              <More>더보기</More>
            </ChartBar>
            <ScrollView horizontal>
              <ListContainer>
                <FlatList
                  data={foreignAlbumList}
                  renderItem={({ item }) => (
                    <ChartList
                      name={item.album_name}
                      image={item.album_image}
                      artist={item.album_artist_name}
                    />
                  )}
                  keyExtractor={item => item.album_id}
                />
              </ListContainer>
            </ScrollView>
          </ChartContainer>

          {/*  최신 앨범 */}
          <ChartContainer>
            <ChartBar>
              <ChartTitle>
                <Name>최신 앨범</Name>
              </ChartTitle>
              <More>더보기</More>
            </ChartBar>
            <FlatList
              data={foreignAlbumList}
              horizontal
              renderItem={({ item }) => (
                <LatestList
                  name={item.album_name}
                  image={item.album_image}
                  artist={item.album_artist_name}
                />
              )}
              keyExtractor={item => item.album_id}
            />
          </ChartContainer>
        </Container>
      </ScrollView>
    );
  }
}

// fixed
const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 7%;
  padding-top: 10%;
  background-color: black;
`;

const TitleBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 23px 30px 0;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

// Chart Title
const ChartBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 23px 15px 0;
`;

const ChartTitle = styled.View`
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

const Name = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

const Date = styled.Text`
  margin-top: 3px;
  font-size: 15px;
  color: #616161;
`;

const More = styled.Text`
  font-size: 15px;
  color: #616161;
`;

// Chart list
const ChartContainer = styled.View`
  flex: 1;
  margin-bottom: 40px;
`;

const ListContainer = styled.View`
  height: 320px;
  flex-direction: column;
  flex-wrap: wrap;
`;
