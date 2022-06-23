import PropTypes from 'prop-types'
import Box from '@mui/material/Box'

const Pill = (props) => {
    const { type } = props
    return (
        <Box
            sx={{
                display: 'flex',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                padding: '1px 8px',
                width: '38px',
                height: '13px',
                border: '1px solid transparent',
                color: '#FFFFFF',
                backgroundColor: 'rgb(0, 0, 0, 0.27)',
                borderRadius: '100px',
                boxSizing: 'border-box',
                fontSize: '8px',
                fontWeight: '700',
            }}
        >
            {type}
        </Box>
    )
}

Pill.propTypes = {
    type: PropTypes.string.isRequired
}
Pill.defaultTypes = {
    type: '...'
}

export default Pill;