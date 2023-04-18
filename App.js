import React from 'react';
import './App.css';
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
