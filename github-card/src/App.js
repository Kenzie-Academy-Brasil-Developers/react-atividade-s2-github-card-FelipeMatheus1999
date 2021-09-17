import "./App.css";
import Search from "./components/Search";
import Cards from "./components/Cards";
import { useState } from "react";

function App() {
  const [api, setApi] = useState([]);

  return (
    <div className="App">
      <Search api={api} setApi={setApi} />
      <div className="containerCard">
        <Cards api={api} />
      </div>
    </div>
  );
}

export default App;
