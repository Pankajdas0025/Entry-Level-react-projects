
import { useState, useEffect } from 'react'

function Timer() {

const [timer , setTimer] = useState(0)

  useEffect(() => {
   const interval = setInterval(()=>{ setTimer(timer + 1)} ,1000)
return () => {
    clearInterval(interval)
    console.log("interval Cleared!!")
}
},[timer])


  return (
    <div>
<h1>Timer Function </h1>

<h2>Timer: {timer}</h2>

    </div>
  )
}

export default Timer
