import * as React from 'react';
import { StatusBar, Platform } from 'react-native';
import styled from 'styled-components/native';

import Navigation from './src/components/Navigation';
import PlayBar from './src/components/PlayBar';
import PrevModal from './src/components/PrevModal';

const App = () => {
  return (
    <>
      <StatusBarContainer>
        <StatusBar
          barStyle="light-content" // ios
          backgroundColor="black" // Android
          hidden={false}
        />
      </StatusBarContainer>
      <PrevModal />
      <PlayBar />
      <Navigation />
    </>
  );
};

export default App;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;

const StatusBarContainer = styled.View`
  height: ${STATUSBAR_HEIGHT};
  background-color: black;
`;
