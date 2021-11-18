import "./style.css";
import { useState } from "react";
import { toast } from "react-toastify";

const Search = ({ api, setApi }) => {
  const [text, setText] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSearch = () => {
    fetch(`https://api.github.com/repos/${text}`)
      .then((res) => res.json())
      .then((res) => {
        setApi([...api, res]);
        setInputError(false);
      })
      .catch((error) => {
        console.log(error);
        setInputError(true);
        toast.warning("Repositório não encontrado");
      });
  };

  return (
    <div className="search">
      <input
        style={
          inputError
            ? { backgroundColor: "#f4acb7" }
            : { backgroundColor: "#f1f1f1" }
        }
        className="search__input"
        type="text"
        placeholder="search..."
        onChange={handleInput}
      />
      <button className="search__button" onClick={handleSearch}>
        submit
      </button>
    </div>
  );
};

export default Search;
