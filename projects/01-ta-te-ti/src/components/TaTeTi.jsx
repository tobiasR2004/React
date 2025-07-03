import confetti from 'canvas-confetti'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Square } from './Square.jsx'
import { turns } from '../constant.js'
import { checkEndGame, checkWinnerFrom } from '../logic/board.js'
import { WinnerModal } from './winnerModal.jsx'
import { saveGame, resetGameStorage } from '../logic/storage.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { UseinitBoard } from './board.jsx'

export const TaTeTi = () => {
  const navigate = useNavigate()
  const volverAlMenu = () => navigate('/')
  const [board, setBoard] = UseinitBoard({ tamaño: 9 })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? turns.X
  })

  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    //  Si tiene algo no lo actualizo
    if (board[index] || winner) return

    //  Actualizacion de tablero
    const newboard = [...board]
    newboard[index] = turn
    setBoard(newboard)
    //  Actualizacion de turno
    const newTurn = turn === turns.X ? turns.O : turns.X
    setTurn(newTurn)

    saveGame({
      board: newboard,
      turn: newTurn
    })
    //  revisar si hay ganador
    const newWinner = checkWinnerFrom(newboard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newboard)) {
      setWinner(false) // Si es empate, se pone false
    } // Si no hay ganador, se queda en null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)

    resetGameStorage()
  }

  return (
    <main className='board'>
      <button className='back-button' onClick={volverAlMenu}><FontAwesomeIcon icon={faCaretLeft} /> </button>
      <h1 className='title-game'>Ta Te Ti</h1>

      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
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
