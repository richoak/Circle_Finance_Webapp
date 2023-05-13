import React, { useEffect, useState, useReducer} from 'react';
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './Credit.module.css'

// import "../js/main.js"


const Agriculture  = () => {
    const [ isProfile, setisProfile ] = useState(true) 
    const [ isKin, setisKin ] = useState(false) 
    const [ isGovernment, setisGovernment ] = useState(false) 
    const [ isEmployment, setisEmployment ] = useState(false) 



    return (
  <>
        <div>
          <div className="row thesidebarrow">
          <div className="col-md-2 thesidebar">
          <Sidebar/>
          </div>




              <div className="col-md-10">
              <Topbar/>

              <div className="row">


                <div className="col-md-9">
                <div className="accountbox">

              <div className={classes.goback}>
              <Link className="" href="/invest"  eventKey="2" >
              <Image style={{cursor:"pointer"}} src="/images/back.svg" width="20" height="20" layout="intrinsic" alt="" />
              </Link>
              </div>
              <p style={{display:"inline-block", marginTop:"30px"}}>
              <span style={{float:"left", fontWeight:"bold", 
              color:"#A8B0BF"
              }}> Investments </span>
              <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
              color:"#E45E5E"
            }}> &gt; Agriculture</span>
         
            </p>
    <div style={{marginTop:"0px", width:"400px"}}>

    <div style={{marginTop:"40px", width:""}}>
        <p  style={{textAlign:"center"}}>
        <Image src="/images/agriculture2.svg" width="200" height="200" layout="intrinsic" alt="" />

        </p>
    <p
    style={{
        color:"#687181",
        textAlign:"center"
    }}
    >Get ready for exciting investment opportunities in agriculture! Sign up for our newsletter to stay tuned and be among the first to know. We cant wait to share these opportunities with you!</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
 </div>
 </div>
  </>
  


    )
    
    
}


export {Agriculture as default}