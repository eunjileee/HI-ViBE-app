import * as React from 'react';
import { Text, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

const SearchTitle = () => {
  return (
    <View>
      <Title>검색</Title>
    </View>
  );
};

export default SearchTitle;

const Title = styled.Text`
  font-size: 20px;
  color: white;
`;
