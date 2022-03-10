import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Destinations from './components/Destinations/Destinations';
import { React, useState } from 'react';


function App() {
  
  let [showCards, setShowCards] = useState(0)
  function setCardVisibility() {
    setShowCards('1');
  }
  console.log(showCards)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sunset Spotter</h1>
      </header>
        <main>
          <Forecast cardView={setCardVisibility}/>
        </main>
          <Destinations cardView={showCards}/>
        <footer>
          Made by Sebastian Priss
        </footer>
    </div>
  );
}

export default App;
