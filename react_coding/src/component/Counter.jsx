import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count=>count+1)}>Increment</button>
      <button onClick={()=> setCount(count=>count-1)}>Decrement</button>
      <button onClick={()=> setCount(0)}>reset</button>
    </div>
  )
}