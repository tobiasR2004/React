import { useState, useEffect } from 'react'
import './App.css'
import { followMouse } from './components/followMouse'

function App () {
  const [act, setAct] = useState(false)
  const [posicion, setPosicion] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handlemove', { clientX, clientY })
      setPosicion({ x: clientX, y: clientY })
    }

    if (act) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [act])
  return (
    <>
      {followMouse(posicion, setAct, act)}
    </>
  )
}

export default App
