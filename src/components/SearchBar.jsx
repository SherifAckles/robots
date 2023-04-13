import React, { useState } from "react";

function SearchBar() {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Search term: ${term}, type: ${typeof term}`);
    typeof term !== "string" || isNaN(term)
      ? fieldReset()
      : alert("Please enter a valid search term");
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const fieldReset = () => {
    setTerm("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={term}
          type="text"
          placeholder="Search a robot"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
