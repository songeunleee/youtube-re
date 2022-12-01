import React, { useState } from "react";

export default function Header() {
  const [input, setInput] = useState();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <header>
      <input onChange={handleChange} type="text" />
      <button>검색</button>
    </header>
  );
}
