import { useState } from "react"

export default function App(){

    //useState hook
    //to rerender the page when a variable value changes , store it and rerender

    const [input,setInput] = useState("");

    const handleInput = (inputText)=>{
      setInput(inputText)
    }

    //useState to store fruits as a list
    const [fruits, setFruits] = useState([]);

    const addFruit = ()=>{

      //create a new array with the values in fruits lsit + the new entered value
      const newFruitsList = [...fruits, input]
      setFruits(newFruitsList)
    }

  return (<div>

    <h1>Enter Fruits</h1>
    {/* an input field that displays whatever that is typed in it */}
    <input onChange = {(e) => handleInput(e.target.value)} />
    <button onClick = {addFruit}>submit</button>

    {/* render on page what is typed in input one by one as a list */}
    <ul>

      {fruits.map((fruit, index) => (
        <li key = {index}> {fruit} </li>
      ))}
    </ul>

  </div>)
}
