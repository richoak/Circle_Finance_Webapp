import React, { useEffect, useState, useReducer, useRef} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './HomeTab.module.css'
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import { PaystackConsumer } from 'react-paystack';
// import "../js/main.js"


const config = {
  reference: (new Date()).getTime().toString(),
  email: "user@example.com",
  amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: 'pk_test_a691a79bfbb0b03670126b7ff03bb41744e5ebd4',
};

// you can call this function anything
const handleSuccess = (reference) => {
// Implementation for whatever you want to do with reference and after success call.
console.log(reference);
};

// you can call this function anything
const handleClose = () => {
// implementation for  whatever you want to do when the Paystack dialog closed.
console.log('closed')
}


const DebitcardsTab = () => {
  const router = useRouter();

  const componentProps = {
    ...config,
    text: 'Paystack Button Implementation',
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose
};

async function loadDebitCard() {
  let response
  let data

  try{
    response = await fetch('http://3.209.81.171:8000/api/v1/payment/cards',{
      method: "GET",     
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
        'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
        "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
          },
    })
    data = await response.json()
    console.log("data",data)
    // localStorage.setItem("ippisnumber", data.data.employmentDetails.IPPISNumber)
    // localStorage.setItem("jobtitle", data.data.employmentDetails.jobTitle)
    // localStorage.setItem("officeaddress", data.data.employmentDetails.officeAddress)
    // localStorage.setItem("organizationname", data.data.employmentDetails.organizationName)
    // localStorage.setItem("organizationtype", data.data.employmentDetails.organizationType)
    // localStorage.setItem("employmentidfrontcopy", data.data.employmentDetails.frontCopy)
    // localStorage.setItem("employmentidbackcopy", data.data.employmentDetails.backCopy)
    // localStorage.setItem("stateofoffice", data.data.employmentDetails.state)

      
  } catch (error){
      console.log(error)
    return
  }

}

useEffect(() => {
  loadDebitCard()
}, [])



    return (
      <>
      <div style={{marginTop:"40px", width:"400px"}}>
      <div className="row">
        <div className="col-md-2">
        <Image src="/images/mastercard.svg" layout="intrinsic" width="30" height="30" alt="" />
        </div>
        <div className="col-md-2">
          ****5890
        </div>
        <div className="col-md-4">
          <p style={{fontWeight:"bold"}}>- Unity Bank</p>
        </div>

        <div className="col-md-2">
        <div id="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="dots">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <ul>
            <li><a href="#" className="link">Delete</a></li>
      
          </ul>
        </div>
      </div>
    </div>
        </div>
      </div>

    </div>


    <div style={{marginTop:"40px", width:"400px"}}>
      <div className="row">
        <div className="col-md-2">
        <Image src="/images/add-circle.svg" layout="intrinsic" width="30" height="30" alt="" />
        </div>
        <div className="col-md-4">
        <PaystackConsumer {...componentProps} >
          {({initializePayment}) => 
        <p onClick={() => initializePayment(handleSuccess, handleClose)}  className={classes.addcard}>Add new card</p>
      }
        </PaystackConsumer> 
        </div>
      </div>
    
   

    </div>
      </>
   
    )
    
    
}


export {DebitcardsTab as default}