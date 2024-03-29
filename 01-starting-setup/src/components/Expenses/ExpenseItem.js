import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
//   const [title, setTitle] = useState(props.title);
//   const clickHandler = () => {
//     setTitle("updated");
//     console.log("Clicked!!!!!");
//   };
  return (
	<li>
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
	</li>
  );
};

export default ExpenseItem;
