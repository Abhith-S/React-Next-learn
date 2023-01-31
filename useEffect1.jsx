//automatically run some code when the page is first loaded - perhaps to fetch data from a server or the blockchain - 
//and also automatically run some code when a certain state variable changes.
//two arguments - a function and a dependency array

import { useEffect, useState } from "react";

export default function App(){

  //state to hold the recieving data
  const [data, setData] = useState("");

  //state to hold the loading state, default set to true so show loading on render
  const [loading, setLoading]  = useState(true);

  //function to load data
  const loadData = async ()=>{

    //apiCall() returns a value which is then set to 'data'
    const data = await apiCall();
    setData(data)

    //once data got from apiCall() stop showing loading
    setLoading(false);

  }

  // Imaginary function that performs an API call to load
    // data from a server
  //apiCall is a function that just waits for 5 seconds and then returns the string ABCDEF
  //just show ABCDEF after 5 seconds
  const apiCall = async ()=>{
    return new Promise((resolve) => {
      setTimeout(() => resolve("ABCDEF"), 5000);
    })
  }

    // loadData is the function that is run
  // An empty dependency array means this code is run
  // once when the page loads
  useEffect( ()=>{
    loadData()
  }, []);

  return (
    <div>

  {/* Display `"Loading..."` while `loading` is `true`,
   otherwise display `data` */}
      {loading ? <p>Loading.......</p>: data}

    </div>
  )

}
