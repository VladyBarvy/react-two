import React, { useState } from 'react';

const ListGroup = ({ children }) => {


  return (

    <ul>
      {React.Children.map(children, (child, index) => (
        <li key={index}>{child}</li>
      ))}
    </ul>
  );
};

export default ListGroup;
