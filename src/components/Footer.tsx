import * as React from 'react';
import styled from 'styled-components/native';

const Footer = () => {
  return (
    <Contents>
      {`네이버(주) 사업자 정보 \n
      개인정보 처리방침 | 오류신고 및 결제관련 문제해결 \n
      고객센터 | 네이버 이용약관 | VIBE 이용약관 \n
      ⓒ NAVER Crop`}
    </Contents>
  );
};

export default Footer;

const Contents = styled.Text`
  flex: 1;
  font-size: 20;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
