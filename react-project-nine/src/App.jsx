
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  // Effect that runs on every render
  useEffect(() => {
    console.log("This effect runs on every render");
  });

  // Effect that runs only once on component mount
  useEffect(() => {
    console.log("This effect runs only once on component mount");
  }, []);

  // Effect that runs when count changes
  useEffect(() => {
    console.log("Count has changed:", count);
    return () => {
      console.log("Cleanup for count change");
    };
  }, [count]);

  // Effect that runs when count or total changes
  useEffect(() => {
    console.log("Count or total has changed. Count:", count, "Total:", total);
  }, [count, total]);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClickTotal() {
    setTotal(total + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>
        Update Count
      </button>
      <br />
      Count is: {count}
      <br />
      <button onClick={handleClickTotal}>Update Total</button>
      <br />
      Total is: {total}
    </div>
  );
}

export default App
