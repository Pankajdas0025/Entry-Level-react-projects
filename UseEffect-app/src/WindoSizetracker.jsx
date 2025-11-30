import { useState , useEffect } from "react"

function WindoSizetracker() {

    const [width , setWidth] = useState(window.innerWidth)

    useEffect(() => {
const handleResize = () => {
    setWidth(window.innerWidth)
}
    })

window.addEventListener("resize" , handleResize)


  return (
    <div>
<h1>Window width tracker</h1>
 <h1>Window width: {width}px </h1>
    </div>
  )
}

export default WindoSizetracker
