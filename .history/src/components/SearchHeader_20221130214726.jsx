import React, { useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`videos/${input}`);
  };
  return (
    <header>
      <div>
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="Search..." />
        <button>검색</button>
      </form>
    </header>
  );
}
