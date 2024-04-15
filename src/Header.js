import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <strong>
        <img
          className="logo"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        />
      </strong>

      <div>
        <nav>
          <ul>
            <li className="button">
              <Link to="/">Home</Link>
            </li>
            <li className="button">
              <Link to="/sobre">Sobre</Link>
            </li>
            <li className="button">
              <Link to="/rotas">Rotas</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
