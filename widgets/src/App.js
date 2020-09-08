import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is react",
    content: "react is a front end javascript framework",
  },
  {
    title: "Why use react",
    content: "react is a favoorite library",
  },
  {
    title: "How do you use react",
    content: "you use react by creating components",
  },
];

const options = [
  {
    label: "The color red",
    value: "Red",
  },
  {
    label: "The color Green",
    value: "Green",
  },
  {
    label: "The color Blue",
    value: "Blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <br />
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
