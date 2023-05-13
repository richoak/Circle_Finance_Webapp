import React, { useEffect, useState, useContext } from 'react';
import { Nav, Form } from 'react-bootstrap'
import Link from 'next/link';
import Topbar from './Topbar';
import Sidebar from './Sidebar'
import "../js/main.js"
import $ from 'jquery'
import Pageloader from './Pageloader';
import useHttp from '../hooks/use-http';

import Image from 'next/image';
import LoanContext from '../store/loan-context';


import HomeWallet from "./home/Wallet"
import Homeinvestment from './home/Investments'
import Homeanalytics from './home/Analytics'
import Homeactivities from './home/Activities'
import Incompleteprofile from './Incompleteprofile'
import Homenotifications from './home/Notifications'
import classes from './home/Home.module.css'







const Home = (props) => {

  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")
  const [loantype, setloantype] = useState("")
  const [duedate, setduedate] = useState("")
  const [loanstatus, setloanstatus] = useState("")
  const [loanamount, setloanamount] = useState(0)
  const [interestamount, setinterestamount] = useState(0)
  const [interestrate, setinterestrate] = useState(0)
  const [defaultbalance, setdefaultbalance] = useState(0)
  const [loanrequestdate, setloanrequestdate] = useState("DD/MM/YYYY")
  const [paymentsFilter, setPaymentsFilter] = useState("")
  const [currentLoanId, setCurrentLoanId] = useState("")
  const [ walletBalance, setWalletBalance] = useState(0)


//  GET USER DETAILS
  async function loadUserData() {
    let response
    let data

    try{
      response = await fetch('http://3.209.81.171:8000/api/v1/account/profile',{
        method: "GET",     
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/json',
          'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
          "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
            },
      })
      data = await response.json()
      console.log("data",data)
      localStorage.setItem("firstname", data.data.userDetails.firstName)
      localStorage.setItem("lastname", data.data.userDetails.lastName)
      localStorage.setItem("address", data.data.userDetails.address)
      localStorage.setItem("bvn", data.data.userDetails.bvn)
      localStorage.setItem("dob", data.data.userDetails.dob)
      localStorage.setItem("email", data.data.userDetails.email)
      localStorage.setItem("gender", data.data.userDetails.gender)
      localStorage.setItem("maritalstatus", data.data.userDetails.maritalStatus)
      localStorage.setItem("phone", data.data.userDetails.phoneNumber)
      localStorage.setItem("picture", data.data.userDetails.picture)
      localStorage.setItem("state", data.data.userDetails.state)
        
    } catch (error){
        console.log(error)
      return
    }

  }

  useEffect(() => {
    loadUserData()
}, [])

  return (

    <div>
      {/* <Pageloader /> */}

      <div className="row thesidebarrow">
        <div className="col-md-2 thesidebar">
          <Sidebar/>
        </div>

        <div className="col-md-10 thesidebarrow">
          <Topbar />
          <div className="row">
            <div className="col-md-9">
            
              <div className={classes.homebody}>
              <Incompleteprofile/>

              <div style={{marginTop:"20px", marginBottom:"0px"}}>
              <Homeinvestment/>
              </div>

              <div style={{marginTop:"20px", marginBottom:"30px"}}>
              <Homeactivities/>
              </div>
              

              <div className="row">
              <div className="col-md-6">
              <Homeanalytics/>
              </div>
              <div className="col-md-6">
                <Homenotifications/>
              </div>
                
            </div>
            </div>
            </div>

      

            <div className="col-md-3">
              <HomeWallet/>
            </div>
          </div>

        </div>
      </div>




    </div>




  )


}


export { Home as default }