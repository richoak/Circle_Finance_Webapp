import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from './Topbar';
import Sidebar from './Sidebar'

import "../js/main.js"
import $ from 'jquery'

// import Pageloader from './Pageloader';


const Businessloan = () => {


  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")


    return (
      
      <div>
                {/* <Pageloader/> */}
          <div class="row thesidebarrow">
          <div class="col-md-2 thesidebar">
          <Sidebar/>

</div>

              <div class="col-md-10">
              <Topbar/>

              <Link className="goback" href="/loanproducts"  activeClassName="is-active" >
              <p class="loansareavailable2 " style={{paddingLeft:"20px", cursor:"pointer"}}><img className="" src="/images/arrow-left.svg"/> <span class="gobackp">Back</span></p>
              </Link>


<Link className="" href="/loanproducts/businessname" id="availableloanoptions"  activeClassName="is-active" >
<div className="row loanproductoptions" >
<div className="col-md-1 col-3">
<img style={{float:"right"}} className="" src="/images/consumerloans.svg"/>
</div>

<div className="col-md-3 col-6">
<p > <span class="loansareavailable2 ">Business Loan</span> <br/><span  className="loansareavailablenote2">For Business name.</span></p>  

</div>

<div className="col-md-1 col-1">
 <img style={{marginTop:"10px"}} className="" src="/images/arrow-right.svg"/>
</div>
{/* <hr/> */}
</div>
</Link>
<hr className="hrmarginright900"/>


<Link className="" href="/loanproducts/limited" id="availableloanoptions2"  eventKey="2" activeClassName="is-active" >
<div className="row loanproductoptions" >
<div className="col-md-1 col-3">
<img style={{float:"right"}} className="" src="/images/businessloans.svg"/>
</div>

<div className="col-md-3 col-6">
<p > <span class="loansareavailable2">Business Loan</span> <br/><span  className="loansareavailablenote2">For Limited Company.</span></p>  

</div>

<div className="col-md-1 col-1">
 <img style={{marginTop:"10px"}} className="" src="/images/arrow-right.svg"/>
</div>
{/* <hr/> */}
</div>
</Link>
<hr className="hrmarginright900"/>


{/* 
<Nav.Link className="" as={Link} to="/travelloan" id="availableloanoptions3" eventKey="2" activeClassName="is-active" >
<div className="row loanproductoptions" >
<div className="col-md-1">
<img style={{float:"right"}} className="" src="images/travelloans.svg"/>
</div>

<div className="col-md-3">
<p > <span class="loansareavailable2">Travel Loans</span> <br/><span  className="loansareavailablenote2">Personal loans available for individuals</span></p>  

</div>

<div className="col-md-1">
 <img style={{marginTop:"10px"}} className="" src="images/arrow-right.svg"/>
</div>
<hr/>
</div>
<hr style={{marginRight:"900px"}}/>
</Nav.Link> */}









                  </div>
          </div>
         
   
 

    </div>

  


    )
    
    
}


export {Businessloan as default}