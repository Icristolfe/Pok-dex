import React, { useState } from 'react'
import { api } from './services/api'

import Pokebola from './assets/pokebola.png'

import {
  Body,
  Info,
  Loading,
  Result,
  InfoImage,
  Button
} from './style'

function App() {

  const [pokemon, setPokemon] = useState(null)
  const [error, setError] = useState(null)
  const [typedPokemon, setTypedPokemon] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event) => {
    setTypedPokemon(event.target.value)

  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!typedPokemon) {
      return
    }
    setIsLoading(true)
    try {
      const response = await api.get(`/pokemon/${typedPokemon}`)
      setPokemon(response.data)
      setError(null)
      setIsLoading(false)
    }
    catch (error) {
      setError('pokemon não encontrado')
      setIsLoading(false)
      setPokemon(null)
    }

  }


  return (
    <Body>
        <h1>Seja bem vindo à Pokedex!</h1>

        <p>Digite o nome de um pokemon ou Id para começar</p>

        <form onSubmit={handleSubmit}>

          <input
            value={typedPokemon}
            placeholder='Nome do pokemon/id'
            onChange={handleChange}
          />

          <Button type='submit'>
            {
              isLoading ? (<Loading />)
                : (<>
                  Buscar
                </>)
            }
            <img src={Pokebola} alt="pokebola" ></img>
          </Button>

        </form>

        <Result>
          {
            pokemon && (
              <div key={pokemon.id}>
                {isLoading ? (
                  error
                ) : (
                  <>
                    <InfoImage>
                      <h2>{pokemon.name}</h2>
                      <img src={pokemon.sprites['front_default']} alt={pokemon.name} />

                    </InfoImage>

                    <Info>
                      <span>
                        <strong>Height</strong>: {pokemon.height * 10}Cm
                      </span>

                      <span>
                        <strong>Weight</strong>: {pokemon.weight / 10}Kg
                      </span>

                      <span>
                        <strong>Type</strong>: {pokemon.types[0].type.name}
                      </span>

                      <span>
                        <strong>Id</strong> : {pokemon.id}
                      </span>



                    </Info>
                  </>
                )
                }

              </div>
            )
          }

        </Result>


      
    </Body>

  );
}

export default App;
