import React from 'react'
import Box from '@mui/material/Box'
import { Card } from '../components'

const Pokemonload = (props) => {
    const { pokemons } = props
    return (
        <Box sx={{
            display: 'Grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            justifyContent: 'start',
            width: '364px',
            padding: '0px',
            gap: '10px',
        }}>

            {pokemons.map((p, i) => {
                return (
                    <Card key={i}
                        name={p.name}
                        image={p.sprites.other.dream_world.front_default}
                        type={p.types.map(t => { return (t.type.name) })} />
                )
            })
            }

        </Box>

    )
}

export default Pokemonload

