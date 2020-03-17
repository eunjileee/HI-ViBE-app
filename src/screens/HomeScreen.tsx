import * as React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Footer from '../components/Footer';
import Album from '../components/Home/Album';
import Like from '../components/Home/Like';
import Listen from '../components/Home/Listen';
import MAG from '../components/Home/MAG';
import Today from '../components/Home/Today';

const HomeScreen = () => {
  return (
    <ScrollView>
      <Container>
        <Today />
        <Like />
        <Listen />
        <Album />
        <MAG />
        <Footer />
      </Container>
    </ScrollView>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 7%;
  background-color: black;
`;
