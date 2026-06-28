
// export default function AvatarComponent(props){
//   return(
//     <section className="border p-4">
//       <img src={props.image} alt="" className="w-25 h-25" />
//       <hr />
//       <h1>Name: {props.name}</h1>
//       <h2>Age: {props.age}</h2>
//       <h3>Position: {props.position}</h3>
//     </section>
//   )
// }

// convert using with distructuring
export default function AvatarComponent({image,name,age,position}){
  return(
    <section className="border p-4">
      <img src={image} alt="" className="w-25 h-25" />
      <hr />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Position: {position}</h3>
    </section>
  )
}