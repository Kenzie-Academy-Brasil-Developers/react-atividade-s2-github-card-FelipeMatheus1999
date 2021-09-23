import "./style.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const Search = ({ api, setApi }) => {
  const [text, setText] = useState("");

  const schema = yup.object().shape({
    input: yup.string().required("Digite uma repositório/tecnologia"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSearch = () => {
    fetch(`https://api.github.com/repos/${text}`)
      .then((res) => res.json())
      .then((res) => setApi([...api, res]))
      .catch((error) => error);
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="search..."
        {...register("input")}
        onChange={handleInput}
      />
      <button className="search__button" onClick={handleSearch}>
        submit
      </button>
    </div>
  );
};

export default Search;
