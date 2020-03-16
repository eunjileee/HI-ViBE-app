import * as React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Genre from '../components/Search/Genre';
import Search from '../components/Search/Search';
import SearchTitle from '../components/Search/SearchTitle';

const SearchScreen = () => {
  return (
    <ScrollView>
      <Container>
        <SearchTitle />
        <Search />
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
  padding-left: 3%;
  background-color: black;
`;
