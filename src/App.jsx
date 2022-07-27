import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <NavBar/>
      <Routes>
        
        <Route index path="/" element={<ItemListContainer greeting="¡Bienvenido a Little Paws!" />}/>
        <Route index path="/categoria/:categoriaId" element={<ItemListContainer greeting="¡Bienvenido a Little Paws!" />}/>
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
