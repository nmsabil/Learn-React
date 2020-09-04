import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    const timeOutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className='item' key={result.pageid}>
        <div className='right floated content'>
          <a
            target='_blank'
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className='ui button'
          >
            Read More
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
}

export default Search;
