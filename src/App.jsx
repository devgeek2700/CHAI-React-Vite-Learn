import { useState } from "react";
import viteLogo from "/vite.svg";
import Chai from "./Chai";

function App() {
  let [count, setCount] = useState(5);

  const AddValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const RemoveValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Hello world</h1>
      {/* <Chai /> */}

      <h2>Counter value: {count}</h2>
      <button onClick={AddValue}>Add Value</button>
      <button onClick={RemoveValue}>Remove Value</button>
    </>
  );
}

export default App;
