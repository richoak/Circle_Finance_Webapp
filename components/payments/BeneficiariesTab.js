import React, { useEffect, useState, useReducer, useRef} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './HomeTab.module.css'
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
// import "../js/main.js"


const BeneficiariesTab = () => {
  const router = useRouter();
  const [ stageone, setstageone ] = useState(true)
  const [ stagetwo, setstagetwo ] = useState(false)
  const [loading, setLoading ] = useState(false)
  const [notify, setnotify ] = useState()
const accountnumberRef = useRef()
const bankRef = useRef()



const [name, setname]= useState()

useEffect(() => {
  setname(localStorage.getItem("firstname") + " " + localStorage.getItem("lastname"))
},[])

const addBank = () => {
  setstageone(false)
  setstagetwo(true)
}

async function submitBank() {
  setLoading(true)

  let obj = {
    "accountNumber":  accountnumberRef.current.value,
    "bank": bankRef.current.value,
  }
  console.log("obj", obj)
  const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
  const data = jwt.sign(obj, privateKey)
  let response
  let responsedata
  try{
    response = await fetch("http://3.209.81.171:8000/api/v1/account/add-beneficiary",{
      method: "POST",
       body: JSON.stringify({data}),
      headers: {
           'Content-Type': 'application/json',
           'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
           "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
          },
    })
    responsedata = await response.json()
          console.log("data",responsedata)
     if (response.status == "400"){
      setLoading(false)
      setnotify(responsedata.message)
   
      return
    }
    else{
      setnotify(responsedata.message)
      // router.push(`/payments`)
      setstageone(true)
      setstagetwo(false)
    }
} catch (error){
      // console.log(error)
    return
  }
}
const saveChanges = () => {
if( accountnumberRef.current.value == ""
|| bankRef.current.value == ""
){
  setnotify("Missing fields")
}
else{
  setnotify("")
  submitBank()

}
}



return (

        <>
                    <div className={classes.savedcard} style={{marginTop:"40px", width:"400px", paddingTop:"10px", paddingLeft:"10px"}}>
                        <div className="row">
                            <div className="col-md-12">
                            <p style={{textTransform:"capitalize"}} className={classes.accountname}>{name} - Circle Finance</p>
                            </div>
                    
                        </div>

                        <div style={{marginTop:"20px"}}>
                        <p style={{textTransform:"capitalize"}} className={classes.accountname}>0221117895 </p>
                        <p className={classes.accountnumber}>Wema Bank</p>
                        </div>
                       
                    </div>
        {
        stageone && (
          <div style={{marginTop:"40px", width:"400px"}}>
          <p  className={classes.addbank}>Add bank account</p>
          <p onClick={addBank} style={{textAlign:"center", cursor:"pointer"}}>
          <Image src="/images/add-circle.svg" layout="intrinsic" width="30" height="30" alt="" />
          </p>
          </div>
        )
      }

{
        stagetwo && (
          <div style={{marginTop:"40px", width:"400px"}}>
                       {/* <div className={classes.goback}>
              <Link className="" href="/account"  eventKey="2" >
              <Image style={{cursor:"pointer"}} src="/images/back.svg" width="20" height="20" layout="intrinsic" alt="" />
              </Link>
              </div> */}

          <p  className={classes.optiontitle}>Add bank account</p>
         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Account Number</Form.Label>
          <Form.Control ref={accountnumberRef}  type="text" placeholder="Enter account number" />
          </div>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "20px", paddingBottom: "0px" }}>Your Bank</Form.Label>
          <select className="form-select" ref={bankRef} >
          <option selected>- Select -</option>
          <option value="citibank">Citibank</option>
          <option value="diamond">Diamond Bank</option>
          <option value="ecobank">Ecobank</option>
          <option value="fidelity">Fidelity Bank</option>
          <option value="firstbank">First Bank</option>
          <option value="fcmb">First City Monument Bank (FCMB)</option>
          <option value="gtb">Guaranty Trust Bank (GTB)</option>
          <option value="heritage">Heritage Bank</option>
          <option value="keystone">Keystone Bank</option>
          <option value="polaris">Polaris Bank</option>
          <option value="providus">Providus Bank</option>
          <option value="stanbic">Stanbic IBTC Bank</option>
          <option value="standard">Standard Chartered Bank</option>
          <option value="sterling">Sterling Bank</option>
          <option value="suntrust">Suntrust Bank</option>
          <option value="union">Union Bank</option>
          <option value="uba">United Bank for Africa (UBA)</option>
          <option value="unity">Unity Bank</option>
          <option value="wema">Wema Bank</option>
          <option value="zenith">Zenith Bank</option>
       
        </select>
            </div>
         </div>

         <p className="" style={{ textAlign: "center",paddingTop:"40px", color: "#DD3737", fontWeight: "bold" }}>{notify}</p>

<button onClick={saveChanges}   className={classes.continuebutton}>Add bank account
         {loading && (
        <div className= {`spinner-border spinner-border-sm spinner`} role="status">
       <span className="sr-only">Loading...</span>
       </div>
       )}

         </button>
         </div>
        )
      }
      
        </>
        
)
}


export {BeneficiariesTab as default}