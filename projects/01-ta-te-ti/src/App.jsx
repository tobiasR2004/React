import React from 'react'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import './index.css'
import './App.css'
import { Square } from './components/Square.jsx'
import {turns} from './constant.js'
import {checkEndGame ,checkWinnerFrom } from './logic/board.js'
import { WinnerModal } from './components/winnerModal.jsx';


function App() {
  
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  }
  )

  const[turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? turns.X
  })


  const[winner, setWinner] = useState(null) 



  const updateBoard = (index)=> {
    //Si tiene algo no lo actualizo
    if(board[index] || winner) return;

    //Actualizacion de tablero
    const newboard = [...board];
    newboard[index] = turn;
    setBoard(newboard)
    //Actualizacion de turno
     const newTurn = turn === turns.X ? turns.O : turns.X;

    setTurn(newTurn);
    window.localStorage.setItem('board', JSON.stringify(newboard));
    window.localStorage.setItem('turn', newTurn);
    //Cambio de turno
    //Si es X, pasa a O y viceversa

    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newboard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newboard)){
      setWinner(false); // Si es empate, se pone false
    } // Si no hay ganador, se queda en null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(turns.X);
    setWinner(null);

    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }


    return  (
      <main className='board'>
        <h1>TA TE TI</h1>
        <button onClick={resetGame}>Reiniciar juego</button>

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

          <WinnerModal resetGame={resetGame} winner={winner} />

      </main>
    )
}

export default App
