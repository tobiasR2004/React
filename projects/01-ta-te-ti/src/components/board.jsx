import { useState } from 'react'

export const UseinitBoard = ({ tamaño }) => {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(tamaño).fill(null)
  })
  return [board, setBoard]
}
