import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const query = input.trim();
    if (!query) return;
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="searchInput"
        type="text"
        placeholder="Buscar serie..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
