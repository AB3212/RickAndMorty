
import React from 'react';
import Tictac from './Tictac';
import '../css/Game.css';

const TicBoard = ({ squares, onClick }) => {
    return (
      <div className="board">
        {squares.map((square, i) => 
        ( 
            <Tictac  key={i} value={square} onClick={() => onClick(i)} />
        ))}
      </div>
    );
  };

export default TicBoard;
