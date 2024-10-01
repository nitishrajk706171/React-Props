import { useState } from 'react'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

import './App.css'

function App() {
  const[isLoggedIn, setLoggedIn] = useState(false);
  if(!isLoggedIn){
    return(
      <LoginBtn/>
    )
  }

return(
  <div>
    <h1>Welcome Everyone to Codehelp web dev course</h1>
  
  <div> 
    {isLoggedIn && <LogoutBtn/>}
  </div>
  </div>
)


  
  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn />}
  //   </div>
  // )
  
//   const[isLoggedIn, setLoggedIn] = useState(true);
//    if(isLoggedIn) {
// return (
//   <LogoutBtn/>
// )
  
//   }

//   else{
//     return (
//       <LoginBtn/>
//     )

//   }
      
// }
  }
     
export default App
