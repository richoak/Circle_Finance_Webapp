import React, { useEffect, useState, useReducer, useRef} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './Loan.module.css'
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
// import "../js/main.js"


const BusinessLoan = () => {
  const router = useRouter();
  const [ email, setemail] = useState()
  const [loading, setLoading ] = useState(false)
  const [notify, setnotify ] = useState()
  

  useEffect(() => {
  setemail(localStorage.getItem("email"))
  },[])

  const startdateRef = useRef()
  const enddateRef = useRef()

  async function loadStatement() {
    setLoading(true)

    let obj = {
      "startDate":  startdateRef.current.value,
      "endDate": enddateRef.current.value,
    }
    console.log("obj", obj)
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    let response
    let responsedata
    try{
      response = await fetch("http://3.209.81.171:8000/api/v1/account/send-statement",{
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
        setLoading(false)
        setnotify(responsedata.message)
     
        return
      }
      else{
        setnotify(responsedata.message)
        startdateRef.current.value=""
        enddateRef.current.value = ""
        // router.push(`/account`)
      }
  } catch (error){
        // console.log(error)
      return
    }
  }

const requestStatement = () => {
  if (startdateRef.current.value == ""){
    setnotify("Select a start date")
  }

  else if (enddateRef.current.value == ""){
    setnotify("Select an end date")
  }

  else{
    setnotify("")
    loadStatement()
  }
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
              {/* <div className="col-md-1"></div> */}

              <div className="col-md-9">
              <div className="accountbox">
                
            <div className={classes.goback}>
            <Link className="" href="/loan"  eventKey="2" >
            <Image style={{cursor:"pointer"}} src="/images/back.svg" width="20" height="20" layout="intrinsic" alt="" />
            </Link>
            </div>
            <div style={{marginTop:"40px", width:"400px", paddingBottom:"20px"}}>
            <Link className="" href="/loan/businessname"  activeClassName="is-active" >
         <div style={{marginTop:"40px", width:"400px", paddingBottom:"0px", cursor:"pointer"}}>
         {/* <p  className={classes.statementtitle}>Available loans</p> */}


         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
         <p className={classes.loantitle}>Business Name
         <span  className={classes.goicon} >
        <Image style={{marginTop:"0px"}} alt= ""src="/images/arrow-right.svg" width="20" height="12"/>
        </span>
         </p>
         <p className={classes.loansubtitle}>For Business Name.</p>
         </div>
         </div>
      </div>
      </Link>

         <hr />

         <Link className="" href="/loan/limited"  activeClassName="is-active" >
         <div style={{marginTop:"40px", width:"400px", paddingBottom:"0px", cursor:"pointer"}}>
         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
         <p className={classes.loantitle}>Business Name
         <span  className={classes.goicon} >
        <Image style={{marginTop:"0px"}} alt= ""src="/images/arrow-right.svg" width="20" height="12"/>
        </span>
         </p>
         <p className={classes.loansubtitle}>For Limited Liability Company.</p>
         </div>
         </div>
         </div>
      </Link>
         {/* <hr /> */}

{/* <Link className="" href="/loan/travelloan"  activeClassName="is-active" >
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
</Link> */}
         </div>

   
    </div>



            </div>
            </div>
            </div>
            </div>
            </div>
         
   
    )
    
    
}


export {BusinessLoan as default}