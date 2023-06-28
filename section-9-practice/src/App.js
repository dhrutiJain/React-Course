import React, { useState } from "react";
import Header from './components/header/header';
import CalculatorForm from './components/Calculator/Calculator';
import InvestmentResults from './components/CalculationOutput/InvestmentsResult';
function App() {
  const [userInput ,setUserInputValue] = useState(null)
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    setUserInputValue(userInput);
    console.log(userInput)
    }
    const yearlyData = []; // per-year results
	console.log(yearlyData)
    if(userInput){
      let currentSavings = +userInput.currentSaving; 
    // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    // do something with yearlyData ...
    }
  };

  return (
    <div>
      <Header></Header>
      <CalculatorForm onCalculate={calculateHandler}></CalculatorForm>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {!userInput && <p>No Investment Calculate Yet</p>}
      {/* Show fallback text if no data is available */}
       {userInput && <InvestmentResults dataOption={yearlyData} initialInvestment = {userInput.currentSaving}></InvestmentResults>}
      
    </div>
  );
}

export default App;
