import { log } from "node:console";
import { useEffect, useState } from "react";


function UserComponent() {
    const [count, setCount] = useState(0);


    useEffect(()=>{
        console.log("component mounted");


        return () => {
            console.log("component unmounted");
            
        }
        
    },[])


    useEffect(()=>{
        console.log("count updated:", count);
        
    },[count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count+1)}>Increase</button>
        </div>
    )


}

export default UserComponent;