import * as React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Genre from '../components/Search/Genre';
import News from '../components/Search/News';
import Search from '../components/Search/Search';

const SearchScreen = () => {
  return (
    <ScrollView>
      <Container>
        <TitleBar>
          <Title>검색</Title>
        </TitleBar>
        <Search />
        <News />
        <Genre />
      </Container>
    </ScrollView>
  );
};

export default SearchScreen;

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 7%;
  padding-top: 52px;
  background-color: black;
`;

const TitleBar = styled.View`
  margin-bottom: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 30;
  font-weight: bold;
  color: white;
`;
