//like useState but does not rerender page on value change.
//can be used to store state
//const sample = useRef(0)
//the sample will have an object {current : 0} , ie to get it sample.current
//a common use case is we can make use of DOM elements using it

import {useRef, useEffect} from "react";

export default function App(){

  //using this element to set focus ie when page loads the focus will be
  //on imput box so we can type directly
  const inputRef = useRef();

  useEffect( ()=>{
    inputRef.current.focus()
  },[])

  return (

    //the ref element here is a feature of input element
    <input ref = {inputRef} />
  )
}
