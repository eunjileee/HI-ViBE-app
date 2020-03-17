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
    title: '편견을 깨는 힙합 아이돌',
    subTitle: 'VIBE 국내 힙합',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://music-phinf.pstatic.net/20200309_199/15837468926596rlwH_PNG/cover_img_%BF%E4%C1%F2%C0%CC%B0%EE_0309.png?type=f360',
    title: '알앤비 X 힙합',
    subTitle: 'VIBE 국내 알앤비/소울',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://music-phinf.pstatic.net/20200306_244/1583461472494b3BGb_JPEG/vibe_0306_Swings_cover.jpg?type=f360',
    title: 'DOPE!',
    subTitle: 'VIBE 트렌드',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://music-phinf.pstatic.net/20191108_72/1573206817385S2rDF_PNG/%C0%CC%B3%EB%B7%A1%B9%B9%C1%F6.png?type=f360',
    title: '이 노래 뭐지?',
    subTitle: 'VIBE',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://music-phinf.pstatic.net/20191125_275/1574651656850FP2WR_PNG/VIBE_VibeAndChill.png?type=f360',
    title: 'VIBE AND CHILL',
    subTitle: 'VIBE',
  },
];

function Item({ img, title, subTitle }) {
  return (
    <ItemBackground>
      <AlbumImage source={{ uri: `${img}` }} />
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </ItemBackground>
  );
}

const Like = () => {
  return (
    <LikeContainer>
      <LikeBar>
        <LikeTitle>좋아할 것 같아서</LikeTitle>
        <More>더보기</More>
      </LikeBar>
      <SlideContainer>
        <SafeAreaView>
          <FlatList
            data={DATA}
            horizontal
            renderItem={({ item }) => (
              <Item
                img={item.img}
                title={item.title}
                subTitle={item.subTitle}
              />
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </SlideContainer>
    </LikeContainer>
  );
};

export default Like;

const LikeContainer = styled.View`
  flex: 1;
`;

const LikeBar = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
  margin-bottom: 20px;
`;

const LikeTitle = styled.Text`
  font-size: 20px;
  color: white;
`;

const More = styled.Text`
  font-size: 14px;
  color: gray;
`;

const SlideContainer = styled.SafeAreaView`
  flex: 1;
`;

const ItemBackground = styled.View`
  margin-right: 10px;
`;

const AlbumImage = styled.Image`
  width: 160px;
  height: 160px;
`;

const Title = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  color: white;
`;

const SubTitle = styled.Text`
  margin-top: 5px;
  margin-bottom: 40px;
  font-size: 14px;
  color: gray;
`;
