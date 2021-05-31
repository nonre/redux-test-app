import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const loggedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment(1))}>+</button>
        <button onClick={() => dispatch(decrement(1))}>-</button>

        {loggedIn ? <h3>Information for users currently logged in</h3> : ""}
    </div>
  );
}

export default App;
