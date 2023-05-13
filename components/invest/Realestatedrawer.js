import React, { useEffect, useState, useReducer} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './Credit.module.css'
import { animated, useTransition } from "react-spring";
import { PaystackConsumer } from 'react-paystack';

// import Drawer from "./Drawer";

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

const Realestatedrawer = () => {
    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handleSuccess(reference),
        onClose: handleClose
    };

    const [show, setShow] = useState();
    const [name, setname] = useState();
    const [amount, setamount] = useState(0);
    const [stageone, setstageone] = useState(true);
    const [stagetwo, setstagetwo] = useState(false);
    const [stagethree, setstagethree] = useState(false);
    const [stagefour, setstagefour] = useState(false);
    const [stagefive, setstagefive] = useState(false);

    const [ isWallet, setisWallet ] = useState(true) 
    const [ isCard, setisCard ] = useState(false) 

    const transitions = useTransition(show, null, {

        from: { position: "fixed", opacity: 0, width: 0 },
        enter: { opacity: 1, width: 1000 },
        leave: { opacity: 0, width: 0 }
      });
    const [ email, setemail] = useState()
    const [loading, setLoading ] = useState(false)
    const [notify, setnotify ] = useState()
    
    const gohome = () => {

        window.location.replace("/home");
      }

    useEffect(() => {
    setname(localStorage.getItem("firstname") + " " + localStorage.getItem("lastname") )
    },[])

    const copyClipboard = () => {
        navigator.clipboard.writeText('0127602360')
      }
    
  
    const loadWallet = () => {
        setisWallet(true)
        setisCard(false)
    }

    const loadCard = () => {
        setisWallet(false)
        setisCard(true)
    }

    const minus = () => {
        setamount(amount - 1)
    }

    const add = () => {
        setamount(amount + 1)
    }

    const gotostagetwo = () => {
        setstageone(false)
        setstagetwo(true)
    }

    const gobacktostageone = () => {
        setstageone(true)
        setstagetwo(false)
    }

    const gotostagethree = () => {
        setstageone(false)
        setstagetwo(false)
        setstagethree(true)
    }


    const gotostagefour = () => {
        setstageone(false)
        setstagetwo(false)
        setstagethree(false)
        setstagefour(true)
    }

    const gotostagefive = () => {
        setstageone(false)
        setstagetwo(false)
        setstagethree(false)
        setstagefour(false)
        setstagefive(true)
    }


      return (
        <>
      
      <div className="row">
                    <div className="col-md-6">
                        <div className="row" style={{marginTop:"38px"}}>

                            <div className="col-md-3">
                            <p>Real estate</p>  
                            </div>

                            <div className="col-md-6">
                            <p className={classes.investmentrate2}>9.4% Annual Return.</p>
                            </div>

                            <div className="col-md-12">
                            <p className={classes.investmentinfodrawer}>
                            This plan offers the opportunity to make monthly installments towards a particular 
goal. The least monthly balance to invest is N5000 and you can earn up to 12% in interest (Compounded monthly) per annum. </p>
<p className={classes.investmentinfodrawer}>This plan is recommended for salary earners who would love to invest towards attaining a financial goal.
                            </p>
                            </div>
                
                        </div>
                     
                    </div>
    <div className="col-md-6">
{  stageone && 
    <>
<div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "0px", paddingBottom: "0px" }}>Financial Goal</Form.Label>
          <select className="form-select" >
          <option value="">- Select -</option>
          <option value="male">Single</option>
          <option value="female">Married</option>       
        </select>
          </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "0px", paddingBottom: "0px" }}>Frequency</Form.Label>
          <select className="form-select" >
          <option value="">- Select -</option>
          <option value="male">Single</option>
          <option value="female">Married</option>       
        </select>
          </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "0px", paddingBottom: "0px" }}>IInvestment Duration</Form.Label>
          <select className="form-select" >
          <option value="">- Select -</option>
          <option value="male">Single</option>
          <option value="female">Married</option>       
        </select>
          </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "0px", paddingBottom: "0px" }}>Method Of Interest Payout</Form.Label>
          <select className="form-select" >
          <option value="">- Select -</option>
          <option value="male">Single</option>
          <option value="female">Married</option>       
        </select>
          </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "0px", paddingBottom: "0px" }}>Amount</Form.Label>
          <div className="row">
            <div className="col-md-2">
                <span className={classes.minus} onClick={minus}>  
                <Image style={{cursor:"pointer"}} src="/images/Subtract.svg" width="40" height="40" layout="intrinsic" alt="" />
                </span>
            
            </div>
            <div className="col-md-8">
            <Form.Control type="text"className={classes.inputamount} value={amount}/>
            </div>
            <div className="col-md-2" onClick={add}>
            <Image style={{cursor:"pointer"}} src="/images/Add.svg" width="40" height="40" layout="intrinsic" alt="" />

            </div>
          </div>
          
          </div>
          <hr style={{color:"#7D8799"}}/>
          <p>
            <span style={{marginTop:"10px"}}>
            <Image src="/images/info2.svg" width="10" height="10" layout="intrinsic" alt="" />
            </span>
            <span className={classes.totalroi}>Total ROI after the completed cycle</span>
            <span className={classes.totalamount}> N500,000,000</span>
          </p>


          <button onClick={gotostagetwo} className={classes.continuebutton}>Continue
                  </button>
         </div>
         </>
         }

         {
            stagetwo && 
            <>
                           <div className="col-md-12" style={{marginTop:"30px"}}>
                           <p>Investment Summary</p>  
                            <p className={classes.investmentinfodrawer}>
                            This investment plan is targeted at HNIs with a goal to optimizing value from their finances.</p>
                      
                            </div>
                            <div className="row summarybox">
    <div className="col-md-6 col-6 summarydiv1">
        <p  className="loansareavailablenote2">Investment amount</p>
        <p className="summaryhead">N300,000</p>

        <p  className="loansareavailablenote2">Investment rate</p>
        <p className="summaryhead">16% per annum</p>
     
        <p  className="loansareavailablenote2">Total payout balance</p>
        <p className="summaryhead">N5,000,000</p>

        <p  className="loansareavailablenote2">Monthly interest</p>
        <p className="summaryhead">N56,045,300.12</p>
    </div>

    <div className="col-md-6 col-6 summarybox2">
    <p  className="loansareavailablenote2">Investment amount</p>
        <p className="summaryhead">N300,000</p>

        <p  className="loansareavailablenote2">Investment rate</p>
        <p className="summaryhead">16% per annum</p>
     
        <p  className="loansareavailablenote2">Total payout balance</p>
        <p className="summaryhead">N5,000,000</p>

        <p  className="loansareavailablenote2">Monthly interest</p>
        <p className="summaryhead">N56,045,300.12</p>
        </div>
</div>

<div style={{display:"inline-block", marginTop:"20px"}}>

<button  onClick={gobacktostageone} className={classes.backbutton}>&lt; Make Changes</button>

<button onClick={gotostagethree} className={classes.nextstepbutton}>Continue</button>
</div>

            </>
         }

{  stagethree && 
    <>
<div className="row"  style={{marginTop:"24px"}}>
        <p>Hi {name},</p>
        <p className={classes.investmentinfodrawer}>
        Before you proceed to payment, you must accept the Rich Oak Product`s Terms of Agreement and append the e-signature
            </p>
        <hr style={{marginTop:"20px"}}/>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "0px", paddingBottom: "0px" }}>Your First and Last Name</Form.Label>
          <Form.Control type="text" value={name} disabled/>
          </div>
          <p style={{paddingTop:"30px"}} className={classes.investmentinfodrawer}>By signing this form electronically, you are agreeing to the <span style={{fontWeight:"bold"}}>Terms and Conditions</span> stated there in</p>
     
          <button onClick={gotostagefour} className={classes.continuebutton}>Continue
                  </button>
     
     
         </div>

    
         </>
         }

        {
            stagefour && 
            <>
                           <div className="col-md-12" style={{marginTop:"30px"}}>
                           <p>Select Payment Method</p>  
                            </div>
                            <div className={classes.personalprofileboxes}>

                            <button onClick={loadWallet} 
                            className={isWallet ? "profiletabbuttonsactive": "profiletabbuttons"}
                            > 
                            My wallet</button>

                            <button onClick={loadCard}  
                            className={isCard ? "profiletabbuttonsactive": "profiletabbuttons"}
                            > Debit card</button>
                    
                        {
                            isWallet && (
                                <>
                                   <div className="row">
                                           <div className="col-md-12">
                                            <div className={classes.walletdiv}>
                                                <div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                        <p className={classes.availablebalance}>Available balance</p>
                                                            <p>
                                                                <span className={classes.preamount}>N</span>
                                                                <span className={classes.amount}>2,157,000</span>
                                                                <span className={classes.preamount}>.56</span>
                                                            </p>
                                                        </div>
                                                        
                                                        <div className="col-md-6">
                                                            <p style={{textAlign:"center"}}><Image src="/images/providusbank.svg" layout="intrinsic" width="30" height="30" alt="" /></p> 
                                                            <p style={{textAlign:"center"}} className={classes.bankname}>PROVIDUS BANK</p>
                                                        </div>
                                                    </div>

                                                


                                                    <div style={{marginTop:"60px"}}>
                                                    <p style={{textTransform:"capitalize"}} className={classes.accountname}>{name} - Circle Finance</p>
                                                    <p className={classes.accountnumber}>0221117895 <Image className={classes.copyicon} onClick={copyClipboard} src="/images/copy.svg" layout="intrinsic" width="20" height="20" alt=""/></p>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col-md-2">
                                        <Image src="/images/warning.svg" layout="intrinsic" width="30" height="30" alt="" />
                                        </div>
                                        <div className="col-md-10">
                                        <p className={classes.lowbaltitle}>Your available balance is low</p>
                                        <p className={classes.lowbalsubtitle}>Kindly top up your wallet with additional ₦2,445,098 to complete your transaction for this order.</p>
                                        </div>
                                    </div>
                                
                                </div>
                                </>
                                   
                            )
                        }

                        {
                            isCard && (
                                <>
                                <div style={{marginTop:"40px", width:"400px"}}>
                                
                                <div className="row">

                                <div className="col-md-1">
                                    <div style={{marginTop:"-7px"}}>
                                    <input type="radio" id=""/>
                                    </div>
                                    
                                  </div>

                                  <div className="col-md-2">
                                  <Image src="/images/mastercard.svg" layout="intrinsic" width="25" height="25" alt="" />
                                  </div>

                                  <div className="col-md-2">    
                                    <p style={{fontWeight:"bold", color: "#687181", fontSize:"16px"}}>****5890</p>
                                  </div>

                                  <div className="col-md-6">
                                    <p style={{fontWeight:"bold", color: "#323740", fontSize:"16px"}}>- Unity Bank</p>
                                  </div>
                                <hr />
                          
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
                                <div style={{marginTop:"40px", width:"400px"}}>
                                <div className="row">
                                        <div className="col-md-1">
                                        <Image src="/images/lock.svg" layout="intrinsic" width="30" height="30" alt="" />
                                        </div>
                                        <div className="col-md-11">
                                        <p className={classes.cardtitle}>Your debit card information is secure</p>
                                        <p className={classes.cardsubtitle}>
                                        Arcu turpis elit vitae sit pharetra fringilla egestas sed. Lobortis mi consequat et sit porttitor rutrum.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                </>
                            )
                        }
                  
                            </div>
    


                            <button onClick={gotostagefive} className={classes.continuebutton}>Make payment</button>
            </>
         }

        {
            stagefive && 
            <>
             <div style={{marginTop:"40px", width:"400px"}}>
                        <div className="successfulbox">
<h1 className="letsgetstartedstepheading fordesktoponly">
             
                </h1>
                <p style={{textAlign:"center"}}><Image src="/images/badge-check.svg" alt="" /></p>
                <h1 style={{ textAlign: "center" }} className="letsgetstarted">
                  Successful
                </h1>
                <p style={{ textAlign: "center" }} className="homepagesubtitle fordesktoponly hideipad">
                Your investment application process has been received. You will receive a confirmation mail from our team shortly.
                                </p>

                <p style={{ textAlign: "center" }} className="homepagesubtitle foripadonly">
                Your investment application process has been received. You will receive a confirmation mail from our team shortly.
                                </p>

                <p style={{ textAlign: "center" }} className="homepagesubtitle formobileonly">
                Your investment application process has been received. You will receive a confirmation mail from our team shortly.
                                </p>

                <p className="" style={{ textAlign: "center" }}>
                  <button onClick={gohome} style={{width:"80%", marginTop:"30px"}}  className="accessbutton">Go back home
     
                  </button>
                </p>
            </div>
            </div>
            </>
        }








        </div>
                </div>
    </>
      )
    
    
}


export {Realestatedrawer as default}