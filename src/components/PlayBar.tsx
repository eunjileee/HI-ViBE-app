import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import PrevModal from './PrevModal';

const PlayBar = () => {
  const [visible, setVisible] = useState(false);

  const setModalVisible = visible => {
    setVisible(visible);
  };

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
      <Icons>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <MaterialIcons name="play-arrow" color="white" size="40" />
        </TouchableOpacity>
        <TouchableOpacity onPress={setModalVisible}>
          <MaterialIcons name="fast-forward" color="white" size="40" />
        </TouchableOpacity>
        <MaterialIcons name="playlist-play" color="white" size="40" />
      </Icons>
      {/* <PrevModal /> */}
    </PlayBarContainer>
  );
};

export default PlayBar;

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

const Icons = styled.View`
  width: 38%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
