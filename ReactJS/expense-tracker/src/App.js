
import React, { useRef, useState } from 'react';

import './App.css';
import ExpenseData from './components/ExpenseData';



function App() {

  var expenseData = JSON.parse(localStorage.getItem("expenseData")) || localStorage.setItem("expenseData", JSON.stringify([]));

  const initialBalance = 1000;

  const [balance, setBalance] = useState(initialBalance);
  const [expenseDetails, setExpenseDetails] = useState(expenseData);


  const inputReasonRef = useRef();
  const inputAmountRef = useRef();

  //logs current Date

  const addExpense = () => {

    var obj = {
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      reason: inputReasonRef.current.value,
      amount: inputAmountRef.current.value,
      transactionTime: new Date().toLocaleString()
    }

    setExpenseDetails(arr => [...arr, obj]);
    console.log(expenseDetails);
    localStorage.setItem("expenseData", JSON.stringify(expenseDetails))
  }


  return (
    <div className="App">
      <div className="max-w-screen-xl mx-auto mt-10 px-5">
        <div className="bg-white rounded-lgp-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Expense Tracker</h1>

          {/* Form comes here */}
          <form className="mb-4">
            <input type="text" className="border border-gray-300 p-2 rounded-lg w-full mb-3" placeholder="Enter Reason" ref={inputReasonRef} />
            <input type="text" ref={inputAmountRef} className="border border-gray-300 p-2 rounded-lg w-full mb-3" placeholder="Enter Amount" />
            <button type="button" onClick={addExpense} className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-600  mx-auto ">Add</button>
          </form>

          <div className="mt-10 text-right">
            <div className="currentBalance">The Current Balance : <b className='text-xl'>{balance}</b></div>
          </div>

          <ExpenseData data={expenseDetails} />

        </div>
      </div>
    </div>
  );
}

export default App;
