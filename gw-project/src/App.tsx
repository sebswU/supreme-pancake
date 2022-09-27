import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import { FC } from 'react';
import autoanimate from '@formkit/auto-animate';

type props = {
  message: string;
}
type state = {
  message: string;
}
let actionOne : (internal:state, external:props) => void; 
const Messenger:FC extends React.Component <{
  input:props;
}>?{
 
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
