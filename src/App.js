import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, logginUser, decrement } from "./redux/actions/index";

function App() {
  const result = useSelector((state) => state.math);
  const loggin = useSelector((state) => state.loggin);
  const dispatch = useDispatch();

  return (
    <div className="App" style={{ textAlign: "center" }}>
      {loggin ? (
        <div>
          <button onClick={() => dispatch(decrement())}> Decrement</button>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <h2>{result}</h2>
          <button onClick={() => dispatch(logginUser())}> Sign off</button>
        </div>
      ) : (
        <button onClick={() => dispatch(logginUser())}> Log in</button>
      )}
    </div>
  );
}

export default App;
