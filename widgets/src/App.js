import React from "react";
import Accordion from "./components/Accordion";

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

function App() {
  return (
    <div>
      <br />
      <Accordion items={items} />
    </div>
  );
}

export default App;
