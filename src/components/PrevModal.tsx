import { SimpleLineIcons, EvilIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export default class PrevModal extends Component {
  render() {
    return (
      <PrevContainer>
        <TouchableOpacity onPress={this.props.Visible}>
          <EvilIcons name="close" color="white" size="28" />
        </TouchableOpacity>
        <ContentAlign>
          <Contents>
            1분 미리듣기 중입니다. 로그인하면 처음 한 번은 끝까지 들을 수
            있습니다.&nbsp;&nbsp;
            <BtnText>로그인 </BtnText>
            <SimpleLineIcons name="arrow-right" color="#ff1150" size="12" />
          </Contents>
        </ContentAlign>
      </PrevContainer>
    );
  }
}

const PrevContainer = styled.View`
  width: 101%;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  left: 20px;
  bottom: 80px;
  padding-right: 7px;
  padding-left: 18px;
  padding-top: 6px;
  /* margin: 0 auto; */
  background-color: black;
  z-index: 1000;
`;

const ContentAlign = styled.View`
  flex-direction: row;
`;
const Contents = styled.Text`
  padding-right: 35px;
  padding-bottom: 27px;
  font-size: 17px;
  color: white;
`;

const BtnText = styled.Text`
  color: #ff1150;
`;
