import React /*, { useEffect, useState }*/ from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

interface slide {
  label: string;
  img: string;
  title: string;
  subTitle: string;
}

interface Idata {
  data: slide[];
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://musicmeta-phinf.pstatic.net/album/004/484/4484620.jpg?type=r360Fll&v=20200313191006',
    title: '이태원 클라쓰 OST',
    subTitle: 'V',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://musicmeta-phinf.pstatic.net/album/004/483/4483907.jpg?type=r360Fll&v=20200312175910',
    title: '문득',
    subTitle: '노을',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://musicmeta-phinf.pstatic.net/album/004/478/4478430.jpg?type=r360Fll&v=20200316165045',
    title: 'DOPE!',
    subTitle: 'VIBE 트렌드',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://musicmeta-phinf.pstatic.net/album/004/481/4481553.jpg?type=r360Fll&v=20200311102009',
    title: '너를',
    subTitle: '이우',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://musicmeta-phinf.pstatic.net/album/004/476/4476213.jpg?type=r360Fll&v=20200306141203',
    title: 'LandScape',
    subTitle: 'nawhij',
  },
];

function Item({ img, title, subTitle }) {
  return (
    <ItemContainer>
      <AlbumImage source={{ uri: `${img}` }} />
      <TextContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TextContainer>
    </ItemContainer>
  );
}

const Album = () => {
  return (
    <Container>
      <AlbumBar>
        <AlbumTitle>좋아할 최신 앨범</AlbumTitle>
        <More>더보기</More>
      </AlbumBar>
      <SafeAreaView>
        <FlatList
          data={DATA}
          horizontal
          renderItem={({ item }) => (
            <Item img={item.img} title={item.title} subTitle={item.subTitle} />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </Container>
  );
};

export default Album;

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
