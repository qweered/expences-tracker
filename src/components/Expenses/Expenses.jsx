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

  return (
    <Card className="expenses">
      <ExpensesFilter
        onchangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          amount={expense.amount}
          date={expense.date}
          title={expense.title}
        />
      ))}
    </Card>
  );
};

export default Expenses;
