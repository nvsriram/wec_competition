import React from 'react';
import logo from './Logo.svg';
import styled from 'styled-components'
import './App.css';
import { AppHeader } from './AppHeader';
import { Logo } from './Logo';

const App = () => {
  return (
    <AppDiv>
      <AppHeader>
        <Logo src={logo} alt="logo" />
        <p>
          Oops, guess it didn't load...
          <br />
          Here's a cute Corgi while you wait...:) 
        </p>
        <Corgi
          src="http://placecorgi.com/300/300"
          alt="Cute corgi uwu"
          //rel="noopener noreferrer"
        />
      </AppHeader>
    </AppDiv>
  );
}

const AppDiv = styled.div`
  text-align: center;
`;

const Corgi = styled.img `
  width: 100%;
  height: 100%;
`;
export default App;
