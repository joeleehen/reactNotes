import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import useConsoleLog from "./useConsoleLog";

// we write custom hooks to extract repeated functionality across components or Apps
function App() {
  const [count, setCount] = useState(0);
  // our custom hook! write a variable name to console when the variable changes
  useConsoleLog(count);

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Add One</button>
    </div>
  );
}

export default App;
