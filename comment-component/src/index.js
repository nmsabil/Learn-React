import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import Card from "./Card";

const App = () => {
  let date = new Date().toDateString();
  return (
    <div className='ui container comments'>
      <Card
        comment={
          <CommentDetail author='Sam' date={date} post='Very nice post' />
        }
      />

      <Card
        comment={<CommentDetail author='Alex' date={date} post='damn good' />}
      />

      <Card
        comment={<CommentDetail author='Jane' date={date} post='Love it' />}
      />
      <Card comment='Are you Sure?' />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
