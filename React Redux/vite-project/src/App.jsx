import {useSelector, useDispatch} from 'react-redux'
import './App.css';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  function incHandler () {
    dispatch({ type : "increment"});
  }
  function decHandler () {
    dispatch({ type : "decrement"});
  }
  function IncrementBy10 () {
    dispatch({ type : "increase", num : 10});
  }
  return (
    <div className="counter-container">
      <h1>Counter: {counter}</h1>
      <button onClick={incHandler}>Increment</button>
      <button onClick={decHandler}>Decrement</button>
      <button onClick={IncrementBy10}>IncrementBy10</button>
    </div>
  );
};

export default App;