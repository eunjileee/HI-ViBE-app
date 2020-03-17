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
      'https://music-phinf.pstatic.net/20200122_232/1579693792325OPeyx_PNG/%C0%CC%B4%DE%C0%C7%B3%EB%B7%A1_%C1%A4%B9%E6%C7%FC.png?type=w720',
    title:
      'https://music-phinf.pstatic.net/20190527_64/1558943253671FKQca_PNG/icon_GENRE.png',
    subTitle: '호텔 캘리포니아 로비에서 \n듣는 재즈',
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
    <ItemBackground>
      <AlbumImage source={{ uri: `${img}` }} />
      <Title>
        <Tag source={{ uri: `${title}` }} />
        <SubTitle>{subTitle}</SubTitle>
      </Title>
    </ItemBackground>
  );
};

const MAG = () => {
  return (
    <ListenContainer>
      <ListeneBar>
        <LikeTitle>VIBE MAG</LikeTitle>
        <More>더보기</More>
      </ListeneBar>
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
    </ListenContainer>
  );
};

export default MAG;

const ListenContainer = styled.View`
  flex: 1;
  margin-top: 20;
`;

const ListeneBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 15;
  margin-bottom: 20;
`;

const LikeTitle = styled.Text`
  font-size: 20;
  color: white;
`;

const More = styled.Text`
  font-size: 14;
  color: gray;
`;

const ItemBackground = styled.View`
  flex: 1;
  margin-right: 10;
`;

const AlbumImage = styled.Image`
  width: 330;
  height: 330;
  position: relative;
  margin-bottom: 40;
`;

const Title = styled.View`
  position: absolute;
  top: 220;
  left: 20;
`;

const Tag = styled.Image`
  width: 77;
  height: 28;
  margin-bottom: 10;
`;

const SubTitle = styled.Text`
  font-size: 25;
  font-weight: bold;
  color: white;
`;
