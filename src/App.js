import React, {Component} from 'react';
import styled from 'styled-components'
import { AppHeader } from './AppHeader';
import logo from './Logo.svg';
import { Logo } from './Logo';
import SearchBar from './SearchBar';
import SearchEngine from './SearchEngine';
import Extras from './Extras';

class App extends Component {
  state = {
    searchparams: [
      {
        question: "",
        answers: [],
        successful: false
      }
    ]
  }

  render() {
  return (
    <AppDiv>
      <AppHeader>
        <Logo src={logo} alt="logo" />
      </AppHeader>
      <SearchBar searchparams={this.state.searchparams} getQuestion={this.getQuestion}/>
      <SearchEngine searchparams={this.state.searchparams}/>
      <Extras />
      
    </AppDiv>
  )
}}

const AppDiv = styled.div`
  text-align: center;
`;

export default App;
