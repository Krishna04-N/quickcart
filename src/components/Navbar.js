import React, { useState } from 'react';

function Navbar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-4" href="/">🛒 QuickCart</a>

        <form className="d-flex ms-auto w-50" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search for products"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
