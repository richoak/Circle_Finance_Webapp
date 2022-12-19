import React, { useState, useContext } from 'react';

const LoanContext = React.createContext({
  loanExist: false,  
  addLoan: () => {},
  getLoans: () => {}
});

export const LoanContextProvider = (props) => {
  const [loanExist, setIsLoanExist] = useState(false);

  const addLoanHandler = (amount, duration) => {
    async function makeRequest() {
        try {
          const response = await fetch('https://credisol-main.herokuapp.com/v1/loans/all/', {
           method: 'POST',
            body: JSON.stringify({
                email:amount,
                password:duration
            }),
           headers: { 'Content-Type': 'application/json' }
          });
           const data = await response.json();
           console.log(data)
          console.log( response);
          if(response.status!== 200){
          }
          else{
            setIsLoanExist(true);
  
          }
        } catch (err) {
          console.log(err);
        }
      }
      
      makeRequest();
  }

  const getLoansHandler = (accesstoken) => {
    console.log(accesstoken)
    async function makeRequest() {
        try {
            const response = await fetch('https://credisol-main.herokuapp.com/v1/loans/all/', {
                headers: { 
                 'Content-Type': 'application/json',
                 "Authorization": "Bearer " + accesstoken
             }
               });
                const data = await response.json();
                console.log(data)
                if(data.length!== 0){
                    setIsLoanExist(true);
                }
             
               if(response.status!== 200){
               }
               else{
                
       
               }
             } catch (err) {
               console.log(err);
             }
           }
      
      makeRequest();
  }

  return (
    <LoanContext.Provider
      value={{
        loanExist: loanExist,
        getLoans: getLoansHandler,
        addLoan: addLoanHandler

   
      }}
    >
      {props.children}
    </LoanContext.Provider>
  );
};

export default LoanContext;