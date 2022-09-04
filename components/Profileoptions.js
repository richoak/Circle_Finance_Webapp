import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from './Topbar';
import Sidebar from './Sidebar'

import "../js/main.js"
import $ from 'jquery'

const Profileoptions = () => {


  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")


  
    return (
      
      <div>
          <div className="row thesidebarrow">
          <div className="col-md-2 thesidebar">
          <Sidebar/>

</div>

              <div className="col-md-10">
              <Topbar/>

         


<Link className="" href="/profile"  eventKey="2" activeClassName="is-active" >
<div className="row loanproductoptions">
<div className="col-md-1 col-3">
<img style={{float:"right"}} className="" src="images/consumerloans.svg"/>
</div>

<div className="col-md-3 col-6">
<p > <span className="loansareavailable2 ">Personal details</span> <br/><span  className="loansareavailablenote2">Update your personal details</span></p>  

</div>

<div className="col-md-1 col-3">
 <img style={{marginTop:"10px"}} className="" src="images/arrow-right.svg"/>
</div>
{/* <hr/> */}
</div>
</Link>
<hr className="hrmarginright900"/>


<Link className="" href="/nextofkin"  eventKey="2" activeClassName="is-active" >
<div className="row loanproductoptions">
<div className="col-md-1 col-3">
<img style={{float:"right"}} className="" src="images/businessloans.svg"/>
</div>

<div className="col-md-3 col-6">
<p > <span className="loansareavailable2">Next of Kin</span> <br/><span  className="loansareavailablenote2">Update your NOK`s` details</span></p>  

</div>

<div className="col-md-1 col-3">
 <img style={{marginTop:"10px"}} className="" src="images/arrow-right.svg"/>
</div>
{/* <hr/> */}
</div>
</Link>
<hr className="hrmarginright900"/>



{/* <Nav.Link className="" as={Link} to="/employment"  eventKey="2" activeClassName="is-active" >
<div className="row loanproductoptions">
<div className="col-md-1 col-3">
<img style={{float:"right"}} className="" src="images/travelloans.svg"/>
</div>

<div className="col-md-3 col-6">
<p > <span class="loansareavailable2">Employment</span> <br/><span  className="loansareavailablenote2">Update your employment details</span></p>  

</div>

<div className="col-md-3 col-3">
 <img style={{marginTop:"10px"}} className="" src="images/arrow-right.svg"/>
</div>
<hr/>
</div>
<hr style={{marginRight:"900px"}}/>
</Nav.Link> */}

{/* <Nav.Link className="" as={Link} to="/document"  eventKey="2" activeClassName="is-active" >
<div className="row loanproductoptions">
<div className="col-md-1 col-3">
<img style={{float:"right"}} className="" src="images/travelloans.svg"/>
</div>

<div className="col-md-3 col-6">
<p > <span class="loansareavailable2">Documentation</span> <br/><span  className="loansareavailablenote2">Update your documents</span></p>  

</div>

<div className="col-md-1 col-3">
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


export {Profileoptions as default}