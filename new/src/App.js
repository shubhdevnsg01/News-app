import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 


export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar/>     
      <Routes>
     <Route path="/general" element={<News key="general" pageSize={9} country='in' category="general"/> }> </Route>
     <Route path="/Business" element={<News key="Business" pageSize={9} country='in' category="Business"/> }> </Route>
     <Route path="/Sports" element={<News key="Sports" pageSize={9} country='in' category="Sports"/> }> </Route>
     <Route path="/Entertainment" element={<News key="Entertainment" pageSize={9} country='in' category="Entertainment"/> }> </Route>
     <Route path="/Health" element={<News key="Health" pageSize={9} country='in' category="Health"/> }> </Route>
     <Route path="/Science" element={<News key="Science" pageSize={9} country='in' category="Science"/> }> </Route>
     <Route path="/Technology" element={<News key="Technology" pageSize={9} country='in' category="Technology"/> }> </Route>
   </Routes>
   </BrowserRouter>
      </>
    )
  }
}
