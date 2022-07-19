import Card from "../UI/Card.jsx";

import ExpenseDate from "./ExpenseDate.jsx";

import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => (
  <Card className="expense-item">
    <ExpenseDate date={date} />
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${amount}</div>
    </div>
  </Card>
);

export default ExpenseItem;
