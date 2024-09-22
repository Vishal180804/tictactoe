import React, { useState } from "react";
import Square from "./Square";


const calculateWinner=(squares)=> {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < wins.length; i++) {
    const [a, b, c] = wins[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default function Board() {
  const [squares,setSquares]=useState(Array(9).fill(null));
  const [turn,setTurn]=useState(true);

  const handleClick=(i)=>{
    if(squares[i] || calculateWinner(squares)){
      return
    }
    const nextSquares=squares.slice();
    if (turn) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares)
    setTurn(!turn)
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (turn ? "X" : "O");
  }
  return (
    <>
      
      <div className="container my-2">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
          <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
          <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
          <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
          <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
          <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
        </div>
      </div>
      <div className="container">
      <div className="status">{status}</div>
      </div>
    </>
  );
}

