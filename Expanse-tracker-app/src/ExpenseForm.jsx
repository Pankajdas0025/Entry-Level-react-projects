import { useState, useEffect, useRef } from "react"
function ExpenseForm({ onAddExpense }) {

const [title , setTitle] = useState("")
const [amount , setAmount] = useState("")
const titleref = useRef();


const handleSubmit = (e)=>{
  e.preventDefault();
  if(!title || !amount) return alert("Please Fill all fields ! ")
  const newExpense =
{
id : Date.now(),
title: title,
amount: parseFloat(amount)
}

onAddExpense(newExpense);
setTitle("")
setAmount("")
titleref.current.focus();
}

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
<input type="text" placeholder="Expense title " ref={titleref} value={title} onChange={(e)=>{ setTitle(e.target.value)}}  />
<input type="number" placeholder="Amount ₹" value={amount} onChange={(e)=>{ setAmount(e.target.value)}}   />
<button type="submit">Add Expense </button>
      </form>

    </>
  )
}

export default ExpenseForm
