import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Componenets/Home';
import AvengersList from './Components/AvengersList';
import avengers from '../Data';

function App() {

  const [avenger, setAvenger] = useState();

  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/avengers' component={AvengerList} />
    </div>
  );
}

export default App;