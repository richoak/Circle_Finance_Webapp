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


const DebitcardsTab = () => {
  const router = useRouter();
  const [ iscarddetails, setiscarddetails ] = useState(false) 
  // const [ cardreference, setcardreference ] = useState()
  const [allsavedcards, setallsavedcards ] = useState([])
  // const [loading, setLoading ] = useState(false)
  const [notify, setnotify ] = useState()


  async function postCard(cardreference) {
    // setLoading(true)
    let response
    let responsedata
    console.log("card reference", cardreference)
    let obj = {
      reference:cardreference,
    }
  
  
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    console.log(obj)
  
    try{
      response = await fetch('http://3.209.81.171:8000/api/v1/payment/cards',{
        method: "POST",     
        body: JSON.stringify({data}),
        headers: {
          'Content-Type': 'application/json',
          'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
          "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
            },
      })
      responsedata = await response.json()
      console.log(responsedata)
      setnotify(responsedata.message)
      // setLoading(false)
    } catch (error){
        console.log(error)
      return
    }
  
  }

  const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_bb7131a279680c8dbc99a66390bc7542fbd958e1',
  };
  
  const handleSuccess = (reference) => {
  console.log(reference.reference);
  var reference2 = reference.reference
  // setcardreference(reference.reference)
  postCard(reference2)
  };
  
  // you can call this function anything
  const handleClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  // console.log('closed')
  }

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
    setallsavedcards(data.data.cards)
    if(data.data.cards.length >0){
      setiscarddetails(true)
  
    }
    else{
      setiscarddetails(false)
    }


      
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
 {  iscarddetails &&   <div style={{marginTop:"40px", width:"400px"}}>
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

    </div>}


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
    
            <p className="" style={{ textAlign: "",paddingTop:"20px", paddingLeft:"10px", color: "#DD3737", fontWeight: "bold" }}>{notify}</p>


    </div>
      </>
   
    )
    
    
}


export {DebitcardsTab as default}