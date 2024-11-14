import React, { useEffect } from 'react'

function Sobre() {
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
        <h2>Sobre o site- - TESTE</h2>
        <p>
          Esta página é uma Pokedex, como um atividade avaliativa da FATEC
          Franca WEB III, onde o usuário pode pesquisar qualquer Pokémon
          utilizando a API oficial do site{' '}
          <a
            href="https://pokeapi.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            PokeAPI.co
          </a>
          .
        </p>
        <h2>O que é isto?</h2>
        <p>
          Este site fornece uma interface de API RESTful para objetos altamente
          detalhados construídos a partir de milhares de linhas de dados
          relacionados a Pokémon.
        </p>
        <div>
          <img
            src="https://i.pinimg.com/originals/f9/6e/7d/f96e7d2ca7accfb8b6185859afee09b3.gif"
            style={{ maxWidth: '100px', float: 'right' }}
          ></img>
        </div>
        <h2>Tecnologias</h2>
        <p>React + API</p>
        <p>
          Uma API RESTful é uma API que segue um conjunto de convenções soltas
          baseadas em verbos HTTP, erros e hiperlinks.
        </p>
      </div>
    </div>
  )
}

export default Sobre
