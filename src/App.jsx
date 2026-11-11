import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Main name="Ростислав" age={18} group="ІПЗ" />
    </div>
  );
}

export default App;