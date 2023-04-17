// import React from 'react';
import { Routes ,Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Card from './User';
import Fetchdata from './Fetchdata';
import User from './User';

function App() {
  return (
    <>
    {/* <Card /> */}
    <Card />
   <Routes>
      <Route exact path='/' element={<User />} />
      <Route path='/Fetchdata' element={<Fetchdata />} />
      <Route path='/Card' element={<Card />} />
      </Routes>
    </>
  );
}

export default App;
