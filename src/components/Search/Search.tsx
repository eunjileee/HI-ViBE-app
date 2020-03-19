import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

interface Input {
  text: string;
}
class Search extends React.Component<Input> {
  state: Input = {
    text: '',
  };

  setFocus = () => {};

  render() {
    return (
      <Bar>
        <Ionicons name="ios-search" color="lightgray" size="28" />
        <SearchBar
          keyboardType="web-search"
          placeholder="검색어를 입력해 주세요."
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          onFocus={this.setFocus}
        />
        <MaterialCommunityIcons name="play-speed" color="lightgray" size="28" />
      </Bar>
    );
  }
}

export default Search;

const Bar = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 10px;
  margin-bottom: 35px;
  border-radius: 7;
  background-color: #333333;
`;

const SearchBar = styled.TextInput.attrs({
  placeholderTextColor: 'lightgray',
  fontSize: '18px',
})`
  width: 280px;
  margin-left: 15px;
  color: lightgray;
`;
