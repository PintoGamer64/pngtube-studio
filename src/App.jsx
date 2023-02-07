//Css
import './App.css';

//Componenmts
import TopWindow from './components/topWindow/topWindow';

function App() {

  window.pngtubeProcess.BackgroundImage((responce) => {
    console.log(responce)
  });

  return (
    <div className="App">
      <TopWindow />
    </div>
  );
}

export default App;
