import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router
} from "react-router-dom"; 
import {Routes} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <>
       
      <Navbar/> 
    <News pageSize={9} country='in' category="general"/>
         
      </>
    )
  }
}
