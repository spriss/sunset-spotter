import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Destinations from './components/Destinations/Destinations';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sunset Spotter</h1>
      </header>
        <main>
          <Forecast />
        </main>
          <Destinations />
        <footer>
          Made by Sebastian Priss
        </footer>
    </div>
  );
}

export default App;
