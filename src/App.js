import './App.css';
import Banner from './components/Banner';
import TextField from './components/TextField';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <TextField label="Nome" placeholder="Digite seu nome..." />
      <TextField label="Cargo" placeholder="Digite seu Cargo..." />
      <TextField label="Imagem" placeholder="Digire o endereço da imagem..." />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
