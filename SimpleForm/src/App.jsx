
/*==================================================================================
(1.) using control components or using useState method ----------------------------
====================================================================================*/

import { useState } from 'react'
import './App.css'
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
padding: '2.5px 3px',
boxSizing: 'border-box',
borderRadius: '10px',
boxShadow: '0px 0px 20px black inset',
}

//==========================(1.1) Method First ================================================
function App() {
const [name , setName] = useState('');
const [email , setEmail] = useState('');
const [gender , setGender] = useState('');
const [mobile , setMobile] = useState('');
const [agree , setAgree] = useState('false');

  function getData(e)
    {
      e.preventDefault();
      if(!name || !email || !gender || !mobile || !agree)
      {
      alert("Plesae Filled all details!");
      }
      else
      {
      console.log("Name : " + name);
      console.log("Email : " + email);
      console.log("Gender : " + gender);
      console.log("Mobile : " + mobile);
      console.log("Agree : " + agree);
          setTimeout(()=>
    {
      alert('Form Submitted Successfully');
     e.target.reset();  // resets all inputs automatically

    },2000)
      }


    }
return (
  <>
<div style={box}>
<form onSubmit={getData}>
<input type="text" placeholder="Enter your name"  onChange={(e)=>setName(e.target.value)}/>
<input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
Male <input type="radio" name="gender"  value="Male" onChange={(e)=>setGender(e.target.value)}/>
Female <input type="radio" name="gender"  value="Female" onChange={(e)=>setGender(e.target.value)}/>
<input type="tel" placeholder="Enter your Mobile Number"  onChange={(e)=>setMobile(e.target.value)}/>
<input type="checkbox" value="true"  onChange={(e)=>setAgree(e.target.value)}/>
<input type="submit" value="Submit"  className="submit-btn" />
</form>
</div>
  </>

)
}
export default App

//==========================(1.2) Method Second ====================================================

// function App() {
//   const[users , setUsers] = useState(
// {
//   name:"",
//   email:"",
//   gender:"",
//   mobile:"",
//   agree : false
// })
// const SubmitForm = (e)=> {
//   e.preventDefault();
//   console.log(users)

// }
// const setData = (e)=> {
// const { name , type , value , checked} = e.target ;
// setUsers((prev)=> ({
//    ...prev,
//    [name] : type === "checkbox" ? checked : value
//   }
// )
// )
// }
// return (
//   <>
// <div style={box}>
// <form onSubmit={SubmitForm}>
// <input type="text" name="name" placeholder="Enter your name" value={users.name} onChange={setData} />
// <input type="email" name="email" placeholder="Enter your email" value={users.email} onChange={setData}/>
// Male <input type="radio" name="gender"  value="Male" checked={users.gender === "Male"} onChange={setData}/>
// Female <input type="radio" name="gender"  value="Female" checked={users.gender === "Female"} onChange={setData}/>
// <input type="tel" name="mobile" placeholder="Enter your Mobile Number" value={users.mobile} onChange={setData}/>
// <input type="checkbox" name="agree" value={users.agree} checked={users.agree}  onChange={setData}  /> agree with terms&conditions
// <input type="submit" value="Submit"  className="submit-btn" />
// </form>
// </div>
//   </>
// )
// }

// export default App




/*=========================================================================================================
(2.) using uncontrol components or using useRef method-----------------------------------------------------
===========================================================================================================*/

// import { useRef } from 'react'
// import './App.css'

// const box =
// {
// height: '400px',
// width: '400px',
// backgroundColor: 'yellow',
// margin: '10% auto',
// display: 'flex',
// flexDirection: 'column',
// justifyContent: 'center',
// alignItems: 'center',
// padding: '2.5px 3px',
// boxSizing: 'border-box',
// borderRadius: '10px',
// boxShadow: '0px 0px 20px black inset',
// }

// function App() {
// const nameRef = useRef();
// const emailRef = useRef();
// const genderRef = useRef();
// const mobileRef = useRef();
// const agreeRef = useRef();

//   function getData(e)
//     {
//       e.preventDefault();
//       console.log("Name : " , nameRef.current.value,);
//       console.log("Email : " , emailRef.current.value,);
//       console.log("Gender : " , genderRef.current.value,);
//       console.log("Mobile : " , mobileRef.current.value,);
//       console.log("Agree : " , agreeRef.current.value,);
//       setTimeout(()=>
//     {
//       alert('Form Submitted Successfully');
//     },3000)
//     }
// return (
//   <>
// <div style={box}>
// <form onSubmit={getData}>
// <input type="text" placeholder="Enter your name" ref={nameRef}/>
// <input type="email" placeholder="Enter your email" ref={emailRef} />
// Male <input type="radio" name="gender"  value="Male" ref={genderRef} />
// Female <input type="radio" name="gender"  value="Female" ref={genderRef} />
// <input type="tel" placeholder="Enter your Mobile Number" ref={mobileRef} />
// <input type="checkbox" value="true" ref={agreeRef}/>
// <input type="submit" value="Submit"  className="submit-btn" />
// </form>
// </div>
//   </>
// )
// }
// export default App

















