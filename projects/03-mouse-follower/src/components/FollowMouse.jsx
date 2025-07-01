import { useState, useEffect } from 'react'

export const FollowMouse = () => {
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

  useEffect(() => {
    document.body.classList.toggle('no-cursor', act)

    return () => {
      document.body.classList.toggle('no-cursor', false)
    }
  }, [act])

  return (
    <main>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -12.5,
          top: -12.5,
          width: 25,
          height: 25,
          transform: `translate(${posicion.x}px, ${posicion.y}px)`
        }}
      />
      <button onClick={() => setAct(!act)}>{act ? 'on effect' : 'off effect'} </button>
    </main>
  )
}
