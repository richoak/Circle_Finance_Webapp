import React, { useEffect, useState } from "react"
import useHttp from '../hooks/use-http';

const Testpost = () => {

    const [ tasks, setTasks ] = useState([]);

 
        const { isLoading, error, sendRequest:sendLoanRequest }  = useHttp();


            const makeRequest = () => {

                if (typeof window !== 'undefined') {

                const createdLoan = ((loanresponse) => {
                    console.log(loanresponse)
                })
    
                const obj = {
                    "email": "mideadeniyi7@gmail.com",
                    "password": "@Marvinsroom1",
                   
                }
    
                
                sendLoanRequest({
                    "url": "https://credisol-app.herokuapp.com/v1/registration/sign_in/",
                    method: "POST",
                    body: {
                        email:"mideadeniyi7@gmail.com",
                        password:"@Marvinsroom1"
                    },
                    headers: { 
                        'Content-Type': 'application/json',
                        // "Authorization": "Bearer " + localStorage.getItem("access_token")
                    },
                }, createdLoan)
            } 
            }
       

    


    return (
    
        <div>
               <button onClick = {makeRequest}>Make Request </button>
        </div>
     
        
    )
}

export default Testpost