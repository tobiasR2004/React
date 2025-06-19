import React from 'react'
import { useState } from 'react'
import './index.css'
import './App.css'

const turns = {
  X:'X',
  O:'O',
}



const Square = ({children, updateBoard, index}) => {
  return (  
    <div className='square'>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const[turn, setTurn] = useState(turns.x)


    return  (
      <main className='board'>
        <h1>TA TE TI</h1>
        <section className="game">
          {
            board.map((_, index) => {
              return (
                <Square key={index}
                index={index}>
                {board[index]}
                </Square>
              )
          })
          }
        </section>
          <section className="turn">
            <Square isSelected={turn === turns.X}>{turn.X}</Square>
            <Square isSelected={turn === turns.O}>{turn.O}</Square>
          </section>

      </main>
    )
}

export default App
