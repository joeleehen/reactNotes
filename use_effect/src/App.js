import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
  }, [toggle]);

  return (
    <div className="App">
      <h1>Using the useEffect Hook</h1>
      <button onClick={clickHandler}>
        Toggle Message
      </button>
      {toggle && <h2>Welcome to the Thunderdome</h2>}
    </div>
  );
}

export default App;
