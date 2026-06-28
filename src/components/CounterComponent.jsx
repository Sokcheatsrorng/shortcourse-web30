import { useState } from "react"

export default function CouterComponent(){
  // syntax of state 
  //const [state, setState] = useState(initialize)
  const [count, setCount] = useState(0);
  return (
    <>
       <h1>Result Count:{count} </h1>
      {/* button Add */}
      <button className="border p-4 bg-blue-400"
      onClick={()=> setCount(count+1)}>Button Add</button>
      {/* button Add */}
      <button className="border p-4 bg-red-400"
      onClick={() => count<= 0? setCount(0): setCount(count-1)}
      >Button Delete</button>
     </>
  )
}