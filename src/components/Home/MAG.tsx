import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import { mag } from '../../../config';

interface slide {
  thumbnail: string;
  badge: string;
  title: string;
  subTitle: string;
  magazine_id: number;
}

interface data {
  data: slide[];
}

export default class MAG extends React.Component<data> {
  state: data = {
    data: [],
  };

  componentDidMount() {
    this.getMagList();
  }

  getMagList = () => {
    fetch(mag)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.magazine_list,
        });
      });
  };

  render() {
    const { data } = this.state;
    return (
      <Container>
        <MAGBar>
          <MAGTitle>VIBE MAG</MAGTitle>
          <More>더보기</More>
        </MAGBar>
        <SafeAreaView>
          <FlatList
            data={data}
            horizontal
            renderItem={({ item }) => (
              <ItemContainer>
                <AlbumImage source={{ uri: `${item.thumbnail}` }} />
                <TextContainer>
                  <Tag resizeMode="contain" source={{ uri: `${item.badge}` }} />
                  <SubTitle>{item.title}</SubTitle>
                </TextContainer>
              </ItemContainer>
            )}
            keyExtractor={item => item.magazine_id}
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

const MAGBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 23px 15px 0;
`;

const MAGTitle = styled.Text`
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
  position: relative;
  width: 360px;
  height: 360px;
  margin-bottom: 50px;
`;

const TextContainer = styled.View`
  position: absolute;
  top: 245px;
  left: 20px;
`;

const Tag = styled.Image`
  width: 77px;
  height: 28px;
  margin-bottom: 10px;
`;

const SubTitle = styled.Text`
  font-size: 25;
  font-weight: bold;
  color: white;
`;
