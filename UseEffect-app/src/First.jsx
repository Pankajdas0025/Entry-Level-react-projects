
import { useState, useEffect } from 'react'

function First() {

const [count , setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
    console.log("Components re renndred!")},[count])


  return (
    <div>
<h1>Counter Function </h1>

<h2>Count: {count}</h2>
<button onClick={()=>setCount(count+1)}>Click ME</button>
    </div>
  )
}

export default First
