import React, { useEffect, useState} from 'react';
import classes from './Home.module.css'
import Credittable from './Credittable'
import Agriculturetable from './Agriculturetable'
import Realestatetable from './Realestatetable'



const Homeactivities  = () => {
    const [name, setname]= useState()
    const [ iscredit, setiscredit ] = useState(true)
    const [ isagriculture, setisagriculture ] = useState(false)
    const [ isrealestate, setisrealestate ] = useState(false)

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

    <button onClick={loadAgriculture}  
    className={isagriculture ? "profiletabbuttonsactive": "profiletabbuttons"}
    > Agriculture</button>

    <button onClick={loadRealestate} 
    className={isrealestate ? "profiletabbuttonsactive": "profiletabbuttons"}
    > Real Estate</button>

</div>
{
    iscredit && (
        <Credittable/>
    )
}

{
    isagriculture && (
        <Agriculturetable/>
    )
}

{
    isrealestate && (
        <Realestatetable/>
    )
}
    </div>








    
    </div>
        </div>
            
        </>
    )}

    export {Homeactivities as default}