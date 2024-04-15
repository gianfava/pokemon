import React, { useEffect } from 'react'

function Rota() {
  useEffect(() => {
    const lastPokemonType = localStorage.getItem('lastPokemonType')
    const typeWallpapers = {
      bug: '/wallpapers/grass.webp',
      dragon: '/wallpapers/dragon.webp',
      electric: '/wallpapers/electric.webp',
      water: '/wallpapers/water.webp',
      fire: '/wallpapers/fire.webp',
      ice: '/wallpapers/ice.webp',
      steel: '/wallpapers/steel.webp',
      grass: '/wallpapers/grass.webp',
      ghost: '/wallpapers/ghost.webp',
      ground: '/wallpapers/ground.webp',
      psychic: '/wallpapers/psychic.webp',
      poison: '/wallpapers/poison.webp',
      rock: '/wallpapers/rock.webp',
      dark: '/wallpapers/dark.webp',
      fighting: '/wallpapers/arena.webp',
      // Adicione mais conforme necessário...
      default: '/wallpapers/default.jpg'
    }
    const wallpaper = typeWallpapers[lastPokemonType] || typeWallpapers.default
    document.body.style.backgroundImage = `url(${wallpaper})`
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = 'center'
    document.body.style.height = '100vh'

    return () => {
      document.body.style.backgroundImage = '' // Reset ao sair do componente
    }
  }, [])

  return (
    <div class="box-sobre">
      <div class="conteudo">
        <h2>Rota Dinâmica</h2>
        Para usar uma rota dinâmica basta digitar:
        <p>
          <code className="poke-code">/pokemon/:name</code>
        </p>
        <br />
        <p>Exemplo:</p>
        <code className="poke-code">/pokemon/pikachu</code>
        <br />
        <br />
        <img
          src="https://static.wikia.nocookie.net/pokeone/images/9/98/001Bulbasaur.gif"
          style={{ maxWidth: '100px', float: 'right' }}
        ></img>
        <p>Exemplo:</p>
        <code className="poke-code">/pokemon/bulbasaur</code>
      </div>
    </div>
  )
}

export default Rota
