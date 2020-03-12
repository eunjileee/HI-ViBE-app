import { SimpleLineIcons } from '@expo/vector-icons';
import * as React from 'react';
import styled from 'styled-components/native';

import Login from '../components/Settings/Login';

const SettingsScreen = () => {
  return (
    <Container>
      <TitleBar>
        <SettingsTitle>보관함</SettingsTitle>
        <SimpleLineIcons name="settings" color="white" size="20" />
      </TitleBar>
      <Contents>
        <Login />
      </Contents>
    </Container>
  );
};

export default SettingsScreen;

const Container = styled.View`
  flex: 1;
  padding-left: 20;
  padding-right: 20;
  background-color: black;
`;

const TitleBar = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SettingsTitle = styled.Text`
  font-size: 30;
  font-weight: bold;
  color: white;
`;

const Contents = styled.View`
  flex: 4;
`;
