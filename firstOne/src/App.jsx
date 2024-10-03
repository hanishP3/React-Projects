
import { useState } from "react";
import "./App.css";

function App() {
  /**
   * React is a UI library, primarily used for building user interfaces. If you want to update elements in the UI, you use React's concept of state. React state allows components to react to changes, thereby updating the UI dynamically.

    The useState Hook
      To manage state in functional components, React provides the useState hook. The syntax for using useState is:

      const [counter, setCounter] = useState(initialValue);

      Here's what each part means:

      const [counter, setCounter] = useState(initialValue);

      counter: This is the state variable. It holds the current value of the state.
      setCounter: This is the function used to update the state variable. Each time you call this function, React re-renders the component with the new state value.
      useState(initialValue): This initializes the state with the provided initialValue. For example, useState(15) sets the initial value of counter to 15.
      Example
      
      const [count, setCount] = useState(0);
      count is the state variable initialized to 0.
      setCount is the function that updates count.
      By using setCount, you can change the state, which will then trigger a re-render of the component to reflect the updated UI. This is how React manages dynamic changes in the UI efficiently.
   */
  const [counter,setCounter] = useState(0)
  function Addvalue(){
     setCounter(counter+1);
  }
  function minusValue(){
  setCounter(counter-1);
  }
  function resetValue(){
    setCounter(0)
  }

  return (
    <>
      <h1>Welcome to the counter</h1>
      <h2>{counter}</h2>
      <button onClick={Addvalue}>Add 1</button> {""}
      <button onClick={minusValue}>Minus 1</button> {''}
      <button onClick={resetValue} >Reset</button>
    </>
  );

}

export default App;
