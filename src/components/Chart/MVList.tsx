import * as React from 'react';
import styled from 'styled-components/native';

const MVList = props => {
  return (
    <VideoContainer>
      <Video source={{ uri: `${props.image}` }} />
      <Content>
        <TrackTitle numberOfLines={1}>{props.name}</TrackTitle>
        <Artist>{props.artist}</Artist>
      </Content>
    </VideoContainer>
  );
};

export default MVList;

const VideoContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
`;
const Video = styled.Image`
  width: 300px;
  height: 180px;
  margin: 0 10px 10px 0;
`;

const Content = styled.View`
  width: 280px;
  height: 70px;
`;

const TrackTitle = styled.Text`
  font-size: 18px;
  color: white;
`;

const Artist = styled.Text`
  font-size: 16px;
  color: gray;
`;
