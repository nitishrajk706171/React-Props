
import './App.css'
import Card from './components/Card'
 import { useState } from 'react';

function App() {
  //create state
  //manage state
  //change state
  //sabhi child  me state ko sync karwadunga
   const [name, setName] = useState('');


  
  return (
    <div>
       <Card  title="Card1" name= {name} setName={setName}/>
       <Card  title="Card2" name= {name} setName={setName}/>
       <p>I am inside parent Component and value of name is {name}</p>
       
    </div>
      
    
    
  )
}

export default App
