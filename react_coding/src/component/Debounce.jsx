import { useEffect } from "react";
import { useState } from "react";


export default function Search() {
    const [input, setInput] = useState("");
    const [debounced, setDebounced] = useState("");


    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounced(input)
        },5000);

        return ()=> clearTimeout(timer);
    },[input]);

    useEffect(()=>{
        if(debounced) {
            console.log("Api call");
            
        }
    },[debounced])

    return (
        <input type="text"
        value={input}
        onChange={(e)=> setInput(e.target.value)} />
    )
}
