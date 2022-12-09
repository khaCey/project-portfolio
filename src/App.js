import './App.css';
import { useContext } from "react";
import Home from './Pages/HomePage/Home.js';
import Search from './Pages/SearchBar/SearchPage';
import { PageContext } from "./Pages/Variables.js";
function App() {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  return (
    <div>
        <Home />
    </div>
  );
}

export default App;
