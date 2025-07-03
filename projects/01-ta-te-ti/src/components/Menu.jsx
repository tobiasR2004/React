import { Link } from 'react-router-dom'

function Menu () {
  return (
    <nav className='nav-menu'>
      <Link to='/tateti' className='game-select'>Ta Te Ti</Link>
      <Link to='/4enlinea' className='game-select'>4 en Linea</Link>
    </nav>
  )
}

export default Menu
