import { Image } from 'react-native';
import styled from 'styled-components/native';

import { slide } from '../../../../data/slide';

const TodaySlide = () => {
  return slide.data.map(el => {
    return <></>;
  });
};

export default TodaySlide;

const Slide = styled.View`
  flex: 1;
  justify-content: flex-start;
  margin: 0 20;
`;

const Label = styled.Text`
  font-size: 9;
  color: red;
`;

const Title = styled.Text`
  font-size: 16;
  color: #fff;
`;

const SubTitle = styled.Text`
  font-size: 12;
  color: gray;
`;
