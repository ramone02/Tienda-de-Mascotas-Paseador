import './App.css';
import Nav from './components/NavBar';
import { Button, useColorModeValue } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Button mt={5} bg={useColorModeValue("teal", "teal")}>
        <h1>Proyecto E-Commerce con React & Chakra UI</h1>
      </Button>
    </div>
  );
}

export default App;
