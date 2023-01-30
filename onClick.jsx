export default function App(){

  //buttont prints hello on click
    const handleOnClick = ()=>{
      console.log("hey");
    }
  return (<div>

    <button onClick = {handleOnClick}>Click me</button>

  </div>)


}
