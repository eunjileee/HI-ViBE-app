import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import { listen } from '../../../config';

interface slide {
  recommendation_id: number;
  main_image: string;
  title: string;
  subTitle: string;
}

interface data {
  data: slide[];
}

export default class Listen extends React.Component<data> {
  state: data = {
    data: [],
  };

  componentDidMount() {
    this.getRecommendationList();
  }

  getRecommendationList = () => {
    fetch(listen)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.recommendation_list,
        });
      });
  };

  render() {
    const { data } = this.state;
    return (
      <Container>
        <ListeneBar>
          <LikeTitle>들려주고 싶어서</LikeTitle>
          <More>더보기</More>
        </ListeneBar>
        <SafeAreaView>
          <FlatList
            data={data}
            horizontal
            renderItem={({ item }) => (
              <ItemContainer>
                <AlbumImage source={{ uri: `${item.main_image}` }} />
                <TextContainer>
                  <Title>{item.title}</Title>
                  <SubTitle>{item.subTitle}</SubTitle>
                </TextContainer>
              </ItemContainer>
            )}
            keyExtractor={item => item.recommendation_id}
          />
        </SafeAreaView>
      </Container>
    );
  }
}

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
