import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { Box } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Box>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer titulo="Tienda de Mascotas"/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer titulo=""/>}/>
            <Route path='/faqs' element={<></>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<ItemListContainer titulo="Tienda de Mascotas"/>}/>
          </Routes>
          
          {/* <ItemListContainer titulo="Tienda de Mascotas" ></ItemListContainer>
          <hr />
          <h2>Contador</h2>
          <ItemCount stock={5}></ItemCount> */}
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
