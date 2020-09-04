import React, { useState, useEffect } from "react";

function Search() {
  const [term, setTerm] = useState("");

  useEffect(() => {
    console.log("hello");
  }, []);

  useEffect(() => {
    console.log("hello");
  }, [term]);

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type='text'
            className='input'
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
