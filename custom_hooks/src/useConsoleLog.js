// custom hooks begin with "use"
import { useEffect } from "react";

// we want to write a variable to console every time the variable changes
// since console logging is a side effect, we invoke useEffect
function useConsoleLog(varName) {
  useEffect(() => {
    console.log(varName);
  }, [varName]);
}

export default useConsoleLog;
