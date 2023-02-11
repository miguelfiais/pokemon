import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container } from './styles';

const Pokemon = () => {

  const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

  const {name} = useParams()
  const [pokemon, setPokemon] = useState({})
  const [avatar, setAvatar] = useState("")

  useEffect(() => {
    const getPokemon = async () => {
      const {data} = await axios.get(`${baseUrl}${name}`)
      setAvatar(data.sprites.other.dream_world.front_default)
      setPokemon(data)
      await axios.get(data.species.url).then(response => axios.get(response.data.evolution_chain.url).then(response => {
        axios.get(`${baseUrl}${response.data.chain.evolves_to[0].evolves_to[0].species.name}`).then(response => console.log(response.data))
      }))
    }
    getPokemon()
  }, [])

  return (
    <Container>
      <img src={avatar} alt={pokemon.name} />
      <p>{pokemon.name}</p>
      {
        pokemon.stats && pokemon.stats.map(item => (
          <div key={uuidv4()}>
            <p>{item.stat.name}: <span>{item.base_stat}</span></p>
          </div>
        ))
      }
    </Container>
  )
}

export default Pokemon