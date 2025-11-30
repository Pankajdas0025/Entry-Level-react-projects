
import { useState, useEffect, useRef } from "react"
import ExpenseForm from "./ExpenseForm"
import ExpenseList from "./ExpenseList"
import './App.css'

function App() {
const [expenses , setExpenses] = useState([])
useEffect(()=> {
localStorage.setItem("expenses" , JSON.stringify(expenses))
} , [expenses])

const addExpense = (expense) => {
setExpenses((prev) => [...prev, expense])


}

const deleteExpense = (id) => {
  setExpenses((prev) => prev.filter((item) => item.id !== id));
};


  return (
   <>
    <div className='app-container'>
<h1>💰Expense tracker-app</h1>
<ExpenseForm onAddExpense = {addExpense} />
<h3 className="total">
  Total Expense : ₹{expenses.reduce((sum, item) => sum + item.amount, 0).toFixed(2)}
</h3>

<ExpenseList expenses = {expenses} onDelete = {deleteExpense} />
    </div>
   </>
  )

}

export default App
