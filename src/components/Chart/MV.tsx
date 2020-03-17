import * as React from 'react';
import styled from 'styled-components/native';

interface chart {
  title: string;
  charDate: string;
  imageUrl: string;
  trackTitle: string;
  artistName: string;
}

interface data {
  data: chart[];
}

const MV = props => {
  return (
    <VideoContainer>
      <Video source={{ uri: `${props.video}` }} />
      <Content>
        <TrackTitle>{props.videoTitle}</TrackTitle>
        <Artist>{props.artist}</Artist>
      </Content>
    </VideoContainer>
  );
};

export default MV;

const TrackTitle = styled.Text`
  font-size: 18;
  color: white;
`;

const Artist = styled.Text`
  font-size: 16;
  color: gray;
`;

const VideoContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
`;
const Video = styled.Image`
  width: 200;
  height: 100;
  margin-bottom: 10;
`;

const Content = styled.View`
  flex-direction: column;
  justify-content: flex-start;
`;
