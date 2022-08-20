import './App.css';
import Nav from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <ItemListContainer titulo="Tienda de Mascotas Online" ></ItemListContainer>
    </div>
  );
}

export default App;
