import React, { useEffect, useState, useReducer} from 'react';
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './Profile.module.css'
import ProfileTab from './ProfileTab'
import NextofkinTab from './NextofkinTab'
import GovernmentTab from './GovernmentTab'
import EmploymentTab from './EmploymentTab'

// import "../js/main.js"


const Profile = () => {
    const [ isProfile, setisProfile ] = useState(true) 
    const [ isKin, setisKin ] = useState(false) 
    const [ isGovernment, setisGovernment ] = useState(false) 
    const [ isEmployment, setisEmployment ] = useState(false) 


const loadProfile = () => {
    setisProfile(true)
    setisKin(false)
    setisGovernment(false)
    setisEmployment(false)
}

const loadKin = () => {
    setisProfile(false)
    setisKin(true)
    setisGovernment(false)
    setisEmployment(false)
}

const loadGovernment = () => {
    setisProfile(false)
    setisKin(false)
    setisGovernment(true)
    setisEmployment(false)
}

const loadEmployment = () => {
    setisProfile(false)
    setisKin(false)
    setisGovernment(false)
    setisEmployment(true)
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
                  
              {/* <div className="row accounttop">
              <div className="col-md-1 col-3">
                <p>
                <Image  className="" src="/images/userface.svg" width="58" height="58"/>

                </p>
              </div>

              <div className="col-md-2 col-4">
              <p > <span className="loansareavailable2 ">John Doe</span> <br/><span  className="accountemail">johndoe@gmail.com</span></p>  
              </div>
              </div> */}
              <div className={classes.goback}>
              <Link className="" href="/account"  eventKey="2" >
              <Image style={{cursor:"pointer"}} src="/images/back.svg" width="20" height="20" layout="intrinsic" alt="" />
              </Link>
              </div>
    
    <div className={classes.personalprofileboxes}>
    <button onClick={loadProfile} 
    className={isProfile ? "profiletabbuttonsactive": "profiletabbuttons"}
    > 
    Personal profile</button>
    <button onClick={loadKin}  
    // className={classes.button}
    className={isKin ? "profiletabbuttonsactive": "profiletabbuttons"}
    > Next of kin</button>
    <button onClick={loadGovernment} 
    className={isGovernment ? "profiletabbuttonsactive": "profiletabbuttons"}
    > Government I.D</button>
    <button onClick={loadEmployment}  
   className={isEmployment ? "profiletabbuttonsactive": "profiletabbuttons"}
    > 
    Employment (Loans only)</button>
    </div>
    

      <div style={{width:"350px"}}>
            {
                isProfile && (
                    <div>
                        <ProfileTab/>
                    </div>
                )
            }

            {
                isKin && (
                    <div>
                        <NextofkinTab/>
                    </div>
                )
            }

            {
                isGovernment && (
                    <div>
                        <GovernmentTab/>
                    </div>
                )
            }

{
                isEmployment && (
                    <div>
                        <EmploymentTab/>
                    </div>
                )
            }



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


export {Profile as default}