import React, { useEffect, useState, useReducer} from 'react';
import Link from 'next/link';
import Topbar from './Topbar';
import Sidebar from './Sidebar'
import Image from 'next/image';
import classes from './Profileoptions.module.css'
import "../js/main.js"


const Profileoptions = () => {

  const [name, setname]= useState()
  const [ email, setemail] = useState()

  useEffect(() => {
    setname(localStorage.getItem("firstname") + " " + localStorage.getItem("lastname"))
  setemail(localStorage.getItem("email"))
  },[])


  async function loadUserData() {
    let response
    let data

    try{
      response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/account/profile`,{
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

  async function loadUserNextofkin() {
    let response
    let data

    try{
      response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/account/next-of-kin`,{
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
      localStorage.setItem("nokfirstname", data.data.nextOfKinDetails.firstName)
      localStorage.setItem("noklastname", data.data.nextOfKinDetails.lastName)
      localStorage.setItem("nokemail", data.data.nextOfKinDetails.email)
      localStorage.setItem("nokphone", data.data.nextOfKinDetails.phoneNumber)
      localStorage.setItem("nokaddress", data.data.nextOfKinDetails.address)
      localStorage.setItem("nokrelationship", data.data.nextOfKinDetails.relationship)
      localStorage.setItem("nokgender", data.data.nextOfKinDetails.gender)
      localStorage.setItem("nokstate", data.data.nextOfKinDetails.state)
        
    } catch (error){
        console.log(error)
      return
    }

  }

  async function loadUserGovernmentId() {
    let response
    let data

    try{
      response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/account/government-id`,{
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
      localStorage.setItem("idtype", data.data.governmentIdDetails.type)
      localStorage.setItem("idnumber", data.data.governmentIdDetails.idNumber)
      localStorage.setItem("idissuedate", data.data.governmentIdDetails.issueDate)
      localStorage.setItem("idfrontcopy", data.data.governmentIdDetails.frontCopy)
      localStorage.setItem("idbackcopy", data.data.governmentIdDetails.backCopy)

        
    } catch (error){
        console.log(error)
      return
    }

  }

  async function loadEmployment() {
    let response
    let data

    try{
      response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/account/employment`,{
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
      localStorage.setItem("ippisnumber", data.data.employmentDetails.IPPISNumber)
      localStorage.setItem("jobtitle", data.data.employmentDetails.jobTitle)
      localStorage.setItem("officeaddress", data.data.employmentDetails.officeAddress)
      localStorage.setItem("organizationname", data.data.employmentDetails.organizationName)
      localStorage.setItem("organizationtype", data.data.employmentDetails.organizationType)
      localStorage.setItem("employmentidfrontcopy", data.data.employmentDetails.frontCopy)
      localStorage.setItem("employmentidbackcopy", data.data.employmentDetails.backCopy)
      localStorage.setItem("stateofoffice", data.data.employmentDetails.state)

        
    } catch (error){
        console.log(error)
      return
    }

  }

  useEffect(() => {
    loadUserData()
    loadUserNextofkin()
    loadUserGovernmentId()
    loadEmployment()
}, [])

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
                  
              <div className="row accounttop">
              <div className="col-md-1 col-3">
                <p>
                <Image  className="" src="/images/userface.svg" width="58" height="58"/>

                </p>
              </div>

              <div className="col-md-2 col-4">
              <p > <span className="loansareavailable2" style={{textTransform:"capitalize"}}>{name}</span> <br/><span  className="accountemail">{email}</span></p>  
              </div>
              </div>
      <hr style={{width:"350px", color:"#E1E4EB",marginTop:"-5px"}}/>
      <div style={{width:"350px"}}>
       
      <div className={`row ${classes.accountbox}`}>
      <div className="col-md-2">
          <Image  className="" alt="" src="/images/myprofile.svg" width="22.4" height="24"/>
          </div>
          <div className="col-md-8">
          <Link className="" href="/profile"  eventKey="2" >
          <p className={classes.accountboxtext}>My profile</p>
          </Link>
          </div>
          <div className="col-md-2">
          <Image style={{marginTop:"10px"}} alt= "" className="" src="/images/arrow-right.svg" width="20" height="12"/>
          </div>
      </div>

      <div className={`row ${classes.accountbox}`}>
      <div className="col-md-2">
          <Image  className="" alt="" src="/images/security.svg" width="22.4" height="24"/>
          </div>
          <div className="col-md-8">
          <Link className="" href="/security"  eventKey="2" >
          <p className={classes.accountboxtext}>Security</p>
          </Link>
          </div>
          <div className="col-md-2">
          <Image style={{marginTop:"10px"}} alt= "" className="" src="/images/arrow-right.svg" width="20" height="12"/>
          </div>
      </div>

      <div className={`row ${classes.accountbox}`}>
      <div className="col-md-2">
          <Image  className="" alt="" src="/images/statement.svg" width="22.4" height="24"/>
          </div>
          <div className="col-md-8">
          <Link className="" href="/statement"  eventKey="2" >
          <p className={classes.accountboxtext}>Account Statement</p>
          </Link>
          </div>
          <div className="col-md-2">
          <Image style={{marginTop:"10px"}} alt= "" className="" src="/images/arrow-right.svg" width="20" height="12"/>
          </div>
      </div>

      <div className={`row ${classes.accountbox}`}>
      <div className="col-md-2">
          <Image  className="" alt="" src="/images/learning.svg" width="22.4" height="24"/>
          </div>
          <div className="col-md-8">
          {/* <Link className="" href="/statement"  eventKey="2" > */}
          <p className={classes.accountboxtext}>Learning Center</p>
          {/* </Link> */}
          </div>
          <div className="col-md-2">
          <Image style={{marginTop:"10px"}} alt= "" className="" src="/images/external.svg" width="20" height="12"/>
          </div>
      </div>
       
        
       
   


      </div>

              </div>
                </div>
                <div className="col-md-1"></div>
              </div>




                </div>
          </div>
         
   
 

    </div>

  


    )
    
    
}


export {Profileoptions as default}