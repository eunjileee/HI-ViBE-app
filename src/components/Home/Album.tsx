import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import { albumList } from '../../../config';

interface slide {
  album_id: number;
  album_image: string;
  album_name: string;
  album_artist_name: string;
}

interface data {
  data: slide[];
}

export default class Album extends React.Component<data> {
  state: data = {
    data: [],
  };

  componentDidMount = () => {
    this.getAlbumList();
  };

  getAlbumList = () => {
    fetch(albumList)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.latest_album_list,
        });
      });
  };

  render() {
    const { data } = this.state;
    return (
      <Container>
        <AlbumBar>
          <AlbumTitle>좋아할 최신 앨범</AlbumTitle>
          <More>더보기</More>
        </AlbumBar>
        <SafeAreaView>
          <FlatList
            data={data}
            horizontal
            renderItem={({ item }) => (
              <ItemContainer>
                <AlbumImage source={{ uri: `${item.album_image}` }} />
                <TextContainer>
                  <Title numberOfLines={1}>{item.album_name}</Title>
                  <SubTitle>{item.album_artist_name}</SubTitle>
                </TextContainer>
              </ItemContainer>
            )}
            keyExtractor={item => item.album_id}
          />
        </SafeAreaView>
      </Container>
    );
  }
}

// fixed
const Container = styled.View`
  flex: 1;
`;

const AlbumBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 23px 15px 0;
`;

const AlbumTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

const More = styled.Text`
  font-size: 15px;
  color: #616161;
`;

// Contents
const ItemContainer = styled.View`
  flex: 1;
  margin-right: 10px;
`;

const AlbumImage = styled.Image`
  width: 175px;
  height: 175px;
`;

const TextContainer = styled.View`
  width: 160px;
`;

const Title = styled.Text`
  margin-top: 15px;
  font-size: 18px;
  color: white;
`;

const SubTitle = styled.Text`
  margin-top: 5px;
  margin-bottom: 50px;
  font-size: 16px;
  color: gray;
`;
