import logo from './logo.svg';
import './App.css';
import { useRef } from "react";

// we use refs when we want to REMEMBER some information without triggering a new render
// unlike state, refs do NOT proc a re-render when the the data is changed
// refs are mutable; you can access the stuff currently stored in a ref with ref.current

function App() {
  // we'll use useRef to automatically focus the cursor on an input field

  // 1. create a (currently empty) ref object and call it formInputRef
  const formInputRef = useRef(null);

  const focusInput = () => {
    // 3. we focus on whatever the ref is "anchored" to
    formInputRef.current.focus();
  }

  return (
    <>
      <h1>using useRef to access the underlying DOM</h1>
      {/* 2. we "anchor" the input DOM node (and its properties) to formInputRef, which was previously empty */}
      {/* NOTE: we can also do this by setting some variable to formInputRef.current */}
      <input ref={formInputRef} type="text" />
      {/* 4. call focusInput when the button is pressed, focusing on our ref */}
      <button onClick={focusInput}>
        Focus Input
      </button>
    </>
  );
}

export default App;
