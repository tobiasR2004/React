import { WINNER_COMBOS_TATETI } from '../constant.js'
// Combinaciones ganadoras
export const checkWinnerFrom = (boardToCheck) => {
// Comprobar si hay un ganador
  for (const combo of WINNER_COMBOS_TATETI) {
    const [a, b, c] = combo
    if (boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  // Si no hay ganador
  return null
}

// Comprueba si termino el juego
export const checkEndGame = (newboard) => {
  return newboard.every((square) => square !== null)// Comprueba si todas(every) las casillas están ocupadas
}

export function getLastEmptyIndexColumn ({ col, numCol, board, numRow }) {
  // Recorre las filas desde abajo hacia arriba
  for (let row = numRow - 1; row >= 0; row--) {
    const index = row * numCol + col
    if (board[index] === null) {
      return index // Retorna el primer índice vacío encontrado
    }
  }
  return null
}
