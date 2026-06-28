
// export using default keywordd
// export default function MainComponent() {
//   return (
//     <div>
//       Main
//     </div>
//   )
// }

// export without using default keyword
export function ChildrenMainCompoent(){
  const name = "Joes";
  const gender = "male";
  const isLogined = true;
  return (
    // jsx
    <>
      <h1>My name is : {name}</h1>
      <h2>My gender is : {gender}</h2>
      {/* it can be used only with ternary operator to set the condition */}
      {
       isLogined? (
        <h1>You have Login</h1>
       ):(
         <h1>Please register first!</h1>
       )
      }
    </>
  )
}

// name export
const ChildrenMainNameExport = ()=>{
  return(
    <h1>Children MainName Componnet</h1>
  )
}
export default ChildrenMainNameExport;
