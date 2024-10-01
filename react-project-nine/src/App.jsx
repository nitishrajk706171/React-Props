
 import { useEffect, useState } from 'react'
import './App.css'

function App() {


  // <ResizeComponent></ResizeComponent>
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);
  // first --> side-effect  function
  //secoond ---> clean -up function
  // third --> comma seperated dep list 
  //variation : 1
  // runs on every render
  // useEffect(()=>{
  //   alert("I will run on each render");
  // })

  //varistion 2
    //  useEffect(()=>{
    //   alert("I will run in each render");

    //  },[]) 
    return (
     useEffect(()=>{
      alert("I am run  each render");


    },[count])

     // variation 3
    // useEffect(()=>{
    //   alert("I will run each time when  count/totalupdate ")
    // },[count, total])
    
    // useEffect(()=>{
    //   alert("count is updated")
    //   return () =>{
    //     alert("count is uncounted form Ui")
    //   }
    // },[count])
   



  //   function handleClick() {
  //     setCount(count+1);
  //   }

  // function handleClickTotal(){
    
  //   setTotal(total+1);

  // }
  

  // return (
    
    //  <div>
    //   <button onClick={handleClick}>
    //    update Count 
    //   </button>
    //   <br/>
    //    count is : {count}
    //    <br/>
    //    <button onClick={handleClickTotal}>update  Total</button>
    //    <br/>
    //    Total is : {total}
      
//      </div>
    
//   )
// }
    )
}

export default App
