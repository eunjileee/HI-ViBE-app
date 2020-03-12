import React /*, { useEffect, useState }*/ from 'react';
import { View, Text, Image, FlatList, SafeAreaView } from 'react-native';
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
      'https://music-phinf.pstatic.net/20190820_226/15662676982603EMqd_GIF/rising_PSD_190819_1.gif?type=f360',
    title: '지붕뚫고 급상승',
    subTitle: '실시간으로 차트 점령중! 인기 급상승 중인 곡들을 만나보세요.',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://music-phinf.pstatic.net/20191121_189/1574328239813ldKsO_PNG/VIBE_%B0%F8%C5%EB_FridayDisco.png?type=f360',
    title: 'FRIDAY DISCO',
    subTitle:
      '지루할 틈 없이 리듬을 타게 되는 디스코, 펑키 음악과 함께 신나는 주말을 맞이하세요.',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://music-phinf.pstatic.net/20200313_24/1584069579253OPPk7_JPEG/deep.jpg?type=f360',
    title: '미스터트롯 모음집',
    subTitle:
      '드디어 결승전! "미스터트롯" 진은 누가 될 것인가?! 경연자들의 노래를 들으며 진, 선, 미를 예측해보세요!',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://music-phinf.pstatic.net/20200130_273/1580366654742odlN9_JPEG/200116_Friday.jpg?type=f360',
    title: 'FRIDAY FUN',
    subTitle: '메가 히트곡과 힙합 장인들의 샘플링 곡을 함께 듣는 재미!',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://music-phinf.pstatic.net/20191128_97/1574910019420oD3AF_PNG/VIBE_%B0%F8%C5%EB_Sugarhoney.png?type=f360',
    title: 'Sugar & Honey',
    subTitle:
      '꿀 떨어지는 보컬과 함께하는 꿈만 같은 하루. 위기를 분위기로 바꿔줄 진득한 노래와 함께하는 달달한 시간.',
  },
];

const Item = ({ img, title, subTitle }) => {
  return (
    <ItemBackground>
      <AlbumImage source={{ uri: `${img}` }} />
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </ItemBackground>
  );
};

const Listen = () => {
  return (
    <ListenContainer>
      <ListeneBar>
        <LikeTitle>들려주고 싶어서</LikeTitle>
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

export default Listen;

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
`;

const Title = styled.Text`
  flex-wrap: wrap;
  margin-top: 10;
  font-size: 15;
  color: white;
`;

const SubTitle = styled.Text`
  margin-top: 5;
  margin-bottom: 40;
  font-size: 14;
  color: gray;
`;
