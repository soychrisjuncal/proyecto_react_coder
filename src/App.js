import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Tienda Online en Construcción.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/kiwi.boards/?hl=es-la"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita Nuestras Redes
        </a>
      </header>
    </div>
  );
}

export default App;
