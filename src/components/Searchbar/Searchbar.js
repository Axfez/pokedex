import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import { styled } from '@mui/material/styles'

const Search = styled('div')({
    position: 'relative',
    borderRadius: '100px',
    backgroundColor: 'white',
    width: '311px',
    opacity: 0.20,
    marginBottom: '10px',
    '&:hover': {
        backgroundColor: 'white',
        opacity: 0.30,
    },
});

const SearchIconWrapper = styled('div')({
    margin: ('0px 255px'),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'fill',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const StyledInputBase = styled(InputBase)({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: ('8px, 8px, 8px, 0px'),
        paddingLeft: `calc(1em + 1px)})`,
        width: '100%'
    },
});

const Searchbar = () => {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search Pokemon"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    )
}



export default Searchbar;