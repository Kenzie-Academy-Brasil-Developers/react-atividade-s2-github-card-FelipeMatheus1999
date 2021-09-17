import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search";

function App() {
  const [gitApi, setGitApi] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/octocat/hello-world")
      .then((res) => res.json())
      .then((res) => setGitApi(res))
      .catch((error) => error);
  }, []);

  return (
    <div className="App">
      <Search  gitApi={gitApi}/>
    </div>
  );
}

export default App;
