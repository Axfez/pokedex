import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Pill from '../Pill/Pill'


const Card = ({ type, name }) => {
    return (
        <Box
            sx={{
                width: '177px',
                height: '127px',
                backgroundColor: '#49D0B0',
                borderRadius: '15px',
                padding: '10px',
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