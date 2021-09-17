import "./style.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const Search = ({ gitApi }) => {
  const [text, setText] = useState("");

  const handleInput = (e) => {
      setText(e.target.value)
      console.log(text)
  }

  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="search..." onChange={handleInput}></input>
      <button className="search__button">submit</button>
    </div>
  );
};

export default Search;
