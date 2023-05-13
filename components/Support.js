import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';
import Image from 'next/image';
import classes from './Support.module.css'
import Topbar from './Topbar';
import Sidebar from './Sidebar'

import "../js/main.js"
import $ from 'jquery'

const Support = () => {




  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")



  const addbankaccount = () =>{

    $(".paymentbox1").slideDown();
    $(".paymentbox1").css({ 'display': 'none' });
    $(".paymentbox2").toggle( "slide" );
}

const addbank = () =>{
    $(".paymentbox2").slideDown();
    $(".paymentbox2").css({ 'display': 'none' });
    $(".paymentbox1").toggle( "slide" );

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
                
        

            <div style={{marginTop:"40px", width:"400px", paddingBottom:"20px"}}>
            <p  className={classes.statementtitle}>Contact Us</p>
         
            <div className={classes.callbox}>
            <div className="row">
              <div className="col-md-2">
              <Image style={{cursor:"pointer"}} src="/images/call.svg" width="35" height="35" layout="intrinsic" alt="" />
              </div>
              <div className="col-md-10">
              <a href="tel:07061875167" style={{textDecoration:"none"}}>
                <p className={classes.phonenumber}>+234 801 234 5678</p>
                </a>
              </div>
            </div>
            </div>

            <div className={classes.mailbox}>
            <div className="row">
              <div className="col-md-2">
              <Image style={{cursor:"pointer"}} src="/images/email.svg" width="35" height="35" layout="intrinsic" alt="" />
              </div>
              <div className="col-md-10">
              <a style={{textDecoration:"none"}} href="mailto:info@credisol.com">
                <p className={classes.phonenumber}>Send a mail to customer support</p>
                </a>
              </div>
            </div>
            </div>
    </div>

    <div style={{marginTop:"40px", width:"400px", paddingBottom:"20px"}}>
    <div className="row">
            
              <div className="col-md-10">
              <a target="_blank" href="https://www.google.com/maps/place/Rich-Oak,+Abuja" style={{textDecoration:"none"}} rel="noreferrer">
                <p className={classes.visitus}>

                    Visit us at <span style={{fontWeight:"bold"}}>Rich-Oak, Plot 1072 Grand<br/> Pela Hotel Street, Durumi, Abuja</span>
          
                  </p>
                  </a>
              </div>
              <div className="col-md-2">
              <Image style={{cursor:"pointer"}} src="/images/externallink.svg" width="18" height="18" layout="intrinsic" alt="" />
              </div>
            </div>
            <hr/>

            <p className={classes.connect}> Connect with us</p>

            <div>
            <a style={{textDecoration:"none"}} target="_blank" rel="noreferrer" href="https://facebook.com/credi-sol">
            <Image style={{cursor:"pointer",paddingLeft:"2px"}} src="/images/facebook.svg" width="30" height="30" layout="intrinsic" alt="" />
            </a>

            <a style={{textDecoration:"none"}} target="_blank" rel="noreferrer" href="https://facebook.com/credi-sol">
            <Image style={{cursor:"pointer", paddiingLeft:"5px"}} src="/images/instagram.svg" width="30" height="30" layout="intrinsic" alt="" />
            </a>

            <a style={{textDecoration:"none"}} target="_blank" rel="noreferrer" href="https://facebook.com/credi-sol">
            <Image style={{cursor:"pointer", paddingLeft:"5px"}} src="/images/twitter.svg" width="30" height="30" layout="intrinsic" alt="" />
            </a>

            <a style={{textDecoration:"none"}} target="_blank" rel="noreferrer" href="https://facebook.com/credi-sol">
            <Image style={{cursor:"pointer",paddinigLeft:"5px"}} src="/images/whatsapp.svg" width="30" height="30" layout="intrinsic" alt="" />
            </a>

            <a style={{textDecoration:"none"}} target="_blank" rel="noreferrer" href="https://facebook.com/credi-sol">
            <Image style={{cursor:"pointer",paddingLeft:"5px"}} src="/images/telegram.svg" width="30" height="30" layout="intrinsic" alt="" />
            </a>

            </div>
    </div>

    <div style={{marginTop:"0px", width:"400px", paddingBottom:"20px"}}>
            <p  className={classes.abouttitle}>About Credisol</p>
         
            <div className="row">   
              <div className="col-md-10">
                <p>Frequently asked questions</p>
              </div>
              <div className="col-md-2">
              <Image style={{cursor:"pointer"}} src="/images/externallink.svg" width="18" height="18" layout="intrinsic" alt="" />
              </div>

              <hr/>
              <div className="col-md-10">
                <p>Visit our website</p>
              </div>
              <div className="col-md-2">
              <Image style={{cursor:"pointer"}} src="/images/externallink.svg" width="18" height="18" layout="intrinsic" alt="" />
              </div>

              <hr/>
              <div className="col-md-10">
                <p>Terms of use</p>
              </div>
              <div className="col-md-2">
              <Image style={{cursor:"pointer"}} src="/images/externallink.svg" width="18" height="18" layout="intrinsic" alt="" />
              </div>

            </div>
    </div>



            </div>
            </div>
            </div>






                  </div>
          </div>
         
   
 

    </div>

  


    )
    
    
}


export {Support as default}