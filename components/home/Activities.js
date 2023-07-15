import React, { useEffect, useState} from 'react';
import classes from './Home.module.css'
import Credittable from './Credittable'
import Agriculturetable from './Agriculturetable'
import Realestatetable from './Realestatetable'



const Homeactivities  = (props) => {
    const [name, setname]= useState()
    const [ iscredit, setiscredit ] = useState(true)
    const [ isagriculture, setisagriculture ] = useState(false)
    const [ isrealestate, setisrealestate ] = useState(false)
    const [ isinvestment, setisinvestment ] = useState(false)
    const [ transactions, settransactions ] = useState([])

    useEffect(() => {
        setname(localStorage.getItem("firstname") + " " + localStorage.getItem("lastname"))
      },[])

      const loadCredit = () => {
        setiscredit(true)
        setisagriculture(false)
        setisrealestate(false)

    }
    
    const loadAgriculture = () => {
        setiscredit(false)
        setisagriculture(true)
        setisrealestate(false)
    }
    
    const loadRealestate = () => {
        setiscredit(false)
        setisagriculture(false)
        setisrealestate(true)
    }

    async function loadInvestmentData() {
        console.log("running")
        let response
        let data
    
        try{
          response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/investment/index`,{
            method: "GET",     
            headers: {
              // 'Content-Type': 'application/x-www-form-urlencoded',
              'Content-Type': 'application/json',
              'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
              "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
                },
          })
          data = await response.json()
          console.log("data",data.data.savings)
          
          if(data.data.savings.length > 0 && data.data.savings.type !=="realestate"){
            setisinvestment(true)
            settransactions(data.data.savings)
          }
    
            
        } catch (error){
            console.log(error)
          return
        }
    
      }

      useEffect(() => {

        loadInvestmentData()
    }, [])
    




      
    return (
        <>
        <div className={classes.investmentbox}>
        <p className={classes.investmenttitle}>Recent activities</p>
        <div style={{marginTop:"10px",  width:""}}>
        <div className={classes.investmentbox2}>
        <div className={classes.personalprofileboxes}>

    <button onClick={loadCredit} 
    className={iscredit ? "profiletabbuttonsactive": "profiletabbuttons"}
    > 
    Credit</button>

    {/* <button onClick={loadAgriculture}  
    className={isagriculture ? "profiletabbuttonsactive": "profiletabbuttons"}
    > Agriculture</button> */}

    <button onClick={loadRealestate} 
    className={isrealestate ? "profiletabbuttonsactive": "profiletabbuttons"}
    > Real Estate</button>

</div>
{
    iscredit && (
        <Credittable  isinvestment={isinvestment} transactions={transactions}/>
    )
}

{
    isagriculture && (
        <Agriculturetable  isinvestment={isinvestment} transactions={transactions}/>
    )
}

{
    isrealestate && (
        <Realestatetable  isinvestment={isinvestment} transactions={transactions}/>
    )
}
    </div>








    
    </div>
        </div>
            
        </>
    )}

    export {Homeactivities as default}