import { useEffect } from "react";
import { useState } from "react";



export default function PracticeDebouce() {
    const [input, setInput] = useState("")
    const [debounced, setDebounced] = useState("")


    useEffect(()=>{
        if(debounced){
            console.log("Api call");
            
        }
    },[debounced])

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounced(input)
        },500);

        return ()=> clearTimeout(timer)
    },[input]);


    return (
        <input type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)} />
    )
}