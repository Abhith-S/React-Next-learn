//sample code to show working of map function

const FRUITS = ["apple", "mango", "orange"];

export default function mapFruits(){

  //rendering happens as return value
  //lets put the entire thing inside a div
  return <div>

    {/* show the mapped items as a list */}
    <ul>

    {/* map through the fruits array and render the items on web page */}
    {FRUITS.map((fruit, index) => (

      // react requires to specify a key
      <li key={index}> {fruit} </li>

    ))}
    
    </ul>

  </div>

}
