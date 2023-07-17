import React, { useState , useRef} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helper/Wrapper';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();	
  const ageInputRef = useRef()
	
  const [errorModal,setErrorModal] = useState()

  const addUserHandler = (event) => {
    event.preventDefault();
	const enterUserName = nameInputRef.current.value;
	const enterUserAge = ageInputRef.current.value;
    if (enterUserName.trim().length === 0 || enterUserAge.trim().length === 0) {
	  setErrorModal({
		title:'Invalid input',
		message:'Please Enter a Value',
	  })
      return;
    }
    if (+enterUserAge < 1) {
		setErrorModal({
		title:'Invalid Age',
		message:'Please Enter a Valid Age',
	  })
      return;
    }
    props.onAddUser(enterUserName, enterUserAge);
	// console.log(nameInputRef.current.value)
	nameInputRef.current.value = '';
	ageInputRef.current.value=''

  };

  const errorModalHandler =()=>{
	setErrorModal(null);
  }

  return (
	<Wrapper>
	{errorModal && <ErrorModal title={errorModal.title} message={errorModal.message} onConfirm={errorModalHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
		  ref={nameInputRef}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          ref={ageInputRef}
        />
        <Button type="submit" >Add User</Button>
      </form>
    </Card>
	</Wrapper>
  );
};

export default AddUser;