import { useState } from "react";

import Card from "../UI/Card.jsx";

import ExpenseDate from "./ExpenseDate.jsx";

import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  const [newTitle, setNewTitle] = useState(title);

  const clickHandler = () => {
    setNewTitle("Updated");
    console.log("Clicked");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler} type="button">
        Change Title
      </button>
    </Card>
  );
};

export default ExpenseItem;
