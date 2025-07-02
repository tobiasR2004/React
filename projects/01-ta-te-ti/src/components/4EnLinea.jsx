import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { Square } from './Square'
import { turns } from '../constant.js'
import { UseinitBoard } from './board.jsx'

export const EnLinea = () => {
  const navigate = useNavigate()
  const volverAlMenu = () => navigate('/')
  const lengthBoard = 42
  const [board, setBoard] = UseinitBoard({ tamaño: lengthBoard })
  const [winner, setWinner] = useState(null)

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? turns.X
  })

  const updateBoard = (index) => {
    // Actualizacion de tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Actualizacion de turno
    const newTurn = turn === turns.X ? turns.O : turns.X
    setTurn(newTurn)
  }

  const resetGame = () => {
    setBoard(Array(lengthBoard).fill())
    setTurn(turns.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <main className='board-4enLinea'>
      <button className='back-button' onClick={volverAlMenu}><FontAwesomeIcon icon={faCaretLeft} /> </button>
      <h1 className='title-game'>4 en Línea</h1>
      <section className='game'>
        {
        board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              isSelected={board[index]}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          )
        })
      }
      </section>
      <section className='turn'>
        <Square isSelected={turn === turns.X}>{turns.X}</Square>
        <Square isSelected={turn === turns.O}>{turns.O}</Square>
      </section>
      <button onClick={resetGame}>Reiniciar juego</button>
    </main>
  )
}
