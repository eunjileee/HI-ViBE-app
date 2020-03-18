import * as React from 'react';
import styled from 'styled-components/native';

const MVList = props => {
  return (
    <ItemContainer>
      <AlbumImage source={{ uri: `${props.image}` }} />
      <Title>{props.name}</Title>
      <SubTitle>{props.artist}</SubTitle>
    </ItemContainer>
  );
};

export default MVList;

const ItemContainer = styled.View`
  height: 280px;
  margin-right: 10px;
`;

const AlbumImage = styled.Image`
  width: 175px;
  height: 175px;
`;

const Title = styled.Text`
  margin: 15px 0 5px 0;
  font-size: 18px;
  color: white;
`;

const SubTitle = styled.Text`
  font-size: 16px;
  color: gray;
`;
