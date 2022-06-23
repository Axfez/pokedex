import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import './App.css';
import { Searchbar, getPokemon, getPokemonData, searchPokemon } from './components'
import { useEffect, useState } from 'react'
import Pokemonload from './components/Pokemonload';


function App() {

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [search, setSearch] = useState(false)

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemon()
      console.log(data.results)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
    } catch (error) { }
  }

  useEffect(() => {
    if (!search) {
      fetchPokemons()
    }
  }, [])

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons()
    }
    setLoading(true)
    setNotFound(false)
    setSearch(true)
    const results = await searchPokemon(pokemon)
    if (!results) {
      setNotFound(true)
      setLoading(false)
      return
    } else {
      setPokemons([results])
    }
    setLoading(false)
    setSearch(false)
  }


  return (

    <Box sx={{
      display: 'flex',
      position: 'absolute',
      boxSizing: 'border-box',
      my: '100px',
      mx: '230px',
      padding: ('0px 13px'),
      flexDirection: 'column',
      width: '390px',
      height: '800px',
      backgroundColor: '#1E1E1E',
    }}>
      <Typography variant="h3" sx={{
        color: '#FFFFFF',
        marginTop: '14px',
        marginRight: '218px',
        height: '100px',
        width: '100px',
      }}>
        Pokedex
      </Typography>
      <Searchbar onSearch={onSearch} />
      {notFound ? (
        <Typography variant='h3' sx={{ color: '#FFFFFF' }}>
          Pokemon not found
        </Typography>) :
        (<Pokemonload
          pokemons={pokemons}
          loading={loading}
        />
        )}


    </Box>

  );

}
export default App;
