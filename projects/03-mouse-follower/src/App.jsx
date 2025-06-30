import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [act, setAct] = useState(false);
  useEffect(() => {

  
    console.log('effect', act)
  }, [act])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(0px, 0px)`
      }}> 

      </div> 
      <button onClick={() => setAct(!act)}>{act ? 'on effect' : 'off effect'} </button>
    </main>
  )
}

export default App
