import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';

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
          <div class="row thesidebarrow">
          <div class="col-md-2 thesidebar">
          <Sidebar/>

</div>

              <div class="col-md-10">
              <Topbar/>

           
<div className="row">
 
    <div className="col-md-10 tabs tabsmobile">


    <div className="row director1row">
    <div className="col-md-5 ">
    <p class="wallethead" >Contact us </p>

    <div className="row">
            <div className="col-md-1 col-1"><img width="40px" src="/images/phone.svg"/></div>
            <div className="col-md-8 col-8">
            <a href="tel:07061875167">
              <p className="phone">
              +234 901 685 4815 
              </p>
              </a>
              </div>
        </div>

        <div className="row" style={{paddingTop:"15px"}}>
            <div className="col-md-1 col-1">
            <img width="40px" src="/images/email.svg"/>
            </div>

            <div className="col-md-8 col-9">
            <a style={{textDecoration:"none"}} href="mailto:info@credisol.com">
            <p className="sendamail">
          
            Send a mail to customer support
     
             </p>
             </a>
        
            {/* <p className="walletbank2">Send a mail to customer support </p> */}
            </div>

        </div>

<hr/>

 <div className="row officemap">
            <div className="col-md-9 col-8">
            <p className="officeaddress">Rich-Oak, Plot 1072 Grand Pela Hotel  Street <br/> Durumi, Abuja</p>
            </div>

            <div className="col-md-3 col-4">
           
            <a target="_blank" href="https://www.google.com/maps/place/Rich-Oak,+Abuja"
                       style={{textDecoration:"none", color:"#666666"}} > <img width="24px" src="/images/location.svg"/></a>
            </div>

        </div>
<hr/>
<p className="smtitle">Visit our social media pages</p>

<div className="row">
    <div className="col-md-6 col-4">
    <div className="row">
            <div className="col-md-1"><img width="12px" src="/images/facebook.svg"/></div>
           <div className="col-md-8">
           <a style={{textDecoration:"none"}} target="_blank" href="https://facebook.com/credi-sol">
             <p className="smtext">Facebook </p>
             </a>
             </div>
        </div>
    </div>

    <div className="col-md-6 col-4">
    <div className="row">
            <div className="col-md-1"><img width="15px" src="/images/instagram.svg"/></div>
            
            <div className="col-md-8">
            <a style={{textDecoration:"none"}} target="_blank" href="https://facebook.com/credi-sol">
              <p className="smtext">Instagram </p>
              </a>
              </div>
        </div>
    </div>

    <div className="col-md-6 col-4">
    <div className="row">
            <div className="col-md-1"><img width="15px" src="/images/twitter.svg"/></div>
            <div className="col-md-8">
            <a style={{textDecoration:"none"}} target="_blank" href="https://twitter.com/credi-sol">
              <p className="smtext">Twitter </p>
              </a>
              </div>
        </div>
    </div>


    <div className="col-md-5"></div>
</div>
    </div>

    <div className="col-md-6 col-12 smrow2">
    <p class="wallethead faqmobile" >Frequently asked questions </p>
    <div className="row">
            <div className="col-md-1 col-1"><img width="35px" src="/images/question.svg"/></div>
            <div className="col-md-10 col-10"><p className="faqtext">This section will help give you insights and answers to some of our most commonly asked questions. </p></div>
        </div>

        <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header className="faqqheader">Who can get a loan from credisol? 

</Accordion.Header>
    <Accordion.Body>

    Business owners, salary earners, and visa applicants.


    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header className="faqqheader">How can I get a loan?

</Accordion.Header>
    <Accordion.Body>
    You create an account via credisol.com an complete your credisol profile, to start accessing loans.

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header className="faqqheader">Are loans only open to business owners alone?
</Accordion.Header>
    <Accordion.Body>
    Small businesses, salary earners, medium enterprises, large ventures that meet the criteria for a loan are also to access financing from credisol.

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="3">
    <Accordion.Header className="faqqheader">How much is the interest rate:
</Accordion.Header>
    <Accordion.Body>
    5% on travel loans and 6-10% on business depending on the type of business.

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="4">
    <Accordion.Header className="faqqheader">Do you finance visa application?
</Accordion.Header>
    <Accordion.Body>
    No, we don’t we only help finance proof of funds in the individual or corporate account.

    </Accordion.Body>
  </Accordion.Item>

  {/* <Accordion.Item eventKey="5">
    <Accordion.Header className="faqqheader">How can I schedule a site Inspection?

</Accordion.Header>
    <Accordion.Body>
    You can schedule a site Inspection by filling this form here 


    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="6">
    <Accordion.Header className="faqqheader">Who can I speak to for further assistance?


</Accordion.Header>
    <Accordion.Body>
    You can call us on 09016854815 or send an email to info@earthvii.org



    </Accordion.Body>
  </Accordion.Item> */}


</Accordion>


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