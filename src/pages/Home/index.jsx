import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import logo from "../../assets/logo.png"
import pokemonsImg from "../../assets/pokemons.png"

import { Container } from './styles'

const Home = () => {
  const navigate = useNavigate()

  const baseUrl = "https://pokeapi.co/api/v2/pokemon/"
  const [search, setSearch] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    try{
      if(search){
        const {data} = await axios.get(`${baseUrl}${search.toLowerCase()}`)
        navigate(`/pokemon/${data.name}`)
      }
      else{
        toast.warn("Digite o nome do Pokémon")
      }
    } catch (error) {
      toast.error(`Não encontrei o pokémon ${search}`)
      setSearch("")
    }
  }

  return (
    <Container>
      <img src={logo} alt="logo do pokemon" />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite o nome do Pokémon' onChange={(e) => setSearch(e.target.value)} value={search}/>
        <button type="submit">Buscar</button>
      </form>
      <img src={pokemonsImg} alt="pokemons" />
    </Container>
  )
}

export default Home