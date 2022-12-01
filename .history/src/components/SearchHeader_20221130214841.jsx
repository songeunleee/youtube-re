import React, { useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`videos/${text}}`);
  };
  return (
    <header>
      <div>
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleChange}
        />
        <button>검색</button>
      </form>
    </header>
  );
}
