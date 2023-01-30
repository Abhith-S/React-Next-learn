//use the useState hook to maintain a variable which automatically re-renders the HTML displayed on the screen every time its value is changed
import { useState } from "react"

export default function App(){

    //useState hook
    //to rerender the page when a variable value changes , store it and rerender
    
    //varible to store value and function to update it
    const [value, setValue] = useState(0);

    const increment = ()=>{
      setValue(value + 1)
    }

    const [input,setInput] = useState("");

    const handleInput = (inputText)=>{
      setInput(inputText)
    }

  return (<div>

    <h1>{value}</h1>

    {/* an increment button */}
    <button onClick = {increment}>Increment</button>
    <br/>
    

    <h1>Type here</h1>
    {/* an input field that displays whatever that is typed in it */}
    <input onChange = {(e) => handleInput(e.target.value)} />

    {/* render on page what is typed in input */}
    <p>{input}</p>

  </div>)
}
