import { EvilIcons } from '@expo/vector-icons';
import * as React from 'react';
import styled from 'styled-components/native';

const PrevModal = () => {
  return (
    <PrevContainer>
      <EvilIcons name="close" color="white" size="30" />
      <ContentAlign>
        <Contents>
          1분 미리듣기 중입니다. 로그인하면 처음 한 번은 끝까지 들을 수
          있습니다.
          <BtnText>로그인 </BtnText>
          <EvilIcons name="chevron-right" color="#ff1150" size="25" />
        </Contents>
      </ContentAlign>
    </PrevContainer>
  );
};

export default PrevModal;

const PrevContainer = styled.View`
  width: 95%;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  left: 11px;
  bottom: 160px;
  padding-right: 8px;
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 10px;
  background-color: black;
  z-index: 1000;
`;

const ContentAlign = styled.View`
  flex-direction: row;
`;
const Contents = styled.Text`
  padding-right: 35px;
  padding-bottom: 20px;
  font-size: 17px;
  color: white;
`;

const BtnText = styled.Text`
  color: #ff1150;
`;
