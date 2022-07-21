import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './logo.png';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <NavBar/>
      <Routes>
        
        <Route index path="/" element={<ItemListContainer greeting="¡Bienvenido a Little Paws!" />}/>
        <Route index path="/detalle" element={<ItemDetailContainer/>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
