import { useEffect } from "react";
import { useState } from "react";


export default function FetchApi(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res=>res.json())
            .then(setData);
    },[]);

    return (
        <div>
            {data.map(user=>(
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}





