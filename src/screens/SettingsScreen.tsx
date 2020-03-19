import { SimpleLineIcons } from '@expo/vector-icons';
import * as React from 'react';
import styled from 'styled-components/native';

import Login from '../components/Settings/Login';

const SettingsScreen = () => {
  return (
    <Container>
      <TitleBar>
        <Title>보관함</Title>
        <SimpleLineIcons name="settings" color="white" size="22" />
      </TitleBar>
      <Login />
    </Container>
  );
};

export default SettingsScreen;

// fixed
const Container = styled.View`
  flex: 1;
  padding-left: 7%;
  padding-top: 10%;
  background-color: black;
`;

const TitleBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 7%;
`;

const Title = styled.Text`
  font-size: 30;
  font-weight: bold;
  color: white;
`;
