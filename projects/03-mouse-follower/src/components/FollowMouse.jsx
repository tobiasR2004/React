export const followMouse = (posicion, setAct, act) => {
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
