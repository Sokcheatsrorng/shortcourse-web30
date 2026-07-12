import { useSelector } from "react-redux"

export default function CounterComponent() {
  // useSelector 
  const count = useSelector((state)=> state.counter.value);
  console.log("count: ", count)
  return (
    <div>
      <h1>Result Count: {count}</h1>
    </div>
  )
}
