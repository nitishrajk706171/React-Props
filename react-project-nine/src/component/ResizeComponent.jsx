import React , { useState , useEffect} from "react";
function ResizeComponent(){
    const[windowWidth  , setWindowWidth] = useState(window.innerWidth);


    useEffect(()=>{
        const handleResize = ()=> setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize);

        return () =>{
            window.removeEventListener('resize', handleResize);
        };


        },[]);
        return (
            <div>
                <h1>Window width: {windowWidth}</h1>
            </div>
        );
        

    

    
}
export default ResizeComponent