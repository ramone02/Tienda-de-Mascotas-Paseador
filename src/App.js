import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Box>
        <NavBar />
        <ItemListContainer titulo="Tienda de Mascotas" ></ItemListContainer>
        <hr></hr>
        <h2>Contador</h2>
        <ItemCount stock={5}></ItemCount>
      </Box>      
    </div>
  );
}

export default App;
