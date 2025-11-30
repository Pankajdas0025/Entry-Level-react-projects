import { useState , useEffect } from "react"

function Users() {

    const [user , setUser] = useState([])

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUser(json))
    } ,[])



  return (
    <div>
<h2>user List : - </h2>
{user.map((e)=>{
  {e.name }
})}
    </div>
  )
}

export default Users
