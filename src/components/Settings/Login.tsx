import axios from 'axios';
import { AuthSession } from 'expo';
import * as React from 'react';
import styled from 'styled-components/native';

interface User {
  token: string;
  user: string;
  code: string;
}

const NV_APP_ID = 'uGvDxbkCApYrnk6yRPSw';
const NV_APP_SECRET = '9bgFVVFfeZ';
const STATE_STRING = '';

export default class Login extends React.Component<User, object> {
  state: User = {
    token: '',
    user: '',
    code: '',
  };

  //authsession
  naverLogin = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();
    console.log('redirectUrl', redirectUrl);
    console.log('encodeURIComponent', encodeURIComponent(redirectUrl));

    const result = await AuthSession.startAsync({
      authUrl: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NV_APP_ID}&redirect_uri=${encodeURIComponent(
        redirectUrl
      )}&state=${STATE_STRING}`,
    });

    console.log('result : ', result);

    this.setState({
      code: result.code,
    });

    this.getAccessToken();
  };

  //http data request
  getAccessToken = async () => {
    const {
      data: { access_token },
    } = await axios.get(
      `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${NV_APP_ID} &client_secret=${NV_APP_SECRET} &code=${this.state.code}&state=${STATE_STRING}`
    );

    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    this.setState({
      token: data.access_token,
    });

    const { data } = await axios.get(
      'https://openapi.naver.com/v1/nid/me',
      config
    );
    console.log('data : ', data);
    this.setState({
      user: data,
    });
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
  padding-right: 7%;
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

// handleGetToken = async () => {
//   const { result } = this.state;
//   const url = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${NV_APP_ID} &client_secret=${NV_APP_SECRET} &code=${result.params.code}&state=${result.params.state}`;
//   fetch(url, {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   })
//     .then(res => res.json())
//     .then(res => {
//       console.log('getTokenRes : ', res);
//       // this.setState({
//       //   user: ,
//       // });
//     });
// };
