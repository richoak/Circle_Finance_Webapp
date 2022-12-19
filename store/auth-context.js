import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,  
  onLogout: () => {},
  onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [creditOfficer, setCreditOfficer] = useState();
  const [userId, setUserId] = useState();
  const [accessToken, setAccessToken] = useState();
  const [pin, setPin] = useState();
  const [bank, setBank] = useState();


  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };



  const loginHandler = (email, password) => {
    const loginData = {
        email:email,
        password:password
    }

    async function makeRequest() {
        try {
          const response = await fetch('https://credisol-main.herokuapp.com/v1/registration/sign_in/', {
           method: 'POST',
            body: JSON.stringify({
                email:email,
                password:password
            }),
           headers: { 'Content-Type': 'application/json' }
          });
           const data = await response.json();
           console.log(data)
          console.log( response);
          if(response.status!== 200){
          }
          else{
            setIsLoggedIn(true);
            setEmail(data.user.email)
            setFirstName(data.user.first_name)
            setLastName(data.user.last_name)
            setPhone(data.user.phone_number)
            setCreditOfficer(data.user.credit_officer)
            setUserId(data.user.id)
            setAccessToken(data.tokens.access)
            setPin(data.user.transaction_pin)
            setBank(data.user.bank_name)
            localStorage.setItem("access_token", data.tokens.access)
          }
        } catch (err) {
          console.log(err);
        }
      }
      
      makeRequest();
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        email: email,
        firstname:firstName,
        lastname:lastName,
        phone:phone,
        creditofficer:creditOfficer,
        userid:userId,
        accesstoken:accessToken,
        pin:pin,
        bank:bank
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;