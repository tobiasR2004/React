 import { WINNER_COMBOS } from '../constant.js';
 
 export const checkWinnerFrom = (boardToCheck) => {
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


  
  export const checkEndGame = (newboard) => {
    return newboard.every((square) => square !== null); // Comprueba si todas(every) las casillas están ocupadas
  };