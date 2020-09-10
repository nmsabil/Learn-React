import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Tranlate";

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

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};
const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};
const showDropdown = (selected, setSelected) => {
  if (window.location.pathname === "/dropdown") {
    return (
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
        label={"Choose a color"}
      />
    );
  }
};
const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <br />
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> */}
      {/* <Translate /> */}
      {showAccordion()}
      {showList()}
      {showDropdown(selected, setSelected)}
      {showTranslate()}
    </div>
  );
};
