import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

interface param {
  Visible: boolean;
}

export default class Promotion extends Component<param, object> {
  render() {
    const { Visible } = this.props;
    return (
      <PromotionContainer>
        {/* Contents */}
        <View>
          <NewPromotion>New Promotion</NewPromotion>
          <Content>VIBE 무제한 음악 듣기 최대 6개월 무료</Content>
          <More>
            <Txt>자세히 보기&nbsp;</Txt>
            <SimpleLineIcons name="arrow-right" color="#ac4dff" size="8" />
          </More>
        </View>

        {/* close 버튼 */}
        <TouchableOpacity onPress={Visible}>
          <AntDesign name="close" color="white" size="20" />
        </TouchableOpacity>
      </PromotionContainer>
    );
  }
}

const PromotionContainer = styled.View`
  width: 101%;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 3%;
  padding-left: 7%;
  padding-top: 20px;
  padding-bottom: 15px;
  background-color: rgb(108, 0, 254);
`;

const NewPromotion = styled.Text`
  color: #fcce51;
`;

const Content = styled.Text`
  margin: 4px 0 7px;
  font-size: 15px;
  font-weight: 600;
  color: white;
`;

const More = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Txt = styled.Text`
  color: #ac4dff;
`;
