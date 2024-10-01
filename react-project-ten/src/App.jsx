import {createContext , useState} from 'react'
 import './App.css'
import ChildA from './Component/childA';

// const UserContext = createContext();
const ThemeContext = createContext();
function App() {

  // step : wrap all the child insie a provider

//  const  [user, setUser] = useState({name : "love"});
//   return (


const [theme, setTheme] = useState('light');

return (
  <ThemeContext.Provider value = {{theme,setTheme}}>
    <div id='container' style={{backgroundColor:theme=== 'light' ? "beige": "black"}}>

    
    <ChildA></ChildA>
    </div>
  </ThemeContext.Provider>

)
}
//     <div>
//       <UserContext.Provider value={user}>
//       <ChildA/>
//       </UserContext.Provider>
//     </div>
//   )
// }
export default App
// export {UserContext}
export {ThemeContext}