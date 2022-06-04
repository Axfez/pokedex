import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import { styled, alpha } from '@mui/material/styles'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: (theme.shape.borderRadius, 100),
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '275.62px',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 30),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'fill',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(2)})`,
        width: 'auto',
    },
}));

const Searchbar = ({ placeholder }) => {
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

Searchbar.defaultTypes = {
    placeholder: '...'
}


export default Searchbar;