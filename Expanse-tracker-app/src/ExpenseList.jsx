import { useState, useRef } from "react"
import ExpenseIteam from "./ExpenseIteam"


function ExpenseList({expenses , onDelete}) {

 if (expenses.length === 0)

  {
return <p className="no-expense">No expenses Here.. </p>
  }
  return (
    <div>
<div className='expense-list'>
{expenses.map((item) =>(

<ExpenseIteam key={item.id} item={item} onDelete={onDelete}/>

))}

</div>
    </div>
  )
}

export default ExpenseList
