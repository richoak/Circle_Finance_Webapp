import React, { useEffect, useState, useReducer, useRef} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './Loan.module.css'
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import Pageloader from '../Pageloader';
import { PaystackConsumer } from 'react-paystack';
// import "../js/main.js"



const Loan = () => {



  const router = useRouter();
  const [ email, setemail] = useState()
  const [loading, setLoading ] = useState(false)
  const [notify, setnotify ] = useState()
  const [notifywallet, setnotifywallet ] = useState()
  const [notify2, setnotify2 ] = useState()

  

  const [ isall, setisall ] = useState(true)
  const [ isrunning, setisrunning ] = useState(false)
  const [ iscompleted, setiscompleted ] = useState(false)
  const [ isdeclined, setisdeclined ] = useState(false)
  const [ ispending, setispending ] = useState(false)
  const [ transactions , settransactions] = useState([])
  const [ transactiontype , settransactiontype] = useState("all")

  const [ loanExist, setloanExist ] = useState(false)
  const [ withCard, setwithCard ] = useState(false)
  const [ withWallet, setwithWallet ] = useState(false)

  const [loanid, setloanid ] = useState()
  const [transactionloantype, settransactionloantype ] = useState()
  const [transactionloanamount, settransactionloanamount ] = useState()
  const [transactionloanduration, settransactionloanduration ] = useState()
  const [transactionloaninterest, settransactionloaninterest ] = useState()
  const [transactionloandate, settransactionloandate ] = useState()
  const [transactionloanrepaymentdate, settransactionloanrepaymentdate ] = useState()
  const [transactionloanamountpaid, settransactionloanamountpaid ] = useState()
  const [transactionloanoutstanding, settransactionloanoutstanding ] = useState()

  const [activeloantype, setactiveloantype ] = useState()
  const [activeloanid, setactiveloanid ] = useState()
  const [activeloandate, setactiveloandate ] = useState()
  const [activeloanamount, setactiveloanamount ] = useState()
  const [activeloanduration, setactiveloanduration ] = useState()
  const [activeloanrepaymentamount, setactiveloanrepaymentamount] = useState()

  const [allsavedcards, setallsavedcards ] = useState([])

  const stageonepin1Ref = useRef()
  const stageonepin2Ref = useRef()
  const stageonepin3Ref = useRef()
  const stageonepin4Ref = useRef()



    const loadAll = () => {
      setisall(true)
      setisrunning(false)
      setiscompleted(false)
      setisdeclined(false)
      settransactiontype("")

  }
  
  const loadRunning = () => {
    setisall(false)
    setisrunning(true)
    setiscompleted(false)
    setisdeclined(false)
    setispending(false)
    settransactiontype("active")
  }
  
  const loadCompleted = () => {
    setisall(false)
    setisrunning(false)
    setiscompleted(true)
    setisdeclined(false)
    setispending(false)
    settransactiontype("paid")
  }

  const loadDeclined = () => {
    setisall(false)
      setisrunning(false)
      setiscompleted(false)
      setisdeclined(true)
      setispending(false)
      settransactiontype("declined")
}

const loadPending = () => {
  setisall(false)
    setisrunning(false)
    setiscompleted(false)
    setisdeclined(false)
    setispending(true)
    settransactiontype("pending")
}
  



  useEffect(() => {
  setemail(localStorage.getItem("email"))
  },[])

  async function loadStatement() {

    let response
    let data
  
    try{
      response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/loans/index?s=${transactiontype}`,{
        method: "GET",     
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/json',
          'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
          "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
            },
      })
      data = await response.json()
      console.log(data.data)
      settransactions(data.data)
      $(".overlay").fadeOut(0);
    } catch (error){
        console.log(error)
      return
    }
  
  }

  async function getRunningLoan() {

    let response
    let data
  
    try{
      response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/loans/index?s=pending`,{
        method: "GET",     
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/json',
          'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
          "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
            },
      })
      data = await response.json()
      console.log(data.data)
      setactiveloantype(data.data[0].type)
      setactiveloandate(data.data[0].date)
      setactiveloanamount(data.data[0].amount)
      setactiveloanduration(data.data[0].duration)
      setactiveloanid(data.data[0].id)
      setactiveloanrepaymentamount("5000")
      // settransactions(data.data)
      $(".overlay").fadeOut(0);
    } catch (error){
        console.log(error)
      return
    }
  
  }

  async function getLoanDetails(id) {
    let response
    let data
  
    try{
      response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/loans/view/${id}`,{
        method: "GET",     
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/json',
          'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
          "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
            },
      })
      data = await response.json()
      console.log(data.data)
      settransactionloantype(data.data.type)
      settransactionloanamount(data.data.amountBooked)
      settransactionloanduration(data.data.duration)
      settransactionloaninterest(data.data.interest)
      settransactionloandate(data.data.bookedDate)
      settransactionloanrepaymentdate(data.data.repaymentDate)
      settransactionloanamountpaid(data.data.amountPaid)
      settransactionloanoutstanding(data.data.amountOutstanding)
      // settransactions(data.data)
 
    } catch (error){
        console.log(error)
      return
    }
  
  }

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
      // if(data.data.cards.length >0){
      //   setiscarddetails(true)
    
      // }
      // else{
      //   setiscarddetails(false)
      // }
  
      $(".overlay").fadeOut(0);
        
    } catch (error){
        console.log(error)
      return
    }
  
  }
  
  useEffect(() => {
    loadStatement()
    getRunningLoan()
    loadDebitCard()
  }, [transactiontype])



  async function payWithWallet() {
    setLoading(true)
    setnotifywallet("Processing")
    var pin = stageonepin1Ref.current.value
    + stageonepin2Ref.current.value
    + stageonepin3Ref.current.value
    + stageonepin4Ref.current.value

    let obj = {
      "pin":  pin,
      "amount": activeloanrepaymentamount,
    }
    console.log("obj", obj)
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    let response
    let responsedata
    try{
      response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/loans/payment/${activeloanid}/wallet`,{
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
        setnotifywallet(responsedata.message)
        setLoading(false)
        return
      }
      else{
        setnotifywallet(responsedata.message)
        router.push(`/loan`)
      }
  } catch (error){
        // console.log(error)
      return
    }
  }

  async function payWithCard(cardId) {
    setLoading(true)
    setnotify("Processing")
    let obj = {
      "cardId":  cardId,
      "amount": activeloanrepaymentamount,
    }
    console.log("obj", obj)
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    let response
    let responsedata
    try{
      response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/loans/payment/${activeloanid}/card`,{
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
        setnotify(responsedata.message)
        setLoading(false)
        return
      }
      else{
        setnotify(responsedata.message)
        // router.push(`/loan`)
      }
  } catch (error){
        // console.log(error)
      return
    }
  }

  const selectCard = (id) => {
    payWithCard(id)
    // console.log(e.target.value)
  }

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
  loadDebitCard()
  };
  
  // you can call this function anything
  const handleClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
  }

  const componentProps = {
    ...config,
    text: 'Paystack Button Implementation',
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose
};

  // useEffect(() => {
  //   let otp = document.querySelector('#securityotp-screen');
  // console.log(otp)
  //   for (let pin of otp.children) {
  //     pin.onkeyup = function () {
  //       if (pin.nextElementSibling) {
  //         pin.nextElementSibling.focus();
  //       }
  //     }
  //   }
  // })

  // const loadLoanDetails = (id) => {
  //   console.log("id", id)
  //   // getLoanDetails()
  // }

    return (
      <>
         <Pageloader/>
   
        <div>
        <div className="row thesidebarrow">
        <div className="col-md-2 thesidebar">
        <Sidebar/>
        </div>




            <div className="col-md-10">
            <Topbar/>

            <div className="row">
              <div className="col-md-6">
              <div className="accountbox">

{  !loanExist &&          <div style={{marginTop:"40px", paddingTop:"40px", width:"400px", paddingBottom:"20px"}}>
            <Link href="/loan/consumerloan"  activeClassName="is-active" >
         <div className={classes.exist}  style={{marginTop:"0px", width:"400px", paddingBottom:"0px", cursor:"pointer"}}>
         <p  className={classes.statementtitle}>Available loans</p>
         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
         <p className={classes.loantitle}>Consumer Loans
         <span  className={classes.goicon} >
        <Image style={{marginTop:"0px"}} alt= ""src="/images/arrow-right.svg" width="20" height="12"/>
        </span>
         </p>
         <p className={classes.loansubtitle}>Fill up the necessary information to verify <br/>and have full access to your account.</p>
         </div>
         </div>
      </div>
      </Link>

         <hr className={classes.hr}/>

         <Link className="" href="/loan/businessloan"  activeClassName="is-active" >
         <div className={classes.exist}  style={{marginTop:"40px", width:"400px", paddingBottom:"0px", cursor:"pointer"}}>
         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
         <p className={classes.loantitle}>Business/Corporate Loans
         <span  className={classes.goicon} >
        <Image style={{marginTop:"0px"}} alt= ""src="/images/arrow-right.svg" width="20" height="12"/>
        </span>
         </p>
         <p className={classes.loansubtitle}>Fill up the necessary information to verify <br/>and have full access to your account.</p>
         </div>
         </div>
         </div>
      </Link>
         <hr />

<Link className="" href="/loan/travelloan"  activeClassName="is-active" >
<div className={classes.exist}  style={{marginTop:"40px", width:"400px", paddingBottom:"0px", cursor:"pointer"}}>
<div className="row"  style={{marginTop:"24px"}}>
 <div className="col-md-12">
<p className={classes.loantitle}>Travel Loans
<span  className={classes.goicon} >
<Image style={{marginTop:"0px"}} alt= ""src="/images/arrow-right.svg" width="20" height="12"/>
</span>
</p>
<p className={classes.loansubtitle}>Fill up the necessary information to verify <br/>and have full access to your account.</p>

</div>
</div>
</div>
</Link>
         </div>}

   

      

        { loanExist &&   <div style={{cursor:"pointer", marginTop:"40px", paddingTop:"40px", width:"", paddingBottom:"20px"}}>
        <p  className={classes.statementtitle}>Running loan</p>
            <div className={classes.creditbox}>
            <div className="row">
                
                {/* <div className="col-md-2">
                <Image src="/images/premium.svg" style={{borderRadius:"10px"}} width="100" height="100" layout="intrinsic" alt="" />
                </div>
            */}
                <div className= {`col-md-10 ${classes.innerbox}`}>
             
                    <div className="row">
                             
                        <div className="row">
                        <div className="col-md-6">
                        <p className={classes.vehicletitle}>{activeloantype}</p>
                        </div>
                        {/* <div className="col-md-8">
                        <p className={classes.investmentrate}>9.4%</p>
                        </div> */}
                        </div>
                


                        <div className="row">
                    

                        <div className="col-md-4">
                        <p className={classes.trendingname}>Amount</p>
                        <p className={classes.trending}>&#x20A6;{parseInt(activeloanamount).toLocaleString()}</p>
                        </div>

                        <div className="col-md-4">
                        <p className={classes.trendingname}>Duration</p>
                        <p className={classes.trending}>{activeloanduration}</p>
                        </div>

                        <div className="col-md-4">
                        <p className={classes.trendingname}>Date</p>
                        <p className={classes.trending}>{new Date(activeloandate).toLocaleDateString()}</p>
               
                        </div>
                        </div>

                        <p className="" style={{ color: "#DD3737", fontWeight: "bold", textAlign: "" }}>{notify}</p>
                        <p className="" style={{marginTop:"0px"}} >
<button  className={classes.withcard} onClick={()=>{
  setwithCard(true)
  setwithWallet(false)
  }} data-toggle="modal" data-target="#repayModal" >Repay with card </button>

<button  className={classes.withwallet}onClick={()=>{
  setwithWallet(true)
  setwithCard(false)
  }}  data-toggle="modal" data-target="#repayModal" >Repay with wallet </button>
</p>


<div className="modal fade" id="repayModal" tabIndex="-1" role="dialog" aria-labelledby="repayModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Repay </h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body" style={{marginLeft:"20px", marginRight:"20px", marginTop:"20px", marginBottom:"20px"}}>

            {
              withCard && <div>
                    <p>Select/Add new card</p>
                    {
      allsavedcards.map((item) =>
      (
        <>
    <div style={{marginTop:"40px", width:"400px"}}>
      <div className="row">

      <div className="col-md-1">
          <div style={{marginTop:"0px"}}>
          <input type="checkbox" id="" onChange={()=>{
            selectCard(item.uuid)
          }}/>
     </div>                                   
     </div>

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

        {/* <div className="col-md-2">
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
        </div> */}
      </div>

    </div>
    </>
      ))}

<p className="" style={{ color: "#DD3737", fontWeight: "bold", textAlign: "center" }}>{notify}</p>
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
                                <hr />
                                <div style={{marginTop:"40px", width:"400px"}}>
                                <div className="row">
                                        <div className="col-md-1">
                                        <Image src="/images/lock.svg" layout="intrinsic" width="30" height="30" alt="" />
                                        </div>
                                        <div className="col-md-11">
                                        <p className={classes.cardtitle}>Your debit card information is secure</p>
                                        {/* <p className={classes.cardsubtitle}>
                                        Arcu turpis elit vitae sit pharetra fringilla egestas sed. Lobortis mi consequat et sit porttitor rutrum.
                                            </p> */}
                                        </div>
                                    </div>
                                    </div>
              </div>
            }

        {
              withWallet &&
              <>
              <div>
                  <p>Input your pin</p>
                  <div className="row"  style={{marginTop:"24px"}}>
          
          <div className="col-md-2"></div>
          <div className="col-md-8">
         
          <div className="row otp-screen" id="securityotp-screen">
          <input type="password" className="otp2" id="otpstep2one" ref={stageonepin1Ref}  placeholder="" maxLength="1" />
            <input type="password" className="otp2" id="otpstep2two"  ref={stageonepin2Ref}  placeholder="" maxLength="1" />
            <input type="password" className="otp2" id="otpstep2three"  ref={stageonepin3Ref} placeholder="" maxLength="1" />
            <input type="password" className="otp2" id="otpstep2four" ref={stageonepin4Ref}  placeholder="" maxLength="1" />
            </div>
          </div>
          <div className="col-md-2"></div>
      
      
         </div>

              </div>

              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <p className="" style={{ color: "#DD3737", fontWeight: "bold", marginTop:"20px", textAlign: "center" }}>{notifywallet}</p>
                <button  className={classes.makepayment} style={{marginTop:"35px"}} 
              onClick={payWithWallet}>Make Payment 
              </button>
                </div>
                <div className="col-md-3"></div>
              </div>
           
             
             
             
             
              </>
            }
      </div>
      {/* <div className="modal-footer"> */}
        {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button> */}
      {/* </div> */}
    </div>
  </div>
</div>

                    </div>
                    </div>
                
                </div>
                </div>

            </div>}


    </div>



            </div>

<div className="col-md-2"></div>

            <div className="col-md-4">
              <div className="loanaccountbox">

            <div style={{marginTop:"0px", paddingTop:"40px", width:"400px", paddingBottom:"20px"}}>
   
         <div style={{marginTop:"0px", width:"400px", paddingBottom:"0px", cursor:"pointer"}}>
         <p  className={classes.statementtitle}>Transaction History</p>
       

         <div>

{/* <button onClick={loadAll} 
className={isall ? "profiletabbuttonsactive": "profiletabbuttonshistory"}
> 
All</button> */}

<button onClick={loadRunning}  
className={isrunning ? "profiletabbuttonsactive": "profiletabbuttonshistory"}
> Active</button>

<button onClick={loadCompleted} 
className={iscompleted ? "profiletabbuttonsactive": "profiletabbuttonshistory"}
> Paid
</button>

<button onClick={loadPending} 
className={ispending ? "profiletabbuttonsactive": "profiletabbuttonshistory"}
> Pending
</button>

<button onClick={loadDeclined} 
className={isdeclined ? "profiletabbuttonsactive": "profiletabbuttonshistory"}
> Declined
</button>


{
                    transactions.map((item) =>
                    (
                      <>
                        <div className="row" key={item.id} 
                        onClick={()=>{         
                            
                          // setloanid(item.id)
                          // console.log(loanid)
                          getLoanDetails(item.id)
                          }}
                          data-toggle="modal" data-target="#exampleModal" 
                          style={{paddingTop:"30px",marginBottom:"-10px"}}>
                        <div className="col-md-2">
                            <Image  
                            src= {
                              item.type == "Consumer Loan" ? "/images/individualloan.svg"
                             : "/images/corporateloan.svg" }
                            width="35" height="35" layout="intrinsic" alt=""/>
                        </div>
    
                            <div className="col-md-4">
                            {/* <p style={{textTransform:"capitalize"}}  className={classes.transactiontype}>{item.activity}</p> */}
                            <p className={classes.transactiontype}>&#x20A6;{parseInt(item.amount).toLocaleString()}</p>
                            <p style={{textTransform:"capitalize"}} className={classes.transactiondate}>{item.type}</p>
                            
                            </div>
    
                            <div className="col-md-1">
                            </div>
    
                            <div className="col-md-4">
                           
                            <p style={{
                              textTransform:"capitalize",
                              backgroundColor: item.status == "pending" ?"#EEEFF2" 
                              :  item.status == "completed" ? "#E5F0FF" 
                              :  item.status == "active" ? "#EDFFF0" 
                              : "#FFF8E7",
                              borderRadius:"24px",
                              textAlign:"center"
                              }} className={classes.status}>{item.status}</p>
                             <p className={classes.transactiondate} style={{textAlign:"center"}}>{new Date(item.date).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <hr />
                        </>
                    ))
                  }
</div>
  
      </div>





         </div>

   
    </div>



            </div>





            </div>

          

 

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Transaction details</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body" style={{marginLeft:"20px", marginRight:"20px", marginTop:"20px", marginBottom:"20px"}}>
      <div className="row summarybox">

    <div className="col-md-6 col-6 summarydiv1">
        <p  className="loansareavailablenote2">Loan type</p>
        <p className="summaryhead" style={{marginTop:"-17px"}}>{transactionloantype}</p>
        <p  className="loansareavailablenote2">Loan duration</p>
        <p className="summaryhead" style={{marginTop:"-17px"}}>{transactionloanduration} Month(s)</p>
     
        <p  className="loansareavailablenote2">Date</p>
        <p className="summaryhead" style={{marginTop:"-17px"}}>{new Date(transactionloandate).toLocaleDateString()}</p>
    </div>

    <div className="col-md-6 col-6 summarybox2">

    <p  className="loansareavailablenote2">Loan Amount</p>
    <p className="summaryhead" style={{marginTop:"-17px"}}>&#x20A6;{parseInt(transactionloanamount).toLocaleString()}</p>

    <p  className="loansareavailablenote2">Loan interest</p>
        <p className="summaryhead" style={{marginTop:"-17px"}}>{transactionloaninterest}</p>

        <p  className="loansareavailablenote2">Repayment date</p>
        <p className="summaryhead" style={{marginTop:"-17px"}}>{new Date(transactionloanrepaymentdate).toLocaleDateString()}</p>
     
        </div>
</div>


<hr style={{marginTop:"40px"}} />
<div className="row" >
        
        <div className="col-md-6 col-6">
            <p  className="loansareavailablenote2">Amount Paid</p>
            <p className="summaryhead" style={{marginTop:"-17px", color:"#10A83B"}}>&#x20A6; {parseInt(transactionloanamountpaid).toLocaleString()}</p>
        </div>
    
        <div className="col-md-6 col-6 summarybox2">
    
        <p  className="loansareavailablenote2">Amount outstanding</p>
        <p className="summaryhead" style={{marginTop:"-17px"}}>&#x20A6; {parseInt(transactionloanoutstanding).toLocaleString()}</p>

            </div>
            <hr />
    </div>

      </div>
      {/* <div className="modal-footer"> */}
        {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button> */}
      {/* </div> */}
    </div>
  </div>
</div>
            </div>
            </div>
            </div>
            </>  
   
    )
    
    
}


export {Loan as default}