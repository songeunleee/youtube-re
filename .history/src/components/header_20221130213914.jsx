import React, { useState } from "react";

export default function Header() {
  const [input, setInput] = useState();
  return (
    <header>
      <input type="text" />
      <button>검색</button>
    </header>
  );
}
