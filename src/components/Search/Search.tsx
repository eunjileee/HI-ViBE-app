import * as React from 'react';
import { Text, Image, View, FlatList, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const DATA = [
  {
    id: '1',
    image:
      'https://music-phinf.pstatic.net/20200316_154/15843343361152y6qi_JPEG/2pm-%B4%BA%BD%BA%C5%AC%B8%AE%C7%CE.jpg?type=f310_182',
    title: '그룹 2PM이 베스트앨범으로 일본 주요 차트 정상을 석권했습니다.',
  },
  {
    id: '2',
    image:
      'https://music-phinf.pstatic.net/20200313_263/1584075337504GK5eL_JPEG/%B4%BA%BD%BA%C5%AC%B8%AE%C7%CE-%B9%E6%C5%BA%BC%D2%B3%E2%B4%DC.jpg?type=f310_182',
    title: '방탄소년단이 정규 4집으로 한국 가수 최다 판매 기록을 세웠습니다.',
  },
  {
    id: '3',
    image:
      'https://music-phinf.pstatic.net/20200313_230/1584075303869hYjy4_JPEG/%B4%BA%BD%BA%C5%AC%B8%AE%C7%CE-%BE%BE%BE%DF.jpg?type=f310_182',
    title: '씨야(SeeYa)가 데뷔 14주년을 맞아 감사의 인사를 전했습니다.',
  },
];

function News({ id, image, title }) {
  return (
    <NewsContainer>
      <Image source={{ uri: `${image}` }} />
      <NewsTitle>
        <Text>{title}</Text>
        <View>
          <Select>관련 뉴스 보기 ></Select>
          <Listen>음악듣기</Listen>
        </View>
      </NewsTitle>
    </NewsContainer>
  );
}

const Search = () => {
  return (
    <View>
      <SearchBar />
      <SafeAreaView>
        <FlatList
          data={DATA}
          horizontal
          renderItem={({ item }) => (
            <News title={item.title} image={item.image} id={item.id} />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

export default Search;

const SearchBar = styled.View`
  background-color: gray;
  width: 300px;
`;

const NewsContainer = styled.View`
  width: 300px;
  height: 150px;
`;

const NewsTitle = styled.View`
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

const Select = styled.Text`
  font-size: 16px;
  color: gray;
`;

const Listen = styled.Text`
  font-size: 16px;
  color: pink;
`;
