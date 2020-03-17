import React /*, { useEffect, useState }*/ from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import { slide } from '../../../data/slide';
// import LikeSlide from './LikeSlide';

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
      'https://music-phinf.pstatic.net/20200316_152/1584345235224ChSmG_JPEG/0_%B4%EB%C7%A5_%C0%CC%B9%CC%C1%F6.jpg?type=w720',
    title:
      'https://music-phinf.pstatic.net/20190527_64/1558943253671FKQca_PNG/icon_GENRE.png',
    subTitle: '역대 007 시리즈 \n주제가들',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://music-phinf.pstatic.net/20200310_193/1583820269848WJ9DF_PNG/200309_Artist_type_%C0%D3%BF%B5%BF%F5.png?type=w720',
    title:
      'https://music-phinf.pstatic.net/20190702_287/1562066500033t4gp0_PNG/icon_pick.png',
    subTitle: '이주의 디깅 #49 \n임영웅',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://music-phinf.pstatic.net/20200306_219/1583477038314WAAkR_JPEG/0_%B4%EB%C7%A5%C0%CC%B9%CC%C1%F6.jpg?type=w720',
    title:
      'https://music-phinf.pstatic.net/20190527_64/1558943253671FKQca_PNG/icon_GENRE.png',
    subTitle: '한대음 다시 보기 \n무관의 제왕',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://music-phinf.pstatic.net/20200306_245/1583497401033SMHB3_JPEG/%B8%DE%C0%CE.jpg?type=w840',
    title:
      'https://music-phinf.pstatic.net/20191127_46/1574842826929bou6V_PNG/icon_special.png',
    subTitle: '달과 나비와 \nVIINI의 세계',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://music-phinf.pstatic.net/20200305_82/15833925658320s9kz_JPEG/%C3%BB%C7%CF%B8%DE%C0%CE1.jpg?type=w720',
    title:
      'https://music-phinf.pstatic.net/20191127_46/1574842826929bou6V_PNG/icon_special.png',
    subTitle: '청하는\n지치지 않아.',
  },
];

const Item = ({ img, title, subTitle }) => {
  return (
    <ItemContainer>
      <AlbumImage source={{ uri: `${img}` }} />
      <TextContainer>
        <Tag resizeMode="contain" source={{ uri: `${title}` }} />
        <SubTitle>{subTitle}</SubTitle>
      </TextContainer>
    </ItemContainer>
  );
};

const MAG = () => {
  return (
    <Container>
      <MAGBar>
        <MAGTitle>VIBE MAG</MAGTitle>
        <More>더보기</More>
      </MAGBar>
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

export default MAG;

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
