import React, { useEffect, useState } from "react"
import useHttp from '../hooks/use-http';

const Test = () => {

    const [ loans, setLoans ] = useState([]);


    

    if (typeof window !== 'undefined') {
        const { isLoading, error, sendRequest:fetchLoans }  = useHttp();

        useEffect(() => {

            const transformLoans = ((loans) => {
                console.log(loans)
            })


            fetchLoans({
                url: 'https://credisol-app.herokuapp.com/v1/loans/all/',
                method: "GET",
                headers: { 
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem("access_token")
                }
            }, transformLoans)


        },[])
    
      } 



    


  
    return (
    
        <div>{loans}</div>
        
    )
}

export default Test