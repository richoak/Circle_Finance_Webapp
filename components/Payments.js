import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';
import Image from 'next/image';

import Topbar from './Topbar';
import Sidebar from './Sidebar'

import "../js/main.js"
import $ from 'jquery'


import Pageloader from './Pageloader';

const Payments = () => {


      // TABS
  class Tabs extends React.Component{
    state ={
      activeTab: this.props.children[0].props.label
   
    }
    changeTab = (tab) => {
  
      this.setState({ activeTab: tab });
     
    };
    render(){
      
      let content;
      let buttons = [];
      return (
        <div>
          {React.Children.map(this.props.children, child =>{
            buttons.push(child.props.label)
            if (child.props.label === this.state.activeTab) content = child.props.children
          })}
           
          <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
          <div className="tab-content">{content}</div>
          
        </div>
      );
    }
  }
  
  const TabButtons = ({buttons, changeTab, activeTab}) =>{
    return(
        <div className="tab-buttons">
        {buttons.map(button =>{
           return <button key={button} className={ button === activeTab? 'tabactive': ''} onClick={()=>changeTab(button)}>{button}</button>
        })}
        </div>
      
    )
  }
  
  const Tab = props =>{
    return(
      <React.Fragment>
        {props.children}
      </React.Fragment>
    )
  }
   
// TABS

  useEffect(() =>{
    document.title = "Payments | Credisol"
},[])
 

  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")
  const [bankname, setbankname] = useState("")
  const [accountnumber, setaccountnumber] = useState("")
  const [firstname, setfirstname] = useState( "firstname")
    const [lastname, setlastname] = useState(  "lastname")
    const [providusaccountnumber, setprovidusaccountnumber] = useState(  "99xxxxxxxxx")

    

  useEffect(() => {
    var settingsthree = {
      "url": "https://credisol-app.herokuapp.com/v1/users/" + localStorage.getItem("userid") + "/",
      "method": "GET",
      "timeout": 0,
      
      "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
      error: function (xhr, status, error) {
        // console.log(xhr)
        if(xhr.status === 401){
          window.location.replace("/");
        }
      },
    }
    
    $.ajax(settingsthree).done(function (responsethree) {
      console.log(responsethree)
      if(responsethree.account_number === null || responsethree.bank_name === null){
        setfirstname(responsethree.first_name)
        setlastname(responsethree.last_name)
        setprovidusaccountnumber(responsethree.va_acc_num)
        $(".paymentbox2").css({ 'display': 'block' });
           $(".overlay").fadeOut(0);
      }

      else{
        $(".paymentbox1").css({ 'display': 'block' });
        $(".overlay").fadeOut(0);
        setbankname(responsethree.bank_name)
        setaccountnumber(responsethree.account_number)
        setprovidusaccountnumber(responsethree.va_acc_num)
        setfirstname(responsethree.first_name)
        setlastname(responsethree.last_name)
      }
      

    })
    
  })


  const addbank = () => {
    console.log("adding bank")
    if( document.getElementById("bank").value ===""){
      setnotify("Select your bank")
    }
  
    else if( document.getElementById("accountnumber").value ===""){
      setnotify("Input your account number")
    }
  

  
    else{
      $(".spinner-border").css({ 'display': 'inline-block' });
      var settingsthree = {
        "url": "https://credisol-app.herokuapp.com/v1/users/" + localStorage.getItem("userid") + "/",
        "method": "PATCH",
        "timeout": 0,
        "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
        "data":
        {
        "bank_name" : document.getElementById("bank").value,
        "account_number" : document.getElementById("accountnumber").value,
   
        
        },
        error: function (xhr, status, error) {
          console.log(xhr)
          if(xhr.status === 400){
            setnotify("Invalid account number")
          }
        },
      }
      
      $.ajax(settingsthree).done(function (responsethree) {
        console.log(responsethree)
        localStorage.setItem("accountnumber", responsethree.account_number)
        window.location.replace("/payments");
      })
    }
  
  
  }
  


  
    return (
      
      <div>
        <Pageloader/>
          <div className="row thesidebarrow">
          <div className="col-md-2 thesidebar">
          <Sidebar/>

</div>

              <div className="col-md-10">
              <Topbar/>

           
<div className="row">
 
    <div className="col-md-10 tabs webapptabs paymenttabs">


    <div className="row director1row">
    <div className="col-md-6">
    <p className="wallethead" >Your Credisol Wallet Details </p>
        <div className="row">
            {/* <div className="col-md-2 col-3">
            <Image className="walleticon" src="/images/ppicture.svg"/>
            </div> */}

            <div className="col-md-9 col-9">
              
               
               
            </div>

            <div className="col-md-4 col-4">
            <p className="walletname">{firstname} {lastname}</p>
               
            </div>

            <div className="col-md-4 col-3">
            <p className="walletname">Providus Bank</p>
            </div>

            <div className="col-md-3 col-3">
            <p className="walletnumber2">{providusaccountnumber}</p>
            </div>

        </div>
        <hr/>

    </div>
 
    <div className="col-md-6">
    <p className="wallethead walletheadmobile" >Your Bank Details </p>
   
    <div className="paymentbox1">
    <div className="row">
            {/* <div className="col-md-1 col-1">
            <Image width="40px" className="" src="/images/ppicture.svg"/>
            </div> */}

            <div className="col-md-4 col-4">
            <p className="walletname">{firstname} {lastname}</p>
           
               
            </div>

            <div className="col-md-4 col-3">
            <p className="walletname">{bankname}</p>
            </div>

            <div className="col-md-3 col-3">
            <p className="walletnumber2">{accountnumber}</p>
            </div>

            {/* <div className="col-md-1 col-1">
                <p className="walletname">    <Image src="/images/hamburger.svg"/></p>
             
            </div> */}
  
        </div>
        <hr/>

        </div>

        <div className="paymentbox2">
        {/* <p  className="bankdetailstitle">Bank details</p>
        <hr/> */}

        <div className="form-group">
  <label htmlFor="sel1" style={{color:"#666666",paddingTop:"0px",paddingBottom:"10px"}}>Select Your Bank</label>
  <select className="form-control" id="bank">
    <option>- Select Bank -</option>
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


        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"20px",paddingBottom:"0px"}}>Your Account Number </Form.Label>
      <Form.Control   id="accountnumber" width="60px" type="number" placeholder="Input Account Number" />
  </Form.Group>

        <p className="verifyname" >{firstname} {lastname} </p>
        <p className="" style={{ color:"#DD3737", fontWeight:"bold",textAlign:"center"}}>{notify}</p>
<p className="" style={{marginTop:"10px", textAlign:"center"}} >
<button  className="editloanbutton" onClick={ addbank}>Add bank account
<div className="spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>
</button>
</p>
  
{/* <p className="security">     <Image src="/images/lock2.svg"/> Your details are being transferred through a secured encyrpted channel.</p> */}

  
        
    
        </div>



        </div>
</div>


</div>




</div>









                  </div>
          </div>
         
   
 

    </div>

  


    )
    
    
}


export {Payments as default}