import { Box } from '@mui/material';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Header/>
      <Box style={{ marginTop: 65 }} >
        <Home/>
      </Box>
    </>
  );
}

export default App;
