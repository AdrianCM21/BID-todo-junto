import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonCard firstName="Doe" lastName="Jane"  hairColor="Black"/>
        <PersonCard firstName="Smith" lastName="John" hairColor="Brown"/>
      </header>
    </div>
  );
}

export default App;
