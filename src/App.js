import React, { useState } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import AvengersList from './Components/AvengersList';
import avengers from './Data';

function App() {

  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/avengers' component={AvengersList} />
    </div>
  );
}

export default App;