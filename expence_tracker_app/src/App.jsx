import React, { useState, useEffect } from 'react';
import './App.css';
import ExpenseForm from './Component/ExpenseForm';
import ExpenseList from './Component/ExpenseList';
import TotalExpense from './Component/TotalExpense';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedData = localStorage.getItem('expenses');
    return savedData ? JSON.parse(savedData) : [];
  });

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const deleteExpense = (id) => {
    const updated = expenses.filter((exp) => exp.id !== id);
    setExpenses(updated);
  };

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <>
      <h1 className='total-list'>Expense Tracker App</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <TotalExpense expenses={expenses} />
    </>
  );
}

export default App;
