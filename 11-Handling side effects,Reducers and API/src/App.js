import React, { useState , useEffect} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/AuthContext'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


 useEffect(()=>{
	 const storeLoggedInUsers = localStorage.getItem('isLoggedIn')
 
 if (storeLoggedInUsers === '1'){
	setIsLoggedIn(true)
 }
 },[])
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
	localStorage.setItem('isLoggedIn',1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
	localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
	<AuthContext.Provider value={{
		isLoggedIn:isLoggedIn,
		onLogout:logoutHandler
	}}>
      <MainHeader  onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
	  </AuthContext.Provider>
    </React.Fragment>
	
  );
}

export default App;
