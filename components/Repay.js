import React, { useEffect, useState, useReducer} from 'react';
import Link from 'next/link';
import Topbar from './Topbar';
import Sidebar from './Sidebar'
import Image from 'next/image';
import classes from './Profileoptions.module.css'
import "../js/main.js"


const Repay = () => {

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

              </div>
                </div>
                <div className="col-md-1"></div>
              </div>




                </div>
          </div>
         
   
 

    </div>

  


    )
    
    
}


export {Repay as default}