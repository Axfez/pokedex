import PropTypes from 'prop-types'
import Box from '@mui/material/Box'

const Pill = ({ content, type }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                padding: '1px 8px',
                width: '38px',
                height: '13px',
                border: '10px solid transparent',
                color: '#FFFFFF',
                backgroundColor: 'rgb(0, 0, 0, 0.2)',
                borderRadius: '100px'
            }}
        >
            {content}
        </Box>
    )
}

Pill.propTypes = {
    content: PropTypes.string.isRequired
}
Pill.defaultTypes = {
    content: '...'
}

export default Pill;