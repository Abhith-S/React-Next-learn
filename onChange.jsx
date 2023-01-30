export default function App(){

  //console log the input as the user types it
    const handleOnChange = (text)=>{
      console.log(text);
    }
  return (<div>

    <p>enter name</p>
    <input type="text" onChange = {(e) => handleOnChange(e.target.value)} />

  </div>)
}
