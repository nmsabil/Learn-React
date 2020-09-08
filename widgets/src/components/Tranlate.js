// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Dutch",
    value: "nl",
  },
];

function Tranlate() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState(options[0]);
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label> Enter Text </label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <Dropdown
        label='Select a languange'
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className='ui header'>OutPut</h3>
      <Convert language={language} text={text} />
    </div>
  );
}

export default Tranlate;
