import './App.css'
import React, { useState } from 'react'
import { FollowMouse } from './components/followMouse'

function App () {
  const [mounted, setMounted] = useState(false)

  return (
    <>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        Desactivar/Activar
      </button>
    </>
  )
}

export default App
