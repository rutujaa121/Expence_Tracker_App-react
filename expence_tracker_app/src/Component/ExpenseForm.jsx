import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!title || !amount || isNaN(amount) || parseFloat(amount) <= 0) {
      alert("Please enter a valid title and amount.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };

    // a list of expenses in localStorage or create a new list
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];

    // Add new expense to list
    savedExpenses.push(newExpense);

    // Save new list to local storage.
    localStorage.setItem("expenses", JSON.stringify(savedExpenses));

    // Send new expenses to the main component via the `addExpense` function
    addExpense(newExpense);

    // clear form
    setTitle("");
    setAmount("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="btn" type="submit">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
