import { useState } from "react";

import Card from "../UI/Card.jsx";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.jsx";
import ExpensesList from "./ExpensesList.jsx";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onchangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
