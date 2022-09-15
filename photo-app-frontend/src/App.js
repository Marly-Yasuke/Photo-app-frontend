import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
// import data origin

function App() {
  return (
    <div className="App">
     <header>
     {/* Need to find where to import the data from */}
     <Searchbar placeHolderSearch={"Search"} data={""}/>
      <Navbar/>
     </header>
    </div>
  );
}

export default App;
