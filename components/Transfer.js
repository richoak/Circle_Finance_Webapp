import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from './Topbar';
import Sidebar from './Sidebar'

import "../js/main.js"
import $ from 'jquery'

// import Pageloader from './Pageloader';
// import "../stylesheets/pageloader.css"

const Transfer = () => {
  useEffect(() =>{
    document.title = "Transfer | Credisol"
},[])
 

  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")

//   useEffect(() => {
//     $(".overlay").fadeIn(1);
//     var settingsthree = {
//       "url": "https://credisol-app.herokuapp.com/v1/loans/all/",
//       "method": "GET",
//       "timeout": 0,
      
//       "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
//       error: function (xhr, status, error) {
//         console.log(xhr)
//         // if(xhr.status === 401){
//         //   window.location.replace("/");
//         // }
//       },
//     }
    
//     $.ajax(settingsthree).done(function (responsethree) {
//       console.log(responsethree)
    
//       if(responsethree != "" && responsethree[0].status !=="cleared"){
//         $("#availableloanoptions").css({ 'display': 'none' });
//         $("#availableloanoptions2").css({ 'display': 'none' });
//         $("#availableloanoptions3").css({ 'display': 'none' });
      
//         $(".overlay").fadeOut(0);
//       }

//       else{
//         $("#pendingloandiv").css({ 'display': 'none' });
//         $(".overlay").fadeOut(0);
//       }
     
 
 
//     })
    
//   }, [])
  
    return (
      
      <div>
                {/* <Pageloader/> */}
          <div className="row thesidebarrow">
          <div className="col-md-2 thesidebar">
          <Sidebar/>

</div>

              <div className="col-md-10">
              <Topbar/>

              <Link className="goback" href="/home"  eventKey="2" activeClassName="is-active" >
              <p className="loansareavailable2 " style={{paddingLeft:"20px", cursor:"pointer"}}><img className="" src="images/arrow-left.svg"/> <span className="gobackp">Back</span></p>
              </Link>


{/* <Nav.Link className="" as={Link} to="/personalloan" id="availableloanoptions" eventKey="2" activeClassName="is-active" >
<div className="row loanproductoptions" >
<div className="col-md-1">
<img style={{float:"right"}} className="" src="images/consumerloans.svg"/>
</div>

<div className="col-md-3 col-4">
<p > <span class="loansareavailable2 ">Consumer Loans</span> <br/><span  className="loansareavailablenote2">Personal loans available for individuals</span></p>  

</div>

<div className="col-md-1">
 <img style={{marginTop:"10px"}} className="" src="images/arrow-right.svg"/>
</div>
<hr/>
</div>
</Nav.Link>
<hr style={{marginRight:"900px"}}/> */}


<Link className="" href="/transfertowallet" id="availableloanoptions2"  eventKey="2" activeClassName="is-active" >
<div className="row loanproductoptions" >
<div className="col-md-1">
<img style={{float:"right"}} className="" src="images/businessloans.svg"/>
</div>

<div className="col-md-3">
<p > <span className="loansareavailable2">Transfer to Wallet</span> <br/><span  className="loansareavailablenote2">Transfer money to your wallet to repay a loan</span></p>  

</div>

<div className="col-md-1">
 <img style={{marginTop:"10px"}} className="" src="images/arrow-right.svg"/>
</div>
{/* <hr/> */}
</div>
</Link>
<hr className="hrmarginright900"/>



<div className="row loanproductoptions" >
<div className="col-md-1">
<img style={{float:"right"}} className="" src="images/travelloans.svg"/>
</div>

<Link className="" href="/withdraw" id="availableloanoptions3" eventKey="2" activeClassName="is-active" >

<div className="col-md-3">
<p > <span className="loansareavailable2">Withdraw to bank</span> <br/><span  className="loansareavailablenote2">Receive money in minutes </span></p>  

</div>
</Link>
<div className="col-md-1">
 <img style={{marginTop:"10px"}} className="" src="images/arrow-right.svg"/>
</div>
{/* <hr/> */}
</div>
<hr className="hrmarginright900"/>









                  </div>
          </div>
         
   
 

    </div>

  


    )
    
    
}


export {Transfer as default}