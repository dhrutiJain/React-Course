import React, { useState,useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input'
import classes from './Login.module.css';

const emailReducer = (state,action)=>{
	if (action.type=== 'USER_INPUT'){
		return {value:action.val,isValid:action.val.includes('@')}
	}
	if(action.type=== 'INPUT_BLUR'){
		return {value:state.value,isValid:state.value}
		}
	
	return {value:'',isValid:false}
}
const passwordReducer = (state,action)=>{
	if(action.type==='PASS_INPUT'){
	return {value:action.val,isValid:action.val.trim().length > 6}	
	}
	if(action.type ==='INPUT_BLUR'){
		return{
			value:state.value,isValid:state.value
		}
	}
		return {value:'',isValid:false}

}


const Login = (props) => {
//   const [enteredEmail, setEnteredEmail] = useState('');
//   const [emailIsValid, setEmailIsValid] = useState();
//   const [enteredPassword, setEnteredPassword] = useState('');
//   const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  
  const [emailState, dispatchEmail] = useReducer(emailReducer,{value:'',isValid:null})
  
  const [passwordState,dispatchPassword] = useReducer(passwordReducer,{value:'',isValid:null})
  
  const{isValid:emailIsValid}= emailState;
  const{isValid:passwordIsValid}= passwordState;

  
  useEffect(()=>{
	const identifier = setTimeout(()=>{
		console.log('checking form valdity')
	setFormIsValid(
      emailIsValid && passwordIsValid
    );
	},500)
	return ()=>{
	console.log('CLEANUP')
	clearTimeout(identifier)	
	}
  },[emailIsValid,passwordIsValid])

  const emailChangeHandler = (event) => {
	dispatchEmail ({type:'USER_INPUT', val:event.target.value	
	})
    // setEnteredEmail(event.target.value);
	// setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid > 6
    // );
  };

  const passwordChangeHandler = (event) => {
	dispatchPassword({type:'PASS_INPUT', val:event.target.value})
    // setEnteredPassword(event.target.value);
	// setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
	dispatchEmail({type:'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
	dispatchPassword({type:'INPUT_BLUR'})
    // setPasswordIsValid(passwordState.trim().length > 6);
	
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
		<Input type="email" id="email" label="E-Mail" value={emailState.value} 
		onChange ={emailChangeHandler} 
		onBlur={validateEmailHandler}
		isValid ={emailIsValid}
		/>
		<Input type="password" id="password" label="Password" value={passwordState.value} 
		onChange ={passwordChangeHandler} 
		onBlur={validatePasswordHandler}
		isValid ={passwordIsValid}
		/>
        {/* <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div> */}
        {/* <div
          className={`${classes.control} ${
            passwordState === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
