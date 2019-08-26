import React from 'react';
import avengers from '../Data';

function AvengersList() {
  return (
    <div className="characters-list-wrapper">
      {avengers.map(avenger => (
        <div className="character-card" key={avenger.id}>
          <img src={avenger.thumbnail} alt={avenger.name} />
          <h2>{avenger.name}</h2>
          <p>({avenger.nickname})</p>
        </div>
      ))};
    </div>
  )
}

export default AvengersList;
