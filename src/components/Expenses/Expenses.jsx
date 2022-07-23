import { useState } from "react";

import Card from "../UI/Card.jsx";

import ExpenseItem from "./ExpenseItem.jsx";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.jsx";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
        title={expense.title}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        onchangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
