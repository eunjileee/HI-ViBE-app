import { SimpleLineIcons } from '@expo/vector-icons';
import * as React from 'react';
import styled from 'styled-components/native';

const Footer = () => {
  return (
    <Contents>
      <Info>
        네이버(주) 사업자 정보 &nbsp;
        <SimpleLineIcons name="arrow-down" size="12" />
      </Info>
      <FooterContents>
        개인정보 처리방침 <Bar>&nbsp;|&nbsp;</Bar> 오류신고 및 결제관련 문제해결
      </FooterContents>
      <FooterContents>
        고객센터 <Bar>&nbsp;|&nbsp;</Bar> 네이버 이용약관{' '}
        <Bar>&nbsp;|&nbsp;</Bar> VIBE 이용약관
      </FooterContents>
      <Copyright>© NAVER Corp.</Copyright>
    </Contents>
  );
};

export default Footer;

const Contents = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
  margin-bottom: 150px;
  text-align: center;
`;

const Info = styled.Text`
  margin-bottom: 12px;
  font-size: 16px;
  color: gray;
`;

const FooterContents = styled.Text`
  margin-bottom: 7px;
  font-size: 14px;
  color: gray;
`;

const Bar = styled.Text`
  color: #373737;
`;

const Copyright = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  color: gray;
`;
