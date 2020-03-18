import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import styled from 'styled-components/native';

import Navigation from './src/components/Navigation';
import Player from './src/components/Player';
import Promotion from './src/components/Promotion';

interface State {
  isVisible: boolean;
}

export default class App extends Component<State> {
  state: State = {
    isVisible: true,
  };

  setPromotionVisible = () => {
    this.setState({
      isVisible: false,
    });
  };

  render() {
    const { isVisible } = this.state;
    return (
      <>
        <StatusBarContainer color={isVisible}>
          <StatusBar
            barStyle="light-content" // ios
            backgroundColor="black" // Android
            hidden={false}
          />
        </StatusBarContainer>
        {isVisible && <Promotion Visible={this.setPromotionVisible} />}
        <Player />
        <Navigation />
      </>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;

const StatusBarContainer = styled.View`
  height: ${STATUSBAR_HEIGHT};
  background-color: ${props =>
    props.color === true ? 'rgb(108, 0, 254);' : 'black'};
`;
