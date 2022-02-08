import './App.css';
import ProfileCard from './components/Card'
import './App.css'
import CarouselList from "./components/CarouselList";
import CarouselWithoutControls from "./components/CarouselWithoutControls";

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <h1 style={{marginTop:'30px'}}>Martin Rooter King</h1>
          <h4>SQA MT/MA 15</h4>
      </header>
          <ProfileCard/>

    </div>
  );
}



export default App;
