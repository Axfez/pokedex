import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import './App.css';
import { Pill, Card, Searchbar } from './components'

function App() {
  return (
    <Box sx={{
      display: 'flex',
      position: 'absolute',
      my: '100px',
      mx: '130px',
      padding: ('0px 13px 0px 13px'),
      flexDirection: 'column',
      width: '390px',
      height: 'auto',
      backgroundColor: 'darkgrey',
    }}>
      <Typography variant="h3" sx={{
        marginTop: '14px',
        marginRight: '218px',
      }}>
        Pokedex
      </Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: '20px',
        width: '364px',
        padding: '0px',
        gap: '15px',
      }}>
        <Searchbar />
        <Button>ASD</Button>
      </Box>

      <Box sx={{
        display: 'Grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        justifyContent: 'start',

        width: '364px',
        padding: '0px',
        gap: '10px',
      }}>
        <Card />
        <Card />
      </Box>
    </Box>
  );
}

export default App;
