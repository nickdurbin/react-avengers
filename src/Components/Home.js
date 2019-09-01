import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Avenger Database</h1>
      <h3>Danger: Classsified Information!</h3>
      <Link to='/avengers'>Enter</Link>
    </div>
  )
}

export default Home;