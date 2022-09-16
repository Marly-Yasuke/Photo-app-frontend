import './App.css';
import Navbar from './components/Navbar';
import LogIn from "./pages/LoginPage.jsx";
import { Routes, Route } from "react-router-dom"
import Searchbar from './components/Searchbar';
// import data origin

function App() {
  return (
    <div className="App">
     <header>
      <Searchbar placeHolderSearch={"Search"}/>
      <Navbar/>
     </header>
     <Routes>
        <Route path="/" element={<LogIn />} />
     </Routes>
    </div>
  );
}

export default App;
