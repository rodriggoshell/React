import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Fragments from './components/Fragments';

function App() {
  let imag = "https://url.gratis/3fFqbX";
  let name = 'Kakashi';
  return (
    <div className="App">
      <h1> :) </h1>
      <img src={imag} alt="teste" />
      <h3>Bem-Vindo {name}</h3>
      <Header />
      <Fragments />   
    </div>
  );
}

export default App;
