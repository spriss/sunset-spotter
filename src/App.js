import './App.css';
import Forecast from "./components/Forecast/Forecast";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sunset Spotter</h1>
      </header>
        <main>
          <Forecast />
        </main>
        <footer>
          Sebastian Priss
        </footer>
    </div>
  );
}

export default App;
