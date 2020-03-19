import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { WebView } from 'react-native';
import styled from 'styled-components/native';

export default class NaverLogin extends Component {
  componentWillMount() {
    this.setState({
      url: this.props.navigation.getParam('uri'),
    });
  }

  webViewEnd = async event => {
    const result = JSON.parse(event.NativeEventEmitter.data);

    if (result.statusCodeValue === 200) {
      //성공
      const data = {
        // 로그인 정보 저장
        token,
        nickName,
        profile: image,
      };
      await this.props.login(data);
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'SettingsScreen' })],
      });
      this.props.navigation.dispatch(resetAction);
    } else {
      // 실패
      this.props.navigation.goBack();
    }
  };

  render() {
    const uri = this.props.navigation.getParam('uri');
    return (
      <Container>
        <WebView
          ref={ref => (this.webview = ref)}
          source={{ uri: this.state.url }}
          useWebKit
          onMessage={event => this.webViewEnd(event)}
        />
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
`;
