
import { useState, useRef } from "react"

function ExpenseIteam({item , onDelete}) {
  return (
    <div>
      <div className="expense-item">
  <table border="1">
<tr>
  <th>Iteam</th>
  <th>Expense</th>
  <th>Action</th>
</tr>


<tr>
  <td width="40%"> <span>{item.title}: </span></td>
  <td width="40%"> <span> ₹ {item.amount}</span></td>
  <td width="20%" > <button style={{margin:'0px 25px'}} onClick={()=> onDelete(item.id)}> ❌</button> </td>
</tr>

  </table>
        </div>
    </div>
  )
}

export default ExpenseIteam
