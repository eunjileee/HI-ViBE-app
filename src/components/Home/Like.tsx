import React /*, { useEffect, useState }*/ from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import { like } from '../../../config';

interface slide {
  album_id: string;
  album_image: string;
  album_name: string;
  album_artist_name: string;
}

interface data {
  data: slide[];
}

export default class Like extends React.Component<data> {
  state: data = {
    data: [],
  };

  componentDidMount() {
    this.getLikeList();
  }

  getLikeList = () => {
    fetch(like)
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
        <LikeBar>
          <LikeTitle>좋아할 것 같아서</LikeTitle>
          <More>더보기</More>
        </LikeBar>
        <SafeAreaView>
          <FlatList
            data={data}
            horizontal
            renderItem={({ item }) => (
              <ItemContainer>
                <AlbumImage source={{ uri: `${item.album_image}` }} />
                <Title>{item.album_name}</Title>
                <SubTitle>{item.album_artist_name}</SubTitle>
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

const LikeBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 23px 15px 0;
`;

const LikeTitle = styled.Text`
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
