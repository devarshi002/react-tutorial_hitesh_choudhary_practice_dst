import { useRef } from "react";
import { useState } from "react";

export default function Controlled_un () {
    
    //controlled func
    const [name, setName] = useState("");

    //uncontrolled
    const inputRef = useRef();


    const handleUncontrolled = () =>{
        alert("Uncontrolled Value: " + inputRef.current.value);
    };

    return (
        <div>
            <h2>Controlled Component</h2>
                <input type="text"
                placeholder="type here"
                value={name}
                onChange={(e)=> setName(e.target.value)} />

                <p>Type value: {name}</p>

                <hr />

                <h2>Uncontrolled component</h2>
                <input type="text"
                placeholder="type here"
                ref={inputRef} />
                <button onClick={handleUncontrolled}>
                    show Value
                </button>
            
        </div>
    )
}