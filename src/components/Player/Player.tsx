import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import React, { Component } from 'react';
import { View, TouchableOpacity, Modal, Text, Image } from 'react-native';
import styled from 'styled-components/native';

import MusicInfoModal from './MusicInfoModal';
import PrevModal from './PrevModal';

interface State {
  isVisible: boolean;
  modalVisible: boolean;
  play: boolean;
}

export default class player extends Component<State> {
  state: State = {
    isVisible: false,
    modalVisible: false,
    play: false,
  };

  async soundPlay() {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('../../assets/zico.mp3'));
      await soundObject.playAsync();
    } catch (error) {
      // An error occurred!
    }
  }

  setModalVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible,
      play: !this.state.play,
    });
  };

  musicInfo = visible => {
    this.setState({
      modalVisible: visible,
    });
  };

  render() {
    const { isVisible, modalVisible, play } = this.state;
    return (
      <PlayBarContainer>
        <Music>
          <Img
            source={{
              uri:
                'https://musicmeta-phinf.pstatic.net/album/004/413/4413282.jpg?type=r100Fll&v=20200205180913',
            }}
          />
          <View>
            <AlbumTitle>아무노래</AlbumTitle>
            <Artist>지코 (ZICO)</Artist>
          </View>
        </Music>
        <Icons
          onPress={() => {
            this.musicInfo(true);
          }}
        >
          <TouchableOpacity onPress={this.soundPlay}>
            {!play && (
              <MaterialIcons name="play-arrow" color="white" size="40" />
            )}
            {play && <MaterialIcons name="pause" color="white" size="37" />}
          </TouchableOpacity>
          <FastIcon>
            <TouchableOpacity onPress={this.setModalVisible}>
              <MaterialIcons name="fast-forward" color="white" size="40" />
            </TouchableOpacity>
          </FastIcon>
          <TouchableOpacity
            onPress={() => {
              this.musicInfo(true);
            }}
          >
            <MaterialIcons name="playlist-play" color="white" size="40" />
          </TouchableOpacity>
        </Icons>

        {/* Music Info Modal */}
        <Modal
          animationType="slide"
          transparent={false}
          presentationStyle="pageSheet"
          visible={this.state.modalVisible}
        >
          <Container>
            <InfoTitle>
              <Ionicons name="ios-options" size="30" color="gray" />
              <Genre>POP NOW</Genre>
              <TouchableOpacity
                onPress={() => {
                  this.musicInfo(!modalVisible);
                }}
              >
                <Ionicons name="ios-arrow-down" size="35" color="gray" />
              </TouchableOpacity>
            </InfoTitle>
            <ImgContainer>
              <ModalImg
                source={{
                  uri:
                    'https://musicmeta-phinf.pstatic.net/album/004/412/4412109.jpg?type=r360Fll&v=20200219115708',
                }}
              />
            </ImgContainer>
            <Contents>
              <AlbumInfo>
                <Name>노래 제목</Name>
                <ArtistInfo>
                  <AlbumArtist>아티스트</AlbumArtist>
                  <Ionicons name="ios-more" size="30" color="white" />
                </ArtistInfo>
              </AlbumInfo>
              <View />
              <Icon>
                <Ionicons name="ios-repeat" size="33" color="gray" />
                <Feather name="send" size="30" color="gray" />
                <Ionicons name="ios-play" size="60" color="white" />
                <Ionicons name="md-heart-empty" size="30" color="gray" />
                <Ionicons name="ios-shuffle" size="30" color="gray" />
              </Icon>
              <Icon>
                <Ionicons name="ios-radio" size="30" color="gray" />
                <MaterialIcons name="playlist-play" color="gray" size="33" />
              </Icon>
            </Contents>
          </Container>
        </Modal>
        {/* Music Info Modal */}

        {isVisible && <PrevModal visible={this.setModalVisible} />}
      </PlayBarContainer>
    );
  }
}

const PlayBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 83px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-top-color: #3f3f3f;
  border-top-width: 2px;
  background-color: rgba(25, 25, 25, 0.97);
  opacity: 0.999;
  z-index: 1000;
`;

const Img = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;
const Music = styled.View`
  flex-direction: row;
  align-items: center;
`;

const AlbumTitle = styled.Text`
  margin-bottom: 5px;
  font-size: 18px;
  color: white;
`;

const Artist = styled.Text`
  color: gray;
`;

const Icons = styled.TouchableOpacity`
  width: 140px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FastIcon = styled.View`
  margin: 0 13px;
`;

//modal
const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: black;
`;

const InfoTitle = styled.View`
  flex: 0.7;
  width: 350px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Genre = styled.Text`
  font-size: 18px;
  color: gray;
`;

const ImgContainer = styled.View`
  flex: 4;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.View`
  flex: 2;
`;

const ModalImg = styled.Image`
  width: 300px;
  height: 300px;
`;

const AlbumInfo = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

const Name = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: white;
`;

const ArtistInfo = styled.View`
  width: 350px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AlbumArtist = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: gray;
`;

const Icon = styled.View`
  width: 350px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
