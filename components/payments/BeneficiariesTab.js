import React, { useEffect, useState, useReducer, useRef} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './Beneficiaries.module.css'
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import Pageloader from '../Pageloader';
// import "../js/main.js"


const BeneficiariesTab = () => {
  const router = useRouter();
  const [ stageone, setstageone ] = useState(true)
  const [ stagetwo, setstagetwo ] = useState(false)
  const [loading, setLoading ] = useState(false)
  const [notify, setnotify ] = useState()
  const [allbanks, setallbanks ] = useState()
  const [bankcode, setbankcode ] = useState()
  const [bankname, setbankname ] = useState()
  const [allsavedbanks, setallsavedbanks ] = useState([])


const accountnumberRef = useRef()
const bankRef = useRef()
const nameRef = useRef()



const [name, setname]= useState()
const [ isbankdetails, setisbankdetails ] = useState(false) 


useEffect(() => {
  setname(localStorage.getItem("firstname") + " " + localStorage.getItem("lastname"))
},[])



// GET ALL BANKS
async function loadAllBanks() {
  let response
  let data


  try{
    response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/payment/banks`,{
      method: "GET",     
      headers: {
        'Content-Type': 'application/json',
        'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
        "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
          },
    })
    data = await response.json()
    // console.log(data.data.banks)
    setallbanks(data.data.banks)
    $(".overlay").fadeOut(0);
  //  setallbanks(allbanks)

      
  } catch (error){

    return
  }

}

useEffect(() => {
  loadAllBanks()
}, [])
// GET ALL BANKS



// GET BENEFICIARIES DETAILS
async function loadBankData() {
  let response
  let data

  try{
    response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/payment/beneficiaries`,{
      method: "GET",     
      headers: {
        'Content-Type': 'application/json',
        'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
        "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
          },
    })
    data = await response.json()
  // console.log("data", data)
  setallsavedbanks(data.data.bankAccount)
    if(data.data.bankAccount.length >0){
      setisbankdetails(true)
  
    }
    else{
      setisbankdetails(false)
    }
    $(".overlay").fadeOut(0);
      
  } catch (error){
      console.log(error)
    return
  }

}

useEffect(() => {
  loadBankData()
}, [stageone, stagetwo])
// GET BENEFICIARIES DETAILS


// ADD BANK DETAILS
const addBank = () => {
  setstageone(false)
  setstagetwo(true)
}

async function submitBank() {
  setLoading(true)
  $(".overlay").fadeIn(1);

  let obj = {
    bankCode:bankcode,
    bankName:bankname,
    accountName:nameRef.current.value,
    accountNumber:accountnumberRef.current.value
  }

  // console.log("obj", obj)
  const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
  const data = jwt.sign(obj, privateKey)
  let response
  let responsedata
  try{
    response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/payment/banks`,{
      method: "POST",
       body: JSON.stringify({data}),
      headers: {
           'Content-Type': 'application/json',
           'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
           "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
          },
    })
    responsedata = await response.json()
          // console.log("data",responsedata)
     if (response.status == "400"){
      setLoading(false)
      setnotify(responsedata.message)
      $(".overlay").fadeOut(0);
      return
    }
    else{
      setnotify(responsedata.message)
      // router.push(`/payments`)
      setstageone(true)
      setstagetwo(false)
      setLoading(false)
      setnotify(false)
      $(".overlay").fadeOut(0);
    }
} catch (error){
      // console.log(error)
    return
  }
}

const saveChanges = () => {
if( accountnumberRef.current.value == ""
|| bankRef.current.value == ""
|| nameRef.current.value == ""
){
  setnotify("Missing fields")
}
else{
  setnotify("")
  submitBank()

}
}
// ADD BANK DETAILS


// RESOLVE BANK DETAILS
async function resolveBank() {
  setLoading(true)
  $(".overlay").fadeIn(1);
  let response
  let responsedata

  let obj = {
    bankCode:bankRef.current.value,
    accountNumber:accountnumberRef.current.value
  }


  const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
  const data = jwt.sign(obj, privateKey)

  try{
    response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/payment/resolve-account`,{
      method: "POST",     
      body: JSON.stringify({data}),
      headers: {
        'Content-Type': 'application/json',
        'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
        "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
          },
    })
    responsedata = await response.json()
    // console.log(responsedata)
    setnotify(responsedata.data.message)
    nameRef.current.value = responsedata.data.accountName
    setLoading(false)
    $(".overlay").fadeIn(0);
  } catch (error){
      console.log(error)
    return
  }

}

const handleResolveBank = (e) => {
  var id = e.nativeEvent.target.selectedIndex;
setbankname(e.nativeEvent.target[id].text)
  setbankcode(e.target.value)
  resolveBank()
}

// RESOLVE BANK DETAILS


return (

        <>
             <Pageloader/>
     {  stageone && isbankdetails &&  
     <div>
           {
      allsavedbanks.map((item) =>
      (
        <>
        <div className={classes.savedcard} style={{marginTop:"40px", width:"400px", paddingTop:"10px", paddingLeft:"10px"}}>
        <div className="row">
            <div className="col-md-12">
            <p style={{textTransform:"capitalize"}} className={classes.accountname}>{name} - Circle Finance</p>
            </div>
    
        </div>

        <div style={{marginTop:"20px"}}>
        <p style={{textTransform:"capitalize"}} className={classes.accountname2}>{item.accountNumber} </p>
        <p className={classes.accountnumber}>{item.bankName}</p>
        </div>
       
    </div>
    </>
      ))
    
    }
     </div>

 
          
          }

        {


        stageone && (
          <div style={{marginTop:"40px", width:"300px"}}>
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
          <p  className={classes.optiontitle}>Add bank account</p>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Account Number</Form.Label>
          <Form.Control ref={accountnumberRef}  type="text" maxlength="10" placeholder="Enter account number" />
          </div>
          </div>

          <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "0px", paddingBottom: "0px" }}>Your Bank</Form.Label>
          <select className="form-select" ref={bankRef}   onChange = {handleResolveBank} >
              {
                    allbanks.map((item) =>
                    (
                      <option key={item.id} value={item.bankCode} selected>{item.bankName}</option>
                    ))
                  
                  }
       
        </select>
            </div>
            </div>

            

            <div className="row"  style={{marginTop:"24px"}}>
            <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Account Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="" disabled />
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