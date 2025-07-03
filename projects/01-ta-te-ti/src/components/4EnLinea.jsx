import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { Square } from './Square'
import { turns } from '../constant.js'
import { UseinitBoard } from './board.jsx'
import { checkEndGame, getLastEmptyIndexColumn, WINNER_4ENLINEA } from '../logic/board.js'
import { WinnerModal } from './winnerModal.jsx'
import { resetGameStorage, saveGame } from '../logic/storage.js'

export const EnLinea = () => {
  const navigate = useNavigate()
  const volverAlMenu = () => navigate('/')
  const lengthBoard = 42
  const numCol = 7
  const numRow = 6
  const [board, setBoard] = UseinitBoard({ tamaño: lengthBoard })
  const [winner, setWinner] = useState(null)
  const [descensoIndex, setDescensoIndex] = useState() // Donde cae la ficha?
  const [fichaDesc, setFichaDesc] = useState() // Que ficha cae?
  const [Animando, setAnimando] = useState(false)

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? turns.X
  })

  const updateBoard = (index) => {
    // apunta a la columna de ese indice
    if (Animando) return
    const col = index % 7

    const lastEmptyIndex = getLastEmptyIndexColumn({ col, numCol, board, numRow })

    setDescensoIndex(lastEmptyIndex)
    setFichaDesc(turn)
    setAnimando(true)

    setTimeout(() => {
      // Actualizacion de tablero
      const newBoard = [...board]
      newBoard[lastEmptyIndex] = turn
      setBoard(newBoard)
      // Actualizacion de turno
      if (lastEmptyIndex != null) {
        const newTurn = turn === turns.X ? turns.O : turns.X
        setTurn(newTurn)
        saveGame({
          board: newBoard,
          turn: newTurn
        })
      }

      // Revisar si hay ganador
      const newWinner = WINNER_4ENLINEA(newBoard, numCol, numRow)
      if (newWinner) {
        setWinner(newWinner)
        confetti()
      } else if (checkEndGame(newBoard)) {
        setWinner(false)
      }
      setAnimando(false)
    }, 450)
  }

  const resetGame = () => {
    setBoard(Array(lengthBoard).fill(null))
    setTurn(turns.X)
    setWinner(null)
    setDescensoIndex(null)
    setFichaDesc(null)
    resetGameStorage()
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
              {board[index] || (index === descensoIndex && (
                <span className={`desc-chip ${fichaDesc}`}>{fichaDesc}</span>))}
            </Square>
          )
        })
      }
      </section>
      <section className='turn'>
        <div className='turn-square'>
          <Square isSelected={turn === turns.X}>{turns.X}</Square>
          <Square isSelected={turn === turns.O}>{turns.O}</Square>
        </div>
        <button onClick={resetGame}>Reiniciar juego</button>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}
