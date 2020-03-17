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
      'https://music-phinf.pstatic.net/20200316_69/1584352929448wNkTs_PNG/cover_img_%BF%E4%C1%F2%C0%CC%B0%EE_0316_2.png?type=f360',
    title: '요즘이곡',
    subTitle: '흥행 예감 신곡들! 핫하고 트렌디한 곡들을 놓치지 마세요.',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://music-phinf.pstatic.net/20200218_159/1581991533527Fs4zj_PNG/bb11aws_05%C7%C3%B7%B9%C0%CC%B8%AE%BD%BA%C6%AE%C4%BF%B9%F6.png?type=f360',
    title: '오후의 노동요',
    subTitle:
      '빠른 비트와 중독성 넘치는 후크! 내 안의 모든 집중력을 끌여올려줄 노동요 도착',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://music-phinf.pstatic.net/20191121_58/1574322543698KbnOz_PNG/VIBE_WORKSTUDY_Lo-fi.png?type=f360',
    title: 'Work/Study Lo-fi',
    subTitle:
      '도서관에서, 사무실에서. 집중력이 필요한 시간에 듣기 좋은 차분한 멜로디와 간질간질한 질감의 로파이 비트.',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://music-phinf.pstatic.net/20191128_300/1574910132937ryf6H_PNG/VIBE_%B0%F8%C5%EB_MONDAYMONSTER.png?type=f360',
    title: 'MONDAY MONSTER',
    subTitle:
      '월요병 무찌르는 신나는 팝, 일렉트로닉 음악. 결쾌한 사운드와 함께하는 한 주의 시작!',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img:
      'https://music-phinf.pstatic.net/20191121_137/1574322591385jGeDN_PNG/VIBE_%B0%F8%C5%EB_SELECTSHOP.png?type=f360',
    title: '편집숍에서',
    subTitle:
      '집콕 중인 집순이 집돌이를 위해 준비했어요! 힙한 편집숍을 통째로 옮겨놓은 듯한 신선하고 감각적인 사운드.',
  },
];

const Item = ({ img, title, subTitle }) => {
  return (
    <ItemContainer>
      <AlbumImage source={{ uri: `${img}` }} />
      <TextContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TextContainer>
    </ItemContainer>
  );
};

const Listen = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Listen;

// fixed
const Container = styled.View`
  flex: 1;
`;

const ListeneBar = styled.View`
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
  width: 360px;
  height: 360px;
`;

const TextContainer = styled.View`
  width: 350px;
`;

const Title = styled.Text`
  margin-top: 15px;
  font-size: 18px;
  color: white;
`;

const SubTitle = styled.Text`
  margin: 5px 0 50px;
  font-size: 16px;
  color: gray;
`;
