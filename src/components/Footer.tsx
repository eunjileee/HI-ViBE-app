import * as React from 'react';
import styled from 'styled-components/native';

const Footer = () => {
  return <Contents />;
};

export default Footer;

const Contents = styled.Text`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 70;
  line-height: 40;
  font-size: 14;
  text-align: center;
  color: gray;
`;
