import React, { useState, useEffect, useRef } from 'react'

function Home() {
  const [pokemon, setPokemon] = useState(null)
  const [search, setSearch] = useState('')
  const [imageKey, setImageKey] = useState(0)

  const backgroundRef = useRef(null) // Referência para o elemento de fundo

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
    handleRandomPokemon() // Chama um Pokémon aleatório ao carregar
  }, [])

  useEffect(() => {
    if (pokemon) {
      const type = pokemon.types[0].type.name
      const wallpaper = typeWallpapers[type] || typeWallpapers.default
      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundImage = `url(${wallpaper})`
      }
    }
  }, [pokemon]) // Dependência no estado pokemon

  function loadAPI(pokemonName) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setPokemon(json)
        setSearch(json.name)
        setImageKey(prevKey => prevKey + 1)

        // Salvar o tipo do Pokémon no localStorage
        const pokemonType = json.types[0].type.name
        localStorage.setItem('lastPokemonType', pokemonType)
      })
      .catch(err => {
        console.log(err)
        setPokemon(null) // Lidar com erros ou pokémons não encontrados
      })
  }

  // Função para obter a cor com base no tipo do Pokémon
  const getPokemonTypeColor = () => {
    if (pokemon && pokemon.types && pokemon.types.length > 0) {
      const type = pokemon.types[0].type.name
      return typeColors[type] || 'black' // Retorna 'black' como cor padrão se o tipo não estiver mapeado
    }
    return 'black' // Cor padrão quando não há informação de tipo
  }

  const getPokemonTypeGradient = () => {
    if (pokemon && pokemon.types && pokemon.types.length > 0) {
      const type = pokemon.types[0].type.name
      const color = typeColors[type] || 'black'
      return `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`
    }
    return 'radial-gradient(circle at 50% 0%, black 36%, #ffffff 36%)'
  }

  function handleClick(pokemonName) {
    setSearch(pokemonName) // Update the input field with the selected Pokemon name
    loadAPI(pokemonName) // Fetch the Pokemon data
  }

  function handleRandomPokemon() {
    const randomId = Math.floor(Math.random() * 649) + 1 // Gera um ID aleatório entre 1 e 649
    loadAPI(randomId)
  }
// funcao
  return (
    <div className="container">
      <div className="background-fade" ref={backgroundRef}></div>{' '}
      {/* Elemento de fundo para a animação */}
      <div>
        <input
          type="text"
          placeholder="Digite o nome do pokemon"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button onClick={() => loadAPI(search)}>Buscar</button>
        <button onClick={handleRandomPokemon}>Carregar Aleatório</button>
      </div>
      <div id="dica">
        <ul>
          {' '}
          Exemplos:
          <li onClick={() => handleClick('metapod')}>metapod</li>
          <li onClick={() => handleClick('charizard')}>charizard</li>
          <li onClick={() => handleClick('blastoise')}>blastoise</li>
          <li onClick={() => handleClick('pikachu')}>pikachu</li>
          <li onClick={() => handleClick('onix')}>onix</li>
          <li onClick={() => handleClick('mew')}>mew</li>
          <li onClick={() => handleClick('gengar')}>gengar</li>
          <li onClick={() => handleClick('dragonair')}>dragonair</li>
        </ul>
      </div>
      {/* <div id="elemental">
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        <ul>
          <li>Dados</li>
          <li>Name: {pokemon.name} </li>
        </ul>
      </div> */}
      {/* Mostrar informações do Pokémon, se disponível */}
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

            {/* <img src={pokemon.sprites?.front_default} alt={pokemon.name} /> */}
            <img
              key={imageKey}
              className="zoom-out"
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

export default Home
