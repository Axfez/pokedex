import Box from '@mui/material/Box'
import './App.css';
import { Pill, Card, Searchbar } from './components'

function App() {
  return (
    <Box sx={{
      marginTop: '184px',
      mx: '13px',
      width: '364px',
      height: 'auto',
    }}>
      <Searchbar />
      <Card>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#000000',
          position: 'fixed',
          width: '41px',
          height: '31px',
          marginLeft: '10px',
          marginTop: '39px',
        }}>
          <Pill />
        </Box>
      </Card>
    </Box>
  );
}

export default App;
