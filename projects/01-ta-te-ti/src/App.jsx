import React from 'react'
import { useState } from 'react'
import './index.css'
import './App.css'

const turns = {
  X:'X',
  O:'O'
}



const Square = ({children, isSelected,  updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index);
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {
  
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const[turn, setTurn] = useState(turns.X)
  const[winner, setWinner] = useState(null) 

  const checkWinner = (boardToCheck) => {
  //Comprobar si hay un ganador
    for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo;
      if (boardToCheck[a] &&
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c]
        ) {
          return boardToCheck[a];
    }
  }
  //Si no hay ganador
  return null;
}

  const updateBoard = (index)=> {
    //Si tiene algo no lo actualizo
    if(board[index] || winner) return;

    //Actualizacion de tablero
    const newboard = [...board];
    newboard[index] = turn;
    setBoard(newboard)

    //Cambio de turno
    //Si es X, pasa a O y viceversa
    const newTurn = turn === turns.X ? turns.O : turns.X;
    setTurn(newTurn);
    //revisar si hay ganador
    const newWinner = checkWinner(newboard);
    if (newWinner) {
      setWinner(newWinner);
      alert(`El ganador es: ${newWinner}`);
    }
  }


    return  (
      <main className='board'>
        <h1>TA TE TI</h1>
        <section className="game">
          {
            board.map((_, index) => {
              return (
                <Square key={index}
                index={index}
                updateBoard={updateBoard}
                >
                {board[index]}
                </Square>
              )
          })
          }
        </section>
          <section className="turn">
            <Square isSelected={turn === turns.X}>{turns.X}</Square>
            <Square isSelected={turn === turns.O}>{turns.O}</Square>
          </section>

      </main>
    )
}

export default App
