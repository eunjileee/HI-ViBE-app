import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, Image, View, FlatList, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

interface NewsContents {
  news_id: number;
  thumbnail: string;
  main_text: string;
  news_link: string;
}

interface Data {
  news: NewsContents[];
}

class News extends React.Component<Data> {
  state: Data = {
    news: [],
  };

  componentDidMount() {
    this.getNews();
  }

  getNews = () => {
    var url = 'http://c614c658.ngrok.io/music/news';
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          news: res.news_list,
        });
      });
  };

  render() {
    const { news } = this.state;
    return (
      <Container>
        <FlatList
          data={news}
          horizontal
          renderItem={({ item }) => (
            <NewsContainer>
              <Img source={{ uri: `${item.thumbnail}` }} />
              <NewsTitle>
                <NewsContents>{item.main_text}</NewsContents>
                <More>
                  <Link>
                    <Select>관련 뉴스 보기</Select>
                    <EvilIcons name="chevron-right" color="gray" size="25" />
                  </Link>
                  <Link>
                    <MaterialIcons
                      name="play-circle-outline"
                      color="#ff1150"
                      size="20"
                    />
                    <Listen> 음악듣기</Listen>
                  </Link>
                </More>
              </NewsTitle>
            </NewsContainer>
          )}
          keyExtractor={item => item.news_id}
        />
      </Container>
    );
  }
}

export default News;

const Container = styled.View`
  height: 330px;
`;
const NewsContainer = styled.View`
  width: 360px;
  height: 140px;
  margin-right: 10px;
`;

const Img = styled.Image`
  width: 360px;
  height: 150px;
`;

const NewsTitle = styled.View`
  padding: 18px;
  flex-direction: column;
  justify-content: flex-end;
  background-color: white;
`;

const NewsContents = styled.Text`
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: -0.02;
`;

const More = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

const Link = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Select = styled.Text`
  font-size: 14px;
  color: gray;
`;

const Listen = styled.Text`
  font-size: 14px;
  color: #ff1150;
`;
