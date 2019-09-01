import React from 'react';

const avengerData = []; // get the data from the same source above

function AvengerPage(props) {
  const avenger = avengerData.find(avenger => props.match.params.id === avenger.id);
  return (
    // ...jsx goes here - something like...
    <h1>{avenger.name}</h1>
    // ...etc
  );
}

export default AvengerPage;