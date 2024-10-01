import { useState, useEffect,useRef } from 'react'

import './App.css'

function App() {
  // const [count,  setCount]  = useState(0);
  // let val = 1;
  // let btnRef = useRef();
  // function handleIncrement() {
  //   val = val +1;

  //   console.log("value of val: ", val);
  //   setCount(count +1);


  // }
  // useEffect(()=>{
  //   console.log("main ferse render hogya hai")
  // })
  // function changeColor(){
  //   btnRef.current.style .backgroundColor = "red";


  const [time, setTime] = useState(0);
  let timerRef  = useRef(null);

  function startTimer(){
      timerRef.current = setInterval(()=>{
      setTime( time => time +1);
    },1000);

  }
  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;

  }
  function resetTimer(){
    stopTimer();
    setTime(0);

  }

  

  
  

  return (
    
      <div>
        <h1>StopWatch:{time} seconds </h1>
        <button onClick={startTimer}>
          Start

        </button>
        <br/><br/>
        <button onClick={stopTimer}>Stop
        </button>
        <br/><br/>
        <button onClick={resetTimer}> Reset
        </button>


       {/* <button ref={btnRef}
       onClick={handleIncrement}>
        Increment 
       </button>
       <br/>
       <br/>
       <button onClick={changeColor}>
        Change color of ist Button
       </button>
       <div>
        Count: {count}
       </div> */}
       </div>
       )
       }
export default App
