import './App.css';
import Nav from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <ItemListContainer titulo="Tienda de Mascotas" ></ItemListContainer>
      <hr></hr>
      <h2>Contador</h2>
      <ItemCount stock={5}></ItemCount>
    </div>
  );
}

export default App;
