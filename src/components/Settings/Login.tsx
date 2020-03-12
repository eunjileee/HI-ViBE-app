import * as React from 'react';
import {
  Alert,
  View,
  Text,
  WebView,
  Button,
  TouchableOpacity,
  StackActions,
  NavigationActions,
} from 'react-native';
import styled from 'styled-components/native';

export default class Login extends React.Component {
  naverLogin = async () => {
    const uri = await this.props.getNaverUri();
    this.props.navigation.push('WebLogin', {
      uri,
      login: this.insertLogin,
      loginFail: this.loginFail,
    });
  };

  insertLogin = () => {
    console.log('SettingScreen insertLogin');
  };

  loginFail = () => {
    console.log('SettingScreen loginFail');
    this.props.navigation.goBack();
    alert('로그인에 실패하였습니다. 잠시 후 다시 시도해주세요.');
  };

  render() {
    return (
      <LoginContainer>
        <Contents>로그아웃 상태입니다.</Contents>
        <SubContents>{`보관함을 사용하려면\n VIBE에 로그인해 주세요.`}</SubContents>
        <Btn>
          <BtnText onPress={this.naverLogin}>로그인</BtnText>
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
  margin-bottom: 10;
  font-size: 25;
  font-weight: bold;
  color: white;
`;

const SubContents = styled.Text`
  font-size: 20;
  text-align: center;
  color: white;
`;

const Btn = styled.TouchableOpacity`
  width: 100;
  height: 40;
  border-radius: 50;
  margin-top: 30;
  font-size: 18;
  background-color: gray;
`;

const BtnText = styled.Text`
  text-align: center;
  color: white;
`;
