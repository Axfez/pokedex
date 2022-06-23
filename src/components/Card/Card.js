import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Pill from '../Pill/Pill'
import { Typography } from '@mui/material'



const Card = (props) => {
    const { name, image, type } = props

    return (
        // Card
        <Box
            sx={{
                width: '177px',
                height: '127px',
                position: 'relative',
                backgroundColor: '#49D0B0',
                borderRadius: '15px',
                padding: '10px',
                boxSizing: 'border-box',
                overflow: 'hidden',
            }}
        >
            <Box>
                <Typography sx={{
                    textTransform: 'capitalize',
                    fontSize: '20px',
                    fontWeight: '800',
                    fontFamily: 'Nunito',
                }}>
                    {name}
                </Typography>

            </Box>
            {/* pill container */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '5px',
                position: 'absolute',
                marginTop: '3px',
                width: '41px',
                height: '31px',
            }}>
                <Pill type={type[0]} />
                {type[1] ? <Pill type={type[1]} /> : null}
            </Box>
            {/* background sphere */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                width: '115px',
                height: '115px',
                marginLeft: '65px',
                marginTop: '-5px',
                borderRadius: '100%',
                background: 'linear-gradient(315.68deg, rgba(0, 0, 0, 0.2) 6.99%, rgba(0, 0, 0, 0) 80.04%)'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '5px',
                    marginBottom: '10px',
                    marginRight: '15px',
                    boxSizing: 'border-box',
                    height: '80px',
                    width: '80px',
                }}>
                    <Box as="img" src={image} alt={name} sx={{
                        width: '80px',
                        height: '80px',
                    }}
                    />

                </Box>
            </Box>
        </Box>
    )
}

Card.propTypes = {
    type: PropTypes.array.isRequired
}
Card.defaultTypes = {
    type: '...'
}

export default Card;