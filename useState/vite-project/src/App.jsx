import { useState } from "react"
import "./App.css"
function App() {
  const [counter, setCounter ]= useState(0);
  const [inputNum, setInputNum ]= useState(1);

  function increment () {
    setCounter((pre) => {
      const newCounter = pre + parseInt(inputNum);
      return newCounter > 100 ? 100 : newCounter;
    });
  }

  function decrement () {
    setCounter((pre) => {
      const newCounter = pre - parseInt(inputNum);
      return newCounter < 0 ? 0 : newCounter;
    });
  }

  function reset () {
    setCounter(0);
  }
  function handleInput (e) {
    setInputNum(e.target.value);
  }
  return (
    <>
      <div className="container">
        <h1>{counter}</h1>
        <input type="number" name="step" id="" onChange={handleInput} value={inputNum}/>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App