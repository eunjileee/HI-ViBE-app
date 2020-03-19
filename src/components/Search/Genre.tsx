import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';

interface Genre {
  id: number;
  name: string;
}

interface Data {
  genre: Genre[];
}

class Genre extends React.Component<Data> {
  state: Data = {
    genre: [],
  };

  componentDidMount() {
    this.getGenre();
  }

  getGenre = () => {
    var url = 'http://c614c658.ngrok.io/music/genre';
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          genre: res.genre_list,
        });
      });
  };

  render() {
    const { genre } = this.state;
    return (
      <Container>
        <GenreBar>
          <GenreTitle>장르</GenreTitle>
        </GenreBar>
        <ScrollView>
          <BlockContainer>
            {genre.map(el => {
              if (el.id < 15) {
                return (
                  <Block key={el.id}>
                    <Name>{el.name}</Name>
                  </Block>
                );
              }
            })}
          </BlockContainer>
        </ScrollView>
      </Container>
    );
  }
}

export default Genre;

// fixed
const Container = styled.View`
  background-color: black;
  margin-bottom: 150px;
`;

const GenreBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 23px 15px 0;
`;

const GenreTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

// Contents
const BlockContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Block = styled.View`
  width: 175px;
  height: 65px;
  justify-content: center;
  align-items: center;
  border-radius: 3;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #181818;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: white;
`;
