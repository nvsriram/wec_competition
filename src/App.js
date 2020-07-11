import React from 'react';
import logo from './Logo.svg';
import styled from 'styled-components'
import './App.css';

function App() {
  return (
    <AppDiv>
      <AppHeader>
        <Logo src={logo} alt="logo" />
        <p>
          Oops, guess it didn't load...
          <br />
          Here's a cute puppy while you wait...:) 
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

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
  @keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;
const Corgi = styled.img `
  width: 100%;
  height: 100%;
`;
export default App;
