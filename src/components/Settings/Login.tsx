import axios from 'axios';
import { AuthSession } from 'expo';
import * as React from 'react';
import styled from 'styled-components/native';

import NaverLogin from './NaverLogin';

interface User {
  token: string;
  code: string;
  user: string;
}

const NV_APP_ID = 'dKgYsCotSS5U0VtHyMPm';
const NV_APP_SECRET = '2si_Wnt86l';
const STATE_STRING = 'YOUR_SECRET_STRING';

export default class Login extends React.Component<User, object> {
  state: User = {
    token: '',
    code: '',
    user: '',
  };

  naverLogin = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();

    const result = await AuthSession.startAsync({
      authUrl: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NV_APP_ID}&redirect_uri=${encodeURIComponent(
        redirectUrl
      )}&state=${STATE_STRING}`,
    });

    this.setState({
      code: result.code,
    });

    handleGetAccess();
  };

  render() {
    return (
      <LoginContainer>
        <Contents>로그아웃 상태입니다.</Contents>
        <SubContents>{`보관함을 사용하려면\n VIBE에 로그인해 주세요.`}</SubContents>
        <Btn onPress={this.naverLogin}>
          <BtnText>로그인</BtnText>
        </Btn>
      </LoginContainer>
    );
  }
}

const LoginContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.Text`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const SubContents = styled.Text`
  line-height: 32px;
  font-size: 20px;
  text-align: center;
  color: white;
`;

const Btn = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-top: 25px;
  background-color: #7a7a7a;
`;

const BtnText = styled.Text`
  font-size: 18px;
  color: white;
`;
