import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './logo.png';
import NavBar from './components/NavBar/NavBar';
//hola
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <NavBar></NavBar>
      </header>
      
    </div>
  );
}

export default App;
