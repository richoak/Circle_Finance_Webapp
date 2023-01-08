import React, { useEffect, useState, useRef, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from './Topbar';
import Sidebar from './Sidebar'
import Image from 'next/image';
import { useRouter } from 'next/router';
import "../js/main.js"
import $ from 'jquery'

const Repay = () => {



  const [notify, setnotify] = useState("")
  const [amount, setAmount] = useState("")
  const [duration, setDuration] = useState("")
  const [loantype, setLoanType] = useState("")
  const [startDate, setStartDate] = useState("")
  const [loanID, setLoanID] = useState("")
const [availableBalance, setAvailableBalance] = useState()
const [ walletBalance, setWalletBalance] = useState(0)
const [ outstandingBalance, setOutstandingBalance ] = useState(0)
const [providusID, setProvidusID] = useState("")
const router = useRouter();
const amountRef = useRef()

  useEffect(() => {
    var pathname = window.location.href;
    let params = (new URL(pathname)).searchParams;
    var loanid = params.get('id')
     var settingsthree = {
        "url": "https://credisol-main.herokuapp.com/v1/loans/all/" + loanid,
        "method": "GET",
        "timeout": 0,
        "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
        error: function (xhr, status, error) {
        },
      }

      $.ajax(settingsthree).done(function (responsethree) {
        console.log(responsethree)
        var defaultDates = responsethree.created_at
        var d = new Date(defaultDates).toString();
        var actualdate = d.split(' ').splice(0, 5).join(' ')
        var actualdate2 = d.split(' ').splice(3, 1).join(' ')
      
        setAmount(parseInt(responsethree.monthly_repayment).toLocaleString())
        setDuration(responsethree.duration)
        setLoanType(responsethree.offer_name)
        setStartDate(actualdate)
        setLoanID(responsethree.loan_id)
        setAvailableBalance(localStorage.getItem("walletbalance"))
        setProvidusID(localStorage.getItem("providusid"))
        setOutstandingBalance(responsethree.balance)

      
      })

      var pid = localStorage.getItem("providusid")

      var settingsfour = {
        "url": `https://credisol-main.herokuapp.com/v1/wallet/${localStorage.getItem("providusid")}/virtual_accounts/`,
        "method": "GET",
        "timeout": 0,
        "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
        error: function (xhr, status, error) {
        },
      }

      $.ajax(settingsfour).done(function (responsefour) {
        console.log(responsefour)
        setWalletBalance(responsefour.balance)
      })


  })





  const repay =()=>{
    $(".spinnermonthly").css({ 'display': 'inherit' });
    // if(amount <= 0){
    //   setnotify("An error occured, Please try again")
    //   $(".spinner-border").css({ 'display': 'none' });
    //   return
    // }

     if(amount < availableBalance){
      setnotify("You do not have enough money to perform the trnsaction")
      $(".spinnermonthly").css({ 'display': 'none' });
      return
    }

    const obj ={
      
      "amount": amount,
      "remarks": "internal inflow",
      "sender" : providusID,
      "loan_id":loanID
      
  }
  
    console.log(obj)
    var settingsthree = {
      url: 'https://credisol-main.herokuapp.com/v1/wallet/value_transfer/',
      "method": "POST",
      "timeout": 0,
      "headers": {  'Content-Type': 'application/json',
      "Authorization": "Bearer " + localStorage.getItem("access_token", )},
      "data": JSON.stringify(obj)
  
      
      ,
      error: function (xhr, status, error) {
        console.log(xhr)
        setnotify("An error occured, Please try again")
           $(".spinnermonthly").css({ 'display': 'none' });
        // if(xhr.status === 401){
        //   window.location.replace("/");
        // }
      },
    }

    $.ajax(settingsthree).done(function (responsethree) {
      console.log(responsethree)
      if(responsethree.error_code){
        setnotify(responsethree.message)
        $(".spinnermonthly").css({ 'display': 'none' });
      }
      else{
        
        setnotify("Repayment made successfully, Redirecting...")
        $(".spinnermonthly").css({ 'display': 'none' });
        setTimeout(() => {
          router.push('/home');
        }, 2000);
      }})
      
   

  }

  const repayAll =()=>{
    $(".spinnerall").css({ 'display': 'inherit' });
    // if(amount <= 0){
    //   setnotify("An error occured, Please try again")
    //   $(".spinner-border").css({ 'display': 'none' });
    //   return
    // }

     if(outstandingBalance < availableBalance){
      setnotify("You do not have enough money to perform the trnsaction")
      $(".spinner-border").css({ 'display': 'none' });
      return
    }

    const obj ={
      
      "amount": outstandingBalance,
      "remarks": "internal inflow",
      "sender" : providusID,
      "loan_id":loanID
      
  }
  
    console.log(obj)
    var settingsthree = {
      url: 'https://credisol-main.herokuapp.com/v1/wallet/value_transfer/',
      "method": "POST",
      "timeout": 0,
      "headers": {  'Content-Type': 'application/json',
      "Authorization": "Bearer " + localStorage.getItem("access_token", )},
      "data": JSON.stringify(obj)
  
      
      ,
      error: function (xhr, status, error) {
        console.log(xhr)
        setnotify("An error occured, Please try again")
           $(".spinnerall").css({ 'display': 'none' });
        // if(xhr.status === 401){
        //   window.location.replace("/");
        // }
      },
    }

    $.ajax(settingsthree).done(function (responsethree) {
      console.log(responsethree)
      if(responsethree.error_code){
        setnotify(responsethree.message)
        $(".spinnerall").css({ 'display': 'none' });
      }
      else{
        
        setnotify("Repayment made successfully, Redirecting...")
        $(".spinnerall").css({ 'display': 'none' });
        setTimeout(() => {
          router.push('/home');
        }, 2000);
      }})
      
   

  }




  
    return (
      
      <div>
          <div className="row thesidebarrow">

          <div className="col-md-2 thesidebar">
          <Sidebar/>

</div>

              <div className="col-md-10">
              <Topbar/>

           
<div className="row">
 
<div className="col-md-5 col-10 repaystepone">

{/* <Link className="goback" href="/home"  eventKey="2" activeClassName="is-active" >
              <p className="loansareavailable2 " style={{paddingLeft:"0px", cursor:"pointer"}}>
                <Image className="" src="/images/arrow-left.svg" width="24" height="24"/> <span className="gobackp">Back</span></p>
              </Link> */}

              <Link className="goback" href="/home" eventKey="2" activeClassName="is-active" >
              <p className="loansareavailable2 " style={{paddingLeft:"0px", cursor:"pointer"}}>
                {/* <Image className="" style={{marginTop:"7px"}} src="/images/arrow-left.svg" height="24" width="24"/>  */}
                <span className=""><i className="fas fa-long-arrow-alt-left" style={{color:"#DD3737"}}></i> Back</span>
                </p>
              </Link>
       



<p  className="loansareavailablenote2 summarynote">Here is a summary of your loan application</p>
<div className="row summarybox">
    <div className="col-md-6 col-6 summarydiv1">
        <p  className="loansareavailablenote2">Repayment amount</p>
        <p className="summaryhead">&#x20A6;{amount}</p>
        <p  className="loansareavailablenote2">Loan duration</p>
        <p className="summaryhead">{duration} Month(s)</p>
        <p  className="loansareavailablenote2">Available Balance</p>
        <p className="summaryhead">&#x20A6;{availableBalance} </p>
      
    </div>

    <div className="col-md-6 col-6"style={{paddingLeft:"50px"}}>
    <p  className="loansareavailablenote2">Outstanding Balance</p>
        <p className="summaryhead">&#x20A6; {outstandingBalance}</p>
    {/* <p  className="loansareavailablenote2">Loan Type</p>
    <p className="summaryhead">{loantype}</p> */}
    <p  className="loansareavailablenote2">Start Date</p>
    <p className="summaryhead">{startDate}</p>
    <p  className="loansareavailablenote2">Loan ID</p>
    <p className="summaryhead">{loanID}</p>
    
        </div>
</div>
{/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "10px", paddingBottom: "5px" }}>Amount to repay (&#8358;) </Form.Label>
                <Form.Control id="loanamount" 
                width="60px" 
                type="number" 
                placeholder="Input Amount" 
                value= {amount} 
                ref={amountRef} 
                disabled 
                />
              </Form.Group> */}
<p className="" style={{ color:"#DD3737", fontWeight:"bold",textAlign:"center"}}>{notify}</p>

  <p className="" style={{textAlign:"center"}} >
<button  onClick={repay} className="loanbutton" >Repay monthly balance
<div className="spinnermonthly spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>
</button>

<button  onClick={repayAll} className="loanbutton" >Clear off loan
<div className="spinnerall spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>
</button>
</p>




</div>


</div>









                  </div>
          </div>
         
   
 

    </div>

  


    )
    
    
}


export {Repay as default}