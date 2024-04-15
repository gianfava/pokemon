import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'

function Pokemon() {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const [imageKey, setImageKey] = useState(0)
  const [backgroundStyle, setBackgroundStyle] = useState({})

  // Mapeamento de tipos de Pokémon para cores
  const typeColors = {
    bug: '#26de81',
    dragon: '#e5707e',
    electric: '#fed330',
    fairy: '#FF0069',
    fighting: '#30336b',
    fire: '#f0932b',
    flying: '#81ecec',
    grass: '#00b894',
    ground: '#EFB549',
    ghost: '#a55eea',
    ice: '#74b9ff',
    normal: '#157f63',
    poison: '#6c5ce7',
    psychic: '#a29bfe',
    rock: '#54436b',
    steel: '#4d6b6d',
    water: '#0190FF'
  }

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
  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        )
        const data = await response.json()
        setPokemon(data)
      } catch (error) {
        console.error('Failed to fetch Pokémon:', error)
        setPokemon(null)
      }
    }

    if (name) {
      fetchPokemonData()
    }
  }, [name])

  useEffect(() => {
    if (pokemon && pokemon.types && pokemon.types.length > 0) {
      const type = pokemon.types[0].type.name
      const wallpaper = typeWallpapers[type] || typeWallpapers.default
      // Define o wallpaper no body
      document.body.style.backgroundImage = `url(${wallpaper})`
      document.body.style.backgroundSize = 'cover'
      document.body.style.backgroundPosition = 'center center'
      document.body.style.backgroundRepeat = 'no-repeat'
    }
    // Quando o componente é desmontado ou o tipo de Pokémon muda, resete o fundo
    return () => {
      document.body.style.background = 'none'
    }
  }, [pokemon])

  const getPokemonTypeColor = () => {
    if (pokemon && pokemon.types && pokemon.types.length > 0) {
      const type = pokemon.types[0].type.name
      return typeColors[type] || 'black' // Cor padrão
    }
    return 'black'
  }

  const getPokemonTypeGradient = () => {
    if (pokemon && pokemon.types && pokemon.types.length > 0) {
      const type = pokemon.types[0].type.name
      const color = typeColors[type] || 'black'
      return `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`
    }
    return 'radial-gradient(circle at 50% 0%, black 36%, #ffffff 36%)'
  }

  return (
    <div className="container">
      {pokemon && (
        <div className="content">
          <div
            className="card"
            style={{ background: getPokemonTypeGradient() }}
          >
            <div
              className="poke-name"
              style={{ backgroundColor: getPokemonTypeColor() }}
            >
              {pokemon.name}
            </div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
            />
            <div className="ribbon">Nº {pokemon.id}</div>
            <div className="stats">
              <span>Peso: {pokemon.weight} kg</span>
              <span>Altura: {pokemon.height} m</span>
            </div>
            <div
              className="poke-type"
              style={{ backgroundColor: getPokemonTypeColor() }}
            >
              {pokemon.types[0].type.name}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Pokemon
