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
// import "../js/main.js"


const Loan = () => {
  const router = useRouter();
  const [ email, setemail] = useState()
  const [loading, setLoading ] = useState(false)
  const [notify, setnotify ] = useState()

  const [ isall, setisall ] = useState(true)
  const [ isrunning, setisrunning ] = useState(false)
  const [ iscompleted, setiscompleted ] = useState(false)
  const [ isdeclined, setisdeclined ] = useState(false)
  const [ transactions , settransactions] = useState([])

  const [loanid, setloanid ] = useState()
  const [transactionloantype, settransactionloantype ] = useState()
  const [transactionloanamount, settransactionloanamount ] = useState()
  const [transactionloanduration, settransactionloanduration ] = useState()
  const [transactionloaninterest, settransactionloaninterest ] = useState()
  const [transactionloandate, settransactionloandate ] = useState()
  const [transactionloanrepayment, settransactionloanrepayment ] = useState()



    const loadAll = () => {
      setisall(true)
      setisrunning(false)
      setiscompleted(false)
      setisdeclined(false)

  }
  
  const loadRunning = () => {
    setisall(false)
    setisrunning(true)
    setiscompleted(false)
    setisdeclined(false)
  }
  
  const loadCompleted = () => {
    setisall(false)
    setisrunning(false)
    setiscompleted(true)
    setisdeclined(false)
  }

  const loadDeclined = () => {
    setisall(false)
      setisrunning(false)
      setiscompleted(false)
      setisdeclined(true)
}
  

  useEffect(() => {
  setemail(localStorage.getItem("email"))
  },[])

  async function loadStatement() {

    let response
    let data
  
    try{
      response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/loans/index`,{
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

  async function getLoanDetails() {
    let response
    let data
  
    try{
      response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/loans/transactions/${loanid}`,{
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
      // settransactions(data.data)
 
    } catch (error){
        console.log(error)
      return
    }
  
  }
  
  useEffect(() => {
    loadStatement()
  }, [])

  const loadLoanDetails = (id) => {
    console.log("id", loanid)
    getLoanDetails()
  }

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

            <div style={{marginTop:"40px", paddingTop:"40px", width:"400px", paddingBottom:"20px"}}>
            <Link className="" href="/loan/consumerloan"  activeClassName="is-active" >
         <div style={{marginTop:"0px", width:"400px", paddingBottom:"0px", cursor:"pointer"}}>
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

         <hr />

         <Link className="" href="/loan/businessloan"  activeClassName="is-active" >
         <div style={{marginTop:"40px", width:"400px", paddingBottom:"0px", cursor:"pointer"}}>
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
<div style={{marginTop:"40px", width:"400px", paddingBottom:"0px", cursor:"pointer"}}>
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
         </div>

   
    </div>



            </div>

<div className="col-md-2"></div>

            <div className="col-md-4">
              <div className="loanaccountbox">

            <div style={{marginTop:"0px", paddingTop:"40px", width:"400px", paddingBottom:"20px"}}>
   
         <div style={{marginTop:"0px", width:"400px", paddingBottom:"0px", cursor:"pointer"}}>
         <p  className={classes.statementtitle}>Transaction History</p>
       

         <div>

<button onClick={loadAll} 
className={isall ? "profiletabbuttonsactive": "profiletabbuttonshistory"}
> 
All</button>

<button onClick={loadRunning}  
className={isrunning ? "profiletabbuttonsactive": "profiletabbuttonshistory"}
> Running</button>

<button onClick={loadCompleted} 
className={iscompleted ? "profiletabbuttonsactive": "profiletabbuttonshistory"}
> Completed
</button>

<button onClick={loadDeclined} 
className={isdeclined ? "profiletabbuttonsactive": "profiletabbuttonshistory"}
> Declined
</button>


{
                    transactions.map((item) =>
                    (
                      <>
                        <div className="row" key={item.id} data-toggle="modal" data-target="#exampleModal" onClick={()=>{
                   
                          setloanid(item.id)
                          console.log(loanid)
                          loadLoanDetails()
                          }}
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
        <p className="summaryhead" style={{marginTop:"-17px"}}>{transactionloandate}</p>
    </div>

    <div className="col-md-6 col-6 summarybox2">

    <p  className="loansareavailablenote2">Loan Amount</p>
    <p className="summaryhead" style={{marginTop:"-17px"}}>{transactionloanamount}</p>

    <p  className="loansareavailablenote2">Loan interest</p>
        <p className="summaryhead" style={{marginTop:"-17px"}}>{transactionloaninterest}%</p>

        <p  className="loansareavailablenote2">Repayment date</p>
        <p className="summaryhead" style={{marginTop:"-17px"}}>{transactionloanrepayment}</p>
     
        </div>
</div>


<hr style={{marginTop:"40px"}} />
<div className="row summarybox" >
        
        <div className="col-md-6 col-6 summarydiv1">
            <p  className="loansareavailablenote2">Amount Paid</p>
            <p className="summaryhead" style={{marginTop:"-17px"}}>{transactionloantype}</p>
        </div>
    
        <div className="col-md-6 col-6 summarybox2">
    
        <p  className="loansareavailablenote2">Amount outstanding</p>
        <p className="summaryhead" style={{marginTop:"-17px"}}>{transactionloanamount}</p>

            </div>
    </div>
    <hr />
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