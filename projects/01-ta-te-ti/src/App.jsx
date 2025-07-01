import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { TaTeTi } from './components/TaTeTi'
import Menu from './components/menu.jsx'
import './index.css'
import './App.css'

export default App

function App () {
  const [game, setGame] = useState(null)

  if (game === 'TaTeTi') {
    return (
      <TaTeTi volverAlMenu={() => setGame(null)} />
    )
  }

  if (game === '4EnLinea') {
    return (
      <h1>4 En Linea</h1>
    )
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Menu setGame={setGame} />} />
        <Route path='/TaTeTi' element={<TaTeTi volverAlMenu={() => setGame(null)} />} />
        <Route path='/4EnLinea' element={<h1>4 En Linea</h1>} />
      </Routes>
    </Router>
  )
}
