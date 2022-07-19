import Card from "../UI/Card.jsx";

import ExpenseItem from "./ExpenseItem.jsx";

import "./Expenses.css";

const Expenses = ({ expenses }) => (
  <Card className="expenses">
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

export default Expenses;
