import React, { useEffect, useState, useRef} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './Credit.module.css'
import { useRouter } from 'next/router';
import { animated, useTransition } from "react-spring";
import { PaystackConsumer } from 'react-paystack';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import jwt from 'jsonwebtoken';

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

const Premiumdrawer = (props) => {
    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handleSuccess(reference),
        onClose: handleClose
    };

    const [show, setShow] = useState();
    const [name, setname] = useState();
    const [amount, setamount] = useState();
    const [duration, setduration] = useState();
    const [frequency, setfrequency] = useState();
    const [methodofpayout, setmethodofpayout] = useState();
    const [goal, setgoal] = useState();
    const [cardId, setCardId] = useState();
    const router = useRouter();
    const [stageone, setstageone] = useState(true);
    const [stagetwo, setstagetwo] = useState(false);
    const [stagethree, setstagethree] = useState(false);
    const [stagefour, setstagefour] = useState(false);
    const [stagefive, setstagefive] = useState(false);
    const [summaryinterestrate, setsummaryinterestrate] = useState();
    const [summaryduration, setsummaryduration] = useState();
    const [summaryexpectedpayoutbalance, setsummaryexpectedpayoutbalance] = useState();
    const [summaryexpectedinterestaccrued, setsummaryexpectedinterestaccrued] = useState();
    const [summaryexpectedpayoutdate, setsummaryexpectedpayoutdate] = useState();
    



    const frequencyRef = useRef()
    const durationRef = useRef()
    const amountRef = useRef()
    const goalRef = useRef()
    const methodofpayoutRef = useRef()

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

      router.push(`/home`)
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



    async function postInvestmentCard() {
 
      // setLoading(true)
      let response
      let responsedata
  
      let obj = {
        "goal": goal,
        "frequency": localStorage.getItem("premiumplusfrequency"),
        "duration":  localStorage.getItem("premiumplusduration"),
        "interest_payout_method": methodofpayout,
        "amount": amount,
        "type": "premiumplus",
        "paymentMethod":cardId
      }
    
    
      const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
      const data = jwt.sign(obj, privateKey)
      console.log(obj)
    
      try{
        response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/investment/create`,{
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
  
        if (response.status == "400"){
          setnotify(responsedata.message)
          setLoading(false)
          return
        }
        else{
          setstageone(false)
        setstagetwo(false)
        setstagethree(false)
        setstagefour(false)
        setstagefive(true)
        }
  
  
    
        // setLoading(false)
      } catch (error){
          console.log(error)
        return
      }
    
    }

    async function postInvestmentWallet() {
 
      // setLoading(true)
      let response
      let responsedata
  
      let obj = {
        // "name": "Premium",
        "goal": goal,
        "frequency": localStorage.getItem("premiumplusfrequency"),
        "duration":  localStorage.getItem("premiumplusduration"),
        "interest_payout_method": methodofpayout,
        "amount": amount,
        "type": "premiumplus",
        "paymentMethod":"wallet"
      }
    
    
      const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
      const data = jwt.sign(obj, privateKey)
      console.log(obj)
    
      try{
        response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/investment/create`,{
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
  
        if (response.status == "400"){
          setnotify(responsedata.message)
          setLoading(false)
          return
        }
        else{
             setstageone(false)
        setstagetwo(false)
        setstagethree(false)
        setstagefour(false)
        setstagefive(true)
        }
  
  
    
        // setLoading(false)
      } catch (error){
          console.log(error)
        return
      }
    
    }

    async function displaySummary() {
      setnotify("Processing...")
      // setLoading(true)
      let response
      let responsedata
  
      let obj = {
        "name": "Premium",
        "frequency": localStorage.getItem("premiumplusfrequency"),
        "duration":  localStorage.getItem("premiumplusduration"),
        "goal": goalRef.current.value,
        "interest_payout_method": methodofpayout,
        "type": "premiumplus"
      }
    
    
      const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
      const data = jwt.sign(obj, privateKey)
      console.log(obj)
    
      try{
        response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/investment/calculate-summary`,{
          method: "POST",     
          body: JSON.stringify({data}),
          headers: {
            'Content-Type': 'application/json',
            'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
            "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
              },
        })
        responsedata = await response.json()
        console.log(responsedata.data)
        setnotify("Processing...")
        setsummaryinterestrate(responsedata.data.interestRate)
        setsummaryduration(responsedata.data.duration)
        setsummaryexpectedpayoutbalance(responsedata.data.expectedPayoutBalance)
        setsummaryexpectedinterestaccrued(responsedata.data.expectedInterestAccured)
        setsummaryexpectedpayoutdate(responsedata.data.expectedPayoutDate)


        setnotify(responsedata.message)
  
        if (response.status == "400"){
          setnotify(responsedata.message)
          setLoading(false)
          return
        }
        else{
          
          setstageone(false)
          setstagetwo(true)
        }
  
  
    
        // setLoading(false)
      } catch (error){
          console.log(error)
        return
      }
    
    }


    const gotostagetwo = () => {
    
      if(frequencyRef.current.value==""
       || durationRef==""
        || amountRef.current.value ==""
        || methodofpayoutRef.current.value ==""
        ){
        setnotify("Fill in missing details")
      }
      else{
        setnotify("")
        displaySummary()
     
      }
       
    }
    

    const gobacktostageone = () => {
  
     
        setstageone(true)
        setstagetwo(false)
    }

    const gotostagethree = () => {
      // console.log("freq", frequencyRef.current.value)

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


    const gotostagefivecard = () => {
      postInvestmentCard()
        // setstageone(false)
        // setstagetwo(false)
        // setstagethree(false)
        // setstagefour(false)
        // setstagefive(true)
    }

    const gotostagefivewallet = () => {
      postInvestmentWallet()
        // setstageone(false)
        // setstagetwo(false)
        // setstagethree(false)
        // setstagefour(false)
        // setstagefive(true)
    }

    const selectDuration = (e) => {
      setduration(e.target.value)
      localStorage.setItem("premiumplusduration", e.target.value)
    }

    const selectFrequency = (e) => {
      setfrequency(e.target.value)
      localStorage.setItem("premiumplusfrequency", e.target.value)
      
    }

    const selectGoal = (e) => {
      setgoal(e.target.value)
      localStorage.setItem("premiumplusgoal", e.target.value)
      
    }


    const selectAmount = (e) => {
      setamount(e.target.value)
      localStorage.setItem("premiumplusamount", e.target.value)

    }

    const selectmethodofpayout = (e) => {
      setmethodofpayout(e.target.value)
      localStorage.setItem("premiumplusmethodofpayout", e.target.value)

    }

    const selectCard = (uuid) => {
      console.log(uuid)
      setCardId(uuid)
    }


    


      return (
        <>
      
      <div className="row">
                    <div className="col-md-6">
                        <div className="row" style={{marginTop:"38px"}}>

                            <div className="col-md-3">
                            <p>Premium plus</p>  
                            </div>

                            <div className="col-md-6">
                            <p className={classes.investmentrate2}>14% Annual Return.</p>
                            </div>

                            <div className="col-md-12">
                            <p className={classes.investmentinfodrawer}>
                            This plan offers the opportunity to make monthly installments towards a particular 
goal. The least monthly balance to invest is N5000 and you can earn up to 14% in interest (Compounded monthly) per annum. </p>
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
          <select className="form-select" onChange={selectGoal}  ref={goalRef} value={goal}>
          <option value="">- Select -</option>
          <option value="Emergency Funds">Emergency Funds</option>
                    <option value="Target Savings">Target Savings</option>
                    <option value="Debt Repayment">Debt Repayment</option>
                    <option value="House Rent">House Rent</option>
                    <option value="Car Purchase">Car Purchase</option>
                    <option value="Medical Bills">Medical Bills</option>
                    <option value="Financial Freedom">Financial Freedom</option>
                    <option value="Others">Others</option>
        </select>
          </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "0px", paddingBottom: "0px" }}>Frequency</Form.Label>
          <select className="form-select" onChange={selectFrequency}  ref={frequencyRef} value={frequency}>
          <option value="">- Select -</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>       
          <option value="monthly">Monthly</option>
          <option value="annually">Annually</option>      
        </select>
          </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "0px", paddingBottom: "0px" }}>Investment Duration</Form.Label>
          <select className="form-select" onChange={selectDuration} ref={durationRef} value={duration}>
          <option value="">- Select -</option>
          <option value="12">1 Year</option>
                                                                <option value="24">2 Years</option>
                                                                <option value="36">3 Years</option>
                                                                <option value="48">4 Years</option>
                                                                <option value="60">5 Years</option>
                                                                <option value="72">6 Years</option>
                                                                <option value="84">7 Years</option>
                                                                <option value="96">8 Years</option>
                                                                <option value="108">9 Years</option>
                                                                <option value="120">10 Years</option>
                                                                <option value="132">11 Years</option>
                                                                <option value="144">12 Years</option>
                                                                <option value="156">13 Years</option>
                                                                <option value="168">14 Years</option>
                                                                <option value="180">15 Years</option>
                                                                <option value="192">16 Years</option>
                                                                <option value="204">17 Years</option>
                                                                <option value="216">18 Years</option>
                                                                <option value="228">19 Years</option>
                                                                <option value="240">20 Years</option>
        </select>
          </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "0px", paddingBottom: "0px" }}>Method Of Interest Payout</Form.Label>
          <select className="form-select"  onChange={selectmethodofpayout} ref={methodofpayoutRef} value={methodofpayout}>
          <option value="">- Select -</option>
          <option value="" selected>Please select</option>
                    <option value="Monthly">Collect Monthly</option>
                    <option value="Upfront">Collect Now</option>
                    <option value="End Of Duration">Collect at the end of duration</option>
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

            <Form.Control 
            type="number"
            className={classes.inputamount} 
            onKeyDown={selectAmount} 
            placeholder='0'  
            ref={amountRef} 
            // value={amount}
            />

            </div>
            <div className="col-md-2" onClick={add}>
            <Image style={{cursor:"pointer"}} src="/images/Add.svg" width="40" height="40" layout="intrinsic" alt="" />

            </div>
          </div>
          
          </div>
          <hr style={{color:"#7D8799"}}/>
          {/* <p>
            <span style={{marginTop:"10px"}}>
            <Image src="/images/info2.svg" width="10" height="10" layout="intrinsic" alt="" />
            </span>
            <span className={classes.totalroi}>Total ROI after the completed cycle</span>
            <span className={classes.totalamount}> N500,000,000</span>
          </p> */}
                   <p className="" style={{ color: "#DD3737", fontWeight: "bold", textAlign: "center", fontSize:"14px" }}>{notify}</p>


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
        <p className="summaryhead" style={{marginTop:"-16px"}}> &#x20A6;{parseInt(amount).toLocaleString()}</p>

        <p  className="loansareavailablenote2">Investment type</p>
        <p className="summaryhead" style={{marginTop:"-16px"}}>Premium plus</p>
     
        <p  className="loansareavailablenote2">Interest rate</p>
        <p className="summaryhead" style={{marginTop:"-16px"}}>{summaryinterestrate}% per annum</p>

        <p  className="loansareavailablenote2">Duration</p>
        <p className="summaryhead" style={{marginTop:"-16px"}}>{summaryduration} Months</p>
    </div>

    <div className="col-md-6 col-6 summarybox2">
    <p  className="loansareavailablenote2">Expected Payout Balance</p>
        <p className="summaryhead" style={{marginTop:"-16px"}}>&#x20A6;{summaryexpectedpayoutbalance}</p>

        <p  className="loansareavailablenote2">Expected Interest Accrued</p>
        <p className="summaryhead" style={{marginTop:"-16px"}}>&#x20A6;{summaryexpectedinterestaccrued}</p>
     
        <p  className="loansareavailablenote2">Expected Payout Date</p>
        <p className="summaryhead" style={{marginTop:"-16px"}}>{summaryexpectedpayoutdate}</p>

    
        </div>
</div>

<div style={{display:"inline-block", marginTop:"20px"}}>

<button  onClick={gobacktostageone} className={classes.investmentbackbutton}>&lt; Make Changes</button>

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
          <p style={{paddingTop:"30px"}} className={classes.investmentinfodrawer}>By signing this form electronically, you are agreeing to the <span style={{fontWeight:"bold"}}>Terms and Conditions</span> stated there in.</p>
     
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
                                           <div>
                    <div className={classes.walletdiv}>
                        <div className="row">
                            <div className="col-md-6">
                            <p className={classes.availablebalance}>Available balance</p>
                        <p className={classes.walletamount}>
                            <span className={classes.preamount}>N</span>
                            <span className={classes.amount}>0</span>
                            <span className={classes.preamount}>.00</span>
                        </p>
                            </div>
                            <div className="col-md-6">
                              <div className={classes.bank}>
                              <p style={{textAlign:"center"}}><Image src="/images/providusbank.svg" layout="intrinsic" width="20" height="20" alt="" /></p> 
                            <p style={{textAlign:"center"}} className={classes.bankname}>PROVIDUS BANK</p>
                              </div>
                          
                            </div>
                        </div>

                      


                        <div className={classes.walletname}>
                        <p style={{textTransform:"capitalize"}} className={classes.accountname}>{name} - Circle Finance</p>
                        <p className={classes.accountnumber}>0221117895 <Image className={classes.copyicon} onClick={copyClipboard} src="/images/copy.svg" layout="intrinsic" width="20" height="20" alt=""/></p>
                        </div>
                       
                    </div>

                    <div>
        
        <ToastContainer />
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
                                <button onClick={gotostagefivewallet} className={classes.continuebutton}>Make payment wallet</button>

                                </>
                                   
                            )
                        }

                        {
                            isCard && (
                                <>
                                { 
  props.iscarddetails &&   
  <>
          {
      props.allsavedcards.map((item) =>
      (
        <>
    <div style={{marginTop:"40px", width:"400px"}}>
      <div className="row">
      <div className="col-md-1">
                                    <div style={{marginTop:"-7px"}}>
                                    <input type="radio" onChange={()=>{selectCard(item.uuid)}} id=""/>
                                    </div>
                                    
                                  </div>
        <div className="col-md-2">
        <Image 
        // src="/images/mastercard.svg"
                  src= {item.brand === "visa" ? "/images/visa.svg" : "/images/mastercard.svg"}

         layout="intrinsic" width="30" height="30" alt="" />
        </div>
        <div className="col-md-2" style={{fontSize:"16px"}}>
          ****{item.last4}
        </div>
        <div className="col-md-4" style={{fontSize:"16px"}}>
          <p style={{fontWeight:"bold"}}>- {item.bank}</p>
        </div>

        {/* <div className="col-md-2">
        <div id="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="dots">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <ul>
            <li><a href="#" className="link" style={{fontSize:"16px"}}>Delete</a></li>
      
          </ul>
        </div>
      </div>
    </div>
        </div> */}
      </div>

    </div>
    </>
      ))
      
      }
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
                                    <button onClick={gotostagefivecard} className={classes.continuebutton}>Make payment</button>

                                </>
                            )
                        }
                  
                            </div>
    


            </>
         }

        {
            stagefive && 
            <>
             <div style={{marginTop:"40px", width:"400px"}}>
                        <div className="successfulbox">
<h1 className="letsgetstartedstepheading fordesktoponly">
             
                </h1>
                <p style={{textAlign:"center"}}><Image src="/images/badge-check.svg" width="75" height="75" layout="intrinsic" alt="" /></p>
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


export {Premiumdrawer as default}