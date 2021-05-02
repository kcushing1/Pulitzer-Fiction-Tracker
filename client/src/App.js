import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <p>app here</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
