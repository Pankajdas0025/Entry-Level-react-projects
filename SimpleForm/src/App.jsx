import { useState } from 'react'
import './App.css'

//internal css================================================================
const box =

{
height: '400px',
width: '400px',
backgroundColor: 'yellow',
margin: '10% auto',
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
padding: '2.5px',
boxSizing: 'border-box',
borderRadius: '10px',
boxShadow: '0px 0px 20px black inset',
}

function App() {

const [name , setName] = useState('');
const [email , setEmail] = useState('');
const [mobile , setMobile] = useState('');

  function getData(e)
    {
      e.preventDefault();
      console.log(name);
      console.log(email);
      console.log(mobile);
      alert('Form Submitted Successfully');

    }

return (
  <>
<div style={box}>
<form onSubmit={getData}>

<input type="text" placeholder="Enter your name"  onChange={(e)=>setName(e.target.value)}/>
<input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
<input type="tel" placeholder="Enter your Mobile Number"  onChange={(e)=>setMobile(e.target.value)}/>
<input type="submit" value="Submit"  className="submit-btn" />

</form>
</div>

  </>

)



}


export default App

