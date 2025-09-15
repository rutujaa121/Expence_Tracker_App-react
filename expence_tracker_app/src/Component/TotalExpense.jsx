import React from "react";
import '../App.css';

function TotalExpense({expenses}){
    const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    return(
        <div className="total-expense">
            <h2> Total Amount : ₹ {total}  </h2>
        </div>
    )
}
export default TotalExpense;