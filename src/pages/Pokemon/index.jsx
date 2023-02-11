import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { CardEvolution, Container, ContainerEvolution, Div, MainPokemon, Modal, Nav, Status, StatusEvolution } from './styles';
import { GrFormClose } from "react-icons/gr";

const Pokemon = () => {

  const navigate = useNavigate()

  const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

  const {name} = useParams()
  const [pokemon, setPokemon] = useState({})
  const [avatar, setAvatar] = useState("")
  const [evolution, setEvolution] = useState()
  const [avatarEvolution, setAvatarEvolution] = useState("")
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const getPokemon = async () => {
      const {data} = await axios.get(`${baseUrl}${name}`)
      setAvatar(data.sprites.other.dream_world.front_default)
      setPokemon(data)
      await axios.get(data.species.url).then(response => axios.get(response.data.evolution_chain.url).then(response => {
        axios.get(`${baseUrl}${response.data.chain.evolves_to[0].evolves_to[0].species.name}`).then(response => {
          setEvolution(response.data)
          setAvatarEvolution(response.data.sprites.other.dream_world.front_default)
        })
      }))
    }
    getPokemon()
  }, [])

  return (
    <Container>
      <Nav>
        <button onClick={() => navigate('/')}>Voltar</button>
      </Nav>
      <Div>
        <MainPokemon>
          <div>
            <img src={avatar} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
          {
            pokemon.stats && (
              <Status>
                <h2>Status</h2>
                {
                  pokemon.stats.map(item => (
                    <li key={uuidv4()}>{item.stat.name}: <span>{item.base_stat}</span></li>
                  ))
                }
              </Status>
            )
          }
        </MainPokemon>
        {
          evolution ? (
            <>
              <h2 style={{margin: '40px 0 10px'}}>Evolution Chain</h2>
              <ContainerEvolution>
                <CardEvolution onClick={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                  <img src={avatarEvolution} alt="pokemon-evolution" />
                  <p>{evolution.name}</p>
                </CardEvolution>
                <Modal isOpen={modalOpen}>
                  <button onClick={() => setModalOpen(!modalOpen)}><GrFormClose /></button>
                    <div>
                      <img src={avatarEvolution} alt={evolution.name} />
                      <p>{evolution.name}</p>
                    </div>
                    {
                      evolution.stats && (
                        <StatusEvolution>
                          <h2>Status</h2>
                          {
                            evolution.stats.map(item => (
                              <li key={uuidv4()}>{item.stat.name}: <span>{item.base_stat}</span></li>
                            ))
                          }
                        </StatusEvolution>
                      )
                    }
                </Modal>
              </ContainerEvolution>
            </>
          ) : (
            <h2 style={{marginTop: '20px'}}>No Evolution</h2>
          )
        }
      </Div>
    </Container>
  )
}

export default Pokemon