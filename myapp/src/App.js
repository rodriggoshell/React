import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  let imag = "https://url.gratis/3fFqbX";
  let name = 'Kakashi';
  return (
    <div className="App">
      <h1> :) </h1>
      <img src={imag} alt="teste" />
      <h3>Bem-Vindo {name}</h3>
      <Header />
    </div>
  );
}

export default App;
