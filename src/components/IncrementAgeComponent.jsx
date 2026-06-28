import { useReducer } from "react"

function reducer(state, action){
  if(action.type== 'incremented_age'){
    return (
      {
        age: state.age + 1,
        name: "Joe Doe"
      }
    )
  }
}

export default function IncrementAgeComponent() {
  // useReducer hook
  const [state, dispatch] = useReducer(reducer,
  {
    age:18,
    name:"Joe Doe"
  })
  return (

       <>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <p>Hello, {state.name} You are {state.age}.</p>
    </>


  )
}
