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

export const WINNER_4ENLINEA = (board, numCol, numRow) => {
  for (let row = 0; row < numRow; row++) {
    for (let col = 0; col < numCol; col++) {
      const index = row * numCol + col
      const cell = board[index]

      if (!cell) continue

      // verificacion horizontal
      if (col <= numCol - 4 &&
        cell === board[index + 1] &&
        cell === board[index + 2] &&
        cell === board[index + 3]) {
        return cell
      }

      // verificacion vertical
      if (row <= numRow - 3 &&
        cell === board[index + numCol] &&
        cell === board[index + numCol * 2] &&
        cell === board[index + numCol * 3]) {
        return cell
      }

      // verificacion diagonal hacia abajo
      if (col <= numCol - 4 && row <= numRow - 3 &&
        cell === board[index + numCol + 1] &&
        cell === board[index + numCol * 2 + 2] &&
        cell === board[index + numCol * 3 + 3]) {
        return cell
      }

      // verificacion diagonal hacia arriba
      if (col >= 3 && row <= numRow - 3 &&
        cell === board[index + numCol - 1] &&
        cell === board[index + numCol * 2 - 2] &&
        cell === board[index + numCol * 3 - 3]
      ) {
        return cell
      }
    }
  }
}
