import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from './Topbar';
import Sidebar from './Sidebar'

import "../js/main.js"
import $ from 'jquery'

const Repay = () => {



  const [notify, setnotify] = useState("")
  const [amount, setAmount] = useState("")
  const [duration, setDuration] = useState("")
  const [loantype, setLoanType] = useState("")
  const [startDate, setStartDate] = useState("")


  useEffect(() => {
    var pathname = window.location.href;
    let params = (new URL(pathname)).searchParams;
    var loanid = params.get('id')
     var settingsthree = {
        "url": "https://credisol-app.herokuapp.com/v1/loans/all/" + loanid,
        "method": "GET",
        "timeout": 0,
        "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
        error: function (xhr, status, error) {
        },
      }

      $.ajax(settingsthree).done(function (responsethree) {
        console.log(responsethree)
        setAmount("N" + parseInt(responsethree.balance).toLocaleString())
        setDuration(responsethree.duration)
        setLoanType(responsethree.offer_name)
        setStartDate(responsethree.created_at)

        console.log(amount)
      })
  },[])



  
    return (
      
      <div>
          <div class="row thesidebarrow">

          <div class="col-md-2 thesidebar">
          <Sidebar/>

</div>

              <div class="col-md-10">
              <Topbar/>

           
<div className="row">
 
<div className="col-md-5 repaystepone">

<Link className="goback" href="/home"  eventKey="2" activeClassName="is-active" >
              <p class="loansareavailable2 " style={{paddingLeft:"0px", cursor:"pointer"}}>
                <img className="" src="/images/arrow-left.svg"/> <span class="gobackp">Back</span></p>
              </Link>
       



<p  className="loansareavailablenote2 summarynote">Here is a summary of your loan application</p>
<div className="row summarybox">
    <div className="col-md-6 summarydiv1">
        <p  className="loansareavailablenote2">Loan amount</p>
        <p class="summaryhead">{amount}</p>
        <p  className="loansareavailablenote2">Loan duration</p>
        <p class="summaryhead">{duration} Month(s)</p>
        {/* <p  className="loansareavailablenote2">Loan repayment</p> */}
        {/* <p class="summaryhead">N204,000.00</p> */}
    </div>

    <div className="col-md-6"style={{paddingLeft:"50px"}}>
    <p  className="loansareavailablenote2">Loan Type</p>
    <p class="summaryhead">{loantype}</p>
    <p  className="loansareavailablenote2">Start Date</p>
    <p class="summaryhead">{startDate}</p>
    
        </div>
</div>
  <p class="" style={{textAlign:"center"}} >
<button  className="loanbutton" >Repay
<div class="spinner-border spinner-border-sm" role="status">
<span class="sr-only">Loading...</span>
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