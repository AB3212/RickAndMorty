// src/Game.js
import React, { useState } from 'react';
import TicBoard from "./TicBoard"
import { Button } from 'react-bootstrap';
import '../css/Game.css';

const Tictacgame = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
  
    const handleClick = (i) => {
      const newBoard = board.slice();
      if (calculateWinner(newBoard) || newBoard[i]) {
        return;
      }
      newBoard[i] = xIsNext ? 'X' : '0';
      setBoard(newBoard);
      setXIsNext(!xIsNext);
    };
  
    const renderRestartButton = () => (
      <Button variant="info" onClick={() => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
      }}>
        Restart Game
      </Button>
    );

      
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };
  
    const winner = calculateWinner(board);
    const isBoardFull = board.every(square => square !== null);
    const status = winner ? ` ${winner} is winner ` : isBoardFull ?'Game tie ' : `Next Player: ${xIsNext ? 'X' : 'O'}`;
  
    return (
      <div className="game">
        <h1 className="text-center">Tic Tac Toe</h1>
        <TicBoard squares={board} onClick={handleClick} />
        <div className="game-info text-center mt-3">
          <h3 >{status}</h3>
          {renderRestartButton()}
        </div>
      </div>
    );
  };

  
  
export default Tictacgame;
