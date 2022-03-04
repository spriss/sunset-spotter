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

        <body className='destinations'>
          <div className= "card">
            <div className='card-img'>
              <img src="https://www.w3schools.com/howto/img_avatar.png"></img>
            </div>
            <div class="card-body">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
              <button className="Button" type="submit">Get Forecast</button>
            </div>
          </div>

          <div className= "card">
            <div className='card-img'>
              <img src="https://www.w3schools.com/howto/img_avatar.png"></img>
            </div>
            <div class="card-body">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </div>

          <div className= "card">
            <div className='card-img'>
              <img src="https://www.w3schools.com/howto/img_avatar.png"></img>
            </div>
            <div class="card-body">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </div>

        </body>
        <footer>
          Made by Sebastian Priss
        </footer>
    </div>
  );
}

export default App;
