//import logo from './logo.svg';
//import './App.css';
import React from 'react';
//import {Header, Content, Footer} from './func-components'
import MsgBox from './class-props';

function App() {  
  return(
    <MsgBox
      text="React & React Native"
      color="red"
      bgColor="#ccc"
      fontSize="18pt"
      border="solid 3px black"
    />
  )
}

export default App;
