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
import Pageloader from '../Pageloader';
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
    $(".overlay").fadeIn(1);
    let response
    let responsedata

    let obj = {
      reference:cardreference,
    }
  
  
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
  
    try{
      response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/payment/cards`,{
        method: "POST",     
        body: JSON.stringify({data}),
        headers: {
          'Content-Type': 'application/json',
          'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
          "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
            },
      })
      responsedata = await response.json()
      setnotify(responsedata.message)
      $(".overlay").fadeOut(0);
    } catch (error){
        console.log(error)
      return
    }
  
  }

  const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_65adc04fd6396de1e9600816bb332b6c1c1ef5a5',
  };
  
  const handleSuccess = (reference) => {
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
    response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/payment/cards`,{
      method: "GET",     
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
        'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
        "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
          },
    })
    data = await response.json()
    console.log(data)
    setallsavedcards(data.data.cards)
    if(data.data.cards.length >0){
      setiscarddetails(true)
  
    }
    else{
      setiscarddetails(false)
    }

    $(".overlay").fadeOut(0);
      
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
           <Pageloader/>
 { 
  iscarddetails &&   
  <>
          {
      allsavedcards.map((item) =>
      (
        <>
    <div style={{marginTop:"40px", width:"400px"}}>
      <div className="row">
        <div className="col-md-2">
        <Image 
        // src="/images/mastercard.svg"
                  src= {item.brand === "visa" ? "/images/visa.svg" : "/images/mastercard.svg"}

         layout="intrinsic" width="30" height="30" alt="" />
        </div>
        <div className="col-md-2">
          ****{item.last4}
        </div>
        <div className="col-md-4">
          <p style={{fontWeight:"bold"}}>- {item.bank}</p>
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
    </>
      ))}
  </>

    
    }


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