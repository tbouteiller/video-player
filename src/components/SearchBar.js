import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [text, setText] = useState("");

  const onInputChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(text);
  };

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light py-4 shadow-sm">
      <form onSubmit={onSubmit} className="w-100">
        <div className="d-flex justify-content-center">
          <div className="d-flex justify-content-center align-items-center me-3">
            <label className="navbar-brand">Video Player</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#B91C1C"
              class="bi bi-play-btn-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
          </div>
          <input
            className="w-50"
            type="text"
            onChange={onInputChange}
            value={text}
            placeholder="Search..."
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
