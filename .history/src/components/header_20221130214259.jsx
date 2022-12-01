import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [input, setInput] = useState();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventdefault();
    navigate(`videos/${input}`);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" />

        <button>검색</button>
      </form>
    </header>
  );
}
