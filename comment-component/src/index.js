import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  let date = new Date().toDateString();
  console.log(date);
  return (
    <div className='ui container comments'>
      <CommentDetail author='Sam' date={date} post='Very nice post' />
      <CommentDetail author='Alex' date={date} post='damn good' />
      <CommentDetail author='Jane' date={date} post='Love it' />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
