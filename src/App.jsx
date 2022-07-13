import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './logo.png';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <NavBar/>
      
      </header>
      <ItemListContainer greeting="¡Bienvenido a Little Paws!" />
    </div>
  );
}

export default App;
