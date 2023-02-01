//can also be used to store previous values in between rerenders

import {useRef, useEffect, useState} from "react";

export default function App(){

  //to store the input name
  const [name, setName] = useState("");

  //store the vlaue that was present before the previous render
  const previousName = useRef();

  useEffect( ()=>{
    previousName.current = name;
  },[name])

  return (

    <div>

    {/* the ref element here is a feature of input element */}
    <input onChange = { (e) => setName(e.target.value)} />

    <p>My name is {name} and my previous name was {previousName.current}</p>

    </div>

  )
}
