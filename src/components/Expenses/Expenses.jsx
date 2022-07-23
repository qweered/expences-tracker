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
      <ExpenseItem
        amount={expenses[0].amount}
        date={expenses[0].date}
        title={expenses[0].title}
      />
      <ExpenseItem
        amount={expenses[1].amount}
        date={expenses[1].date}
        title={expenses[1].title}
      />
      <ExpenseItem
        amount={expenses[2].amount}
        date={expenses[2].date}
        title={expenses[2].title}
      />
      <ExpenseItem
        amount={expenses[3].amount}
        date={expenses[3].date}
        title={expenses[3].title}
      />
    </Card>
  );
};

export default Expenses;
