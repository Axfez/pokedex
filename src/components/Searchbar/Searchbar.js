import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { menu } from '../../assets'
import { useState } from 'react'

const Search = styled('div')({
    position: 'relative',
    borderRadius: '100px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '311px',
    height: '39px',
    marginBottom: '56px',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
});

const SearchIconWrapper = styled('div')({
    margin: ('0px 275px'),
    height: '100%',
    color: 'white',
    position: 'absolute',
    pointerEvents: 'fill',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        cursor: 'pointer',
    }
});

const StyledInputBase = styled(InputBase)({
    color: 'white',
    '& .MuiInputBase-input': {
        padding: ('8px, 8px, 8px, 0px'),
        paddingLeft: `calc(1em + 1px)}`,
        width: '50%',
        height: '100%',
    },
});

const Searchbar = (props) => {
    const { onSearch } = props
    const [search, setSearch] = useState('')

    const onChange = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length === 0) {
            onSearch(null)
        }
    }

    const onClick = async (e) => {
        onSearch(search)
    }

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginTop: '20px',
                marginBottom: '20px',
                width: '364px',
                height: '39px',
                padding: '0px',
                gap: '15px',
            }}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon onClick={onClick} />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search Pokemon"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={onChange}
                    />
                </Search>

                {/* menu img wrapper */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '39px',
                    gap: '0px',
                    height: '39px',
                    padding: '0px',
                    boxSizing: 'border-box',
                    borderRadius: '100px',
                    backgroundColor: 'rgba(255, 255, 255,0.2)',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    }
                }}>
                    <Box as='img' src={menu} sx={{
                        display: 'flex',
                        width: '29.5 px',
                        height: '29.5 px',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}></Box>
                </Box>
            </Box>
        </Box>
    )
}



export default Searchbar;