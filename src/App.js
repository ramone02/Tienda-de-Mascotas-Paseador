import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { Box } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Box>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer titulo="Tienda de Mascotas" />} />
              <Route path='/category/:categoryId' element={<ItemListContainer titulo="" />} />
              <Route path='/faqs' element={<></>} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartContainer />}></Route>
              <Route path='*' element={<ItemListContainer titulo="Tienda de Mascotas" />} />
            </Routes>
          </Box>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
