import logo from './imagens/logo.png'
import './App.css';
import Button from './componentes/Button';

function App() {

  return (
    <div className="container">
    <h1>Aprenda React na Labenu!</h1>
    <div>
      <div>
        <img className="Logo" src= {logo} alt="logo"/>
      </div>
      <div>
        <a href="https://labenu.com.br">Site da Labenu</a>
      </div>
      <div>
        <Button/>
      </div>
    </div>
  </div>
  );
}

export default App;
