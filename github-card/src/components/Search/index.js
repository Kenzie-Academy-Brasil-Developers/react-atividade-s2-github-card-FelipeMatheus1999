import "./style.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const Search = ({ api, setApi }) => {
  const [text, setText] = useState("");

  // const schema = yup.object().shape({
  //   input: yup.string().required(),
  // });

  // const {
  //   register,
  //   formState: { errors },
  // } = useForm({ resolver: yupResolver(schema) });

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
        onChange={handleInput}
        // {...register("input")}
      />
      {/* {errors.input?.message("Digite o nome de usuário/repositório")} */}
      <button className="search__button" onClick={handleSearch}>
        submit
      </button>
    </div>
  );
};

export default Search;
