"use client"
import{useState} from "react"

 function State() {
    const [count,setCount] = useState(0)
    // const [price,setPrice] = useState(2500)
    // const [country,setCountry] = useState("Pakistan")
    // const [islogin,setLogin] = useState(false)
  
  return (
    <div>
        <p>My Count is: {count}</p>
        <button onClick={()=> setCount(count+1)}className="bg-black text-white py-2 px-10 rounded">Increment</button>
        
         <p>My Count is: {count}</p>
        <button onClick={()=> setCount(count-1)}className="bg-black text-white py-2 px-10 rounded">Decrement</button>
        
         <p>My Count is: {count}</p>
        <button onClick={()=> setCount(0)}className="bg-black text-white py-2 px-10 rounded">Reset</button>

    </div>
  );
}
export default State
