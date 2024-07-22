
import React from 'react';
import { Button } from 'react-bootstrap';

const Tictac = ({ value, onClick }) => {
  return (
    <Button className="square btn btn-secondary" onClick={onClick} style={{ border:'1px solid black',borderRadius:'0px', width: '100px', height: '100px', fontSize: '2rem' }}>
      {value}
    </Button>
  );
};

export default Tictac ;
