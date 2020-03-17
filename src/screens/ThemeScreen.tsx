import { EvilIcons } from '@expo/vector-icons';
import * as React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  View,
  Text,
} from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../data/theme';

interface theme {
  description: string;
  id: number;
  img: string;
}

interface data {
  data: theme[];
}

export default class ThemeScreen extends React.Component<object, data> {
  state = {
    data: theme.data,
    list: theme.theme_list,
    info: theme.theme_details,
    modalVisible: false,
    themeInfo: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  modalClicked(visible) {
    this.setState({ themeInfo: visible });
  }

  render() {
    const { data, list, info } = this.state;

    return (
      <ScrollView>
        <Container>
          <TitleBar>
            <Title>DJ</Title>
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(true);
              }}
            >
              <Btn>테마</Btn>
            </TouchableOpacity>
          </TitleBar>

          {/* ----- First Modal ----- */}
          <ModalView
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            presentationStyle="pageSheet"
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
          >
            <StationBar>
              <Text />
              <StationTheme>스테이션 테마</StationTheme>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(false);
                }}
              >
                <EvilIcons name="close" size="35" />
              </TouchableOpacity>
            </StationBar>
            <ListContainer>
              {list.map(el => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.modalClicked(true);
                    }}
                  >
                    <Img key={el.id} source={{ uri: `${el.main_image}` }} />
                    <Name>{el.name}</Name>
                    <Creator>{el.creator}</Creator>
                  </TouchableOpacity>
                );
              })}
            </ListContainer>
          </ModalView>
          {/* ----- First Modal ----- */}

          {/* ----- Second Modal ----- */}
          <ModalView
            animationType="slide"
            transparent={false}
            visible={this.state.themeInfo}
            presentationStyle="overFullScreen"
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
          >
            <StationBar>
              <TouchableOpacity
                onPress={() => {
                  this.modalClicked(false);
                }}
              >
                <EvilIcons name="chevron-left" size="35" />
              </TouchableOpacity>
              <StationTheme>테마 정보</StationTheme>
              <TouchableOpacity
                onPress={() => {
                  this.modalClicked(false);
                }}
              >
                <EvilIcons name="close" size="35" />
              </TouchableOpacity>
            </StationBar>
            <ListContainer>
              {info.map(el => {
                return (
                  <>
                    <View>
                      <View>
                        <image source={{ uri: `${el.image}` }} />
                        <View>
                          <Text>{el.category}</Text>
                          <Text>{el.name}</Text>
                          <Text>{el.creator}</Text>
                          <Text>{el.charge}</Text>
                        </View>
                      </View>
                      <Button>적용하기</Button>
                    </View>
                    <View>
                      <Img key={el.id} source={{ uri: `${el.main_image}` }} />
                      <Name>{el.name}</Name>
                      <Creator>{el.creator}</Creator>
                    </View>
                  </>
                );
              })}
            </ListContainer>
          </ModalView>
          {/* ----- Second Modal ----- */}

          <Data>
            <Station>느낌별 스테이션</Station>
            <StationContainer>
              {data.map(el => {
                if (el.id < 15) {
                  return <Img key={el.id} source={{ uri: `${el.img}` }} />;
                }
              })}
            </StationContainer>
          </Data>
          <Data>
            <Station>장르 스테이션</Station>
            <StationContainer>
              {data.map(el => {
                if (el.id > 15) {
                  return <Img key={el.id} source={{ uri: `${el.img}` }} />;
                }
              })}
            </StationContainer>
          </Data>
        </Container>
      </ScrollView>
    );
  }
}

const Container = styled.View`
  flex: 1;
  padding-left: 20px;
  background-color: black;
`;

const Title = styled.Text`
  padding-top: 75px;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const TitleBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
`;

const Data = styled.View`
  margin-top: 7%;
  margin-bottom: 5%;
`;

const Img = styled.Image`
  width: 181px;
  height: 181px;
  margin-right: 15px;
  margin-bottom: 15px;
`;

const Station = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
`;

const StationContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Btn = styled.Text`
  margin-top: 75px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
`;

const ModalView = styled.Modal`
  margin-top: 75px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
`;

const StationTheme = styled.Text`
  font-size: 20px;
  color: black;
`;

const StationBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
`;

const Name = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
  color: black;
`;

const Creator = styled.Text`
  margin-bottom: 15px;
  font-size: 16px;
  color: gray;
`;

const ListContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 20px;
`;
