import logo from "./logo.svg";
import "./App.css";
import AboutMe from "./Components/Pages/AboutMe";
import MyTown from "./Components/Pages/MyTown";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar1 }from "./Components/Navbar1";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar1 />
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/My-town" element={<MyTown />}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
