import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Pill from '../Pill/Pill'
// por que no funciona el importar en default? 

const Card = () => {
    return (
        <Box
            sx={{
                width: '177px',
                height: '127px',
                position: 'relative',
                backgroundColor: '#49D0B0',
                borderRadius: '15px',
                padding: '10px',
                boxSizing: 'border-box',
            }}
        >
            <Pill />
        </Box>
    )
}

Card.propTypes = {
    content: PropTypes.string.isRequired
}
Card.defaultTypes = {
    content: '...'
}

export default Card;