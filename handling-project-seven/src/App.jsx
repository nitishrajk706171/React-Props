import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
function handleClick(){
  alert("I am  Clicked");

}
function handleMouseOver(){
  alert("Para k upper mouse lekar aaaye ho")
}
function handleInputChange(e){
  // console.log("INPUT ME VALUE CHANGE HUI H")
  console.log("value till now:", e.target.value);

}
function handleSumbit(e){
  e.preventDefault();
  alert("from sumbit kardu kya");

}

  return (
    <div>

      <form onSumbit={handleSumbit}>
        <input type='text' onChange={handleInputChange}/>
        <button type='sumbit'>Sumbit</button>
      </form>
      {/* <p onMouseOver={handleMouseOver} style={{color:"red"}}>
        I am a para </p>
<button onClick={handleClick}>
  Click me!
</button> */}
    </div>
  )
}

export default App
