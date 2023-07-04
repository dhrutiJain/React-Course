import React, { useState } from "react";
import classes from "./Calculator.module.css"

const CalculatorForm=(props)=>{
    const [enterCurrentSaving,setEnterCurrentSaving] = useState('');
    const [enterYearlyContribution,setEnterYearlyContribution] = useState('');
    const [enterExpectedReturn,setEnterExpectedReturn] = useState('');
    const [enterDuration,setEnterDuration] = useState('');

    const currentSavingHandler=(event)=>{
        setEnterCurrentSaving(event.target.value)
    }
    const yearlyContributionHandler =(event)=>{
        setEnterYearlyContribution(event.target.value)
    }
    const expectedReturnHandler= (event) =>{
        setEnterExpectedReturn(event.target.value)
    }
    const durationHandler = (event) =>{
        setEnterDuration(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const investment = {
            currentSaving:+enterCurrentSaving,
            yearlyContribution:+enterYearlyContribution,
            expectedReturn:+enterExpectedReturn,
            duration:+enterDuration,

        }
        console.log(investment);
        props.onCalculate(investment)
    }
    const resetHandler = () =>{
        setEnterCurrentSaving('');
        setEnterYearlyContribution('');
        setEnterExpectedReturn('');
        setEnterDuration('')
    }
return (
    <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={enterCurrentSaving} onChange={currentSavingHandler}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={enterYearlyContribution} onChange={yearlyContributionHandler}/>
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={enterExpectedReturn} onChange={expectedReturnHandler} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={enterDuration} onChange={durationHandler}/>
          </p>
        </div>
        <p className={classes.actions}>
          <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
      )
}

export default CalculatorForm;