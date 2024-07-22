import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const sumClick = () => {
    if (count < 10) {
      setCount(count + 1 );
    } 
  };

  const subClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="container d-flex mt-3">
      <div>
        <h1>Count : {count}</h1>
      </div>
      <div className=" ms-3 d-flex ">
        <span className="btn btn-primary me-2  " onClick={sumClick}>
          Increase
        </span>
        <span className="btn btn-danger" onClick={subClick}>
          Decrease
        </span>
      </div>
    </div>
  );
};
export default App;