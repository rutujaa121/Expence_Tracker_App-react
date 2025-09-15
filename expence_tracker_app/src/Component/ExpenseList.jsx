import React from "react";

function ExpenseList({ expenses, deleteExpense }) {
    return (
        <div>
            <h2 className="total-list"> Expense List Component </h2>

            <table border={1} cellPadding={10} cellSpacing={0} className="table">
                <tr>
                    <th>Sr.No.</th>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>

                 {expenses.map((exp) => (
                <tr key={exp.id}>
                    <td>{exp.title}</td>
                    <td>{exp.amount}</td>
                    <td>{exp.title}</td>
                    <td>
                        <button className="btn" onClick={() => deleteExpense(exp.id)}> Delete  </button>
                    </td>
                </tr>
            ))}
            </table>

           

        </div>
    )
}
export default ExpenseList;