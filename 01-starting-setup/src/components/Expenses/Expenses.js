import React,{useState} from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

const Expenses = (props) => {
	const [filteredYear,setFilteredYear] = useState(2020);
	const filterChangeHandler =(selectedYear)=>{
		setFilteredYear(selectedYear);
	}
	// console.log(props.items)
	const filteredExpense = props.items.filter(year=>year.date.getFullYear().toString()==filteredYear)
	
  return (
	<div>
    <Card className="expenses">
	 <ExpensesFilter selected ={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
	 <ExpensesChart expenses={filteredExpense}></ExpensesChart>
	 <ExpensesList items={filteredExpense}></ExpensesList>	  
	  {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem> */}
    </Card>
	</div>
  );
};

export default Expenses;
