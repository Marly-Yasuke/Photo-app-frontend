import "./App.css";
import Navbar from "./components/Navbar";
import LogIn from "./pages/LoginPage.jsx";
import { Routes, Route } from "react-router-dom";
import Searchbar from "./components/Searchbar";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import UserProfile from "./pages/UserProfile";
// import data origin

function App() {
  return (
    <div className="App">
      <header>
        <Searchbar placeHolderSearch={"Search"} />
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="user/:username" element={<UserProfile />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
