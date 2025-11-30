import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

const navigate = useNavigate();
function gotohandle()

{
navigate("/");
}
  return (

    <>
  <button onClick={gotohandle}>Go to Home Page </button>
 <h1>Know More About React !! </h1>
 <table border="2">
  <thead>
    <th>Topic</th>
    <th>Content</th>
    <th>Status</th>
  </thead>
  <tbody>

  <tr>
    <td>introduction</td>
    <td>What is React ? </td>
    <td>Completed !</td>
  </tr>
  <tr>
    <td>SPA</td>
    <td>Know ab out single page Application</td>
    <td>Completed!</td>
  </tr>
  </tbody>
 </table>

    </>
  )
}

export default About
