import { useState } from "react";


export default function Todo() {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    const addTask = () => {
        setList([...list, task]);
        setTask("");
    };

    return (
        <div>
            <input type="text"
            value={task}
            onChange={(e)=>setTask(e.target.value)} />
            <button onClick={addTask}>Add</button>

            {list.map((item,i)=>(
                <li key={i}>{item}</li>
            ))}
        </div>
    )
}