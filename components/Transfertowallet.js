import React, { useEffect, useState } from 'react';
import { Nav, Form } from 'react-bootstrap'
import Link from 'next/link';
import Topbar from './Topbar';
import Sidebar from './Sidebar'

import "../js/main.js"
import $ from 'jquery'
import Pageloader from './Pageloader';


const Transfertowallet = () => {
  


const beforeCopy = <div><i class="far fa-copy copyicon"></i> Copy To Clipboard</div>
const afterCopy = <div> Copied!</div>

  const [notify, setnotify] = useState("")
  const [clipboardText, setClipboardText] = useState(beforeCopy)
  const copyClipboard = () => {
    navigator.clipboard.writeText('0127602360')
  
    setClipboardText(afterCopy)
    setTimeout(function() {setClipboardText(beforeCopy)}, 1000);
    
  }

  // const bank = localStorage.getItem("bank")
  // const pin = localStorage.getItem("pin")

  // console.log(bank)
  // console.log(pin)





  const nextstep1 = () => {
    if(document.getElementById("amount").value === ""){
      setnotify("Input an amount")
  }

  else if(document.getElementById("bank").value === ""){
    setnotify("Missing Bank")
}

else if(document.getElementById("pin").value === ""){
  setnotify("Input your 4 digit pin")
}

else if(document.getElementById("pin").value !== pin){
    setnotify("You entered an Incorrect pin")
  }

  else{
    $(".withdrawstepone").slideDown();
    $(".withdrawstepone").css({ 'display': 'none' });
    $(".withdrawsteptwo").toggle( "slide" );
  }

}




const gohome = () =>{
window.location.replace("/home");
}
  
    return (
      
      <div>
          {/* <Pageloader/> */}
          <div class="row thesidebarrow">
          <div class="col-md-2 thesidebar">
          <Sidebar/>

</div>

              <div class="col-md-10">
              <Topbar/>

           
<div className="row">
 
    <div className="col-md-4 tabs webapptabs  withdrawstepone">
  


    <Link className="goback" href="/transfer"  eventKey="2" activeClassName="is-active" >
              <p class="loansareavailable2 " style={{paddingLeft:"0px", cursor:"pointer"}}>
                <img className="" src="images/arrow-left.svg"/> <span class="gobackp">Back</span></p>
              </Link>


<div className="transfertobox">
    <h4 style={{color:"#2D3748", fontSize:"10px"}}>ACCOUNT NUMBER</h4>
    <h4 style={{color:"#1A202C", fontSize:"1.875rem"}}>0127602360</h4>
    <h4 style={{color:"#718096", fontSize:"13px", paddingTop:"3px"}}>Providus Bank</h4>
</div>
<div className="transfertobox2">
<p 
style={{color:"#000000", fontSize:"14px", textAlign:"center", cursor:"pointer"}}
onClick={copyClipboard }
> 
    
     {clipboardText}
     
     </p>

</div>



  {/* <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Amount to withdraw</Form.Label>
      <Form.Control   id="amount" width="60px" type="text" placeholder="Amount to withdraw" />
  </Form.Group>
   
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>Destination Bank</Form.Label>
      <Form.Control className="makeuppercase"  id="bank" width="60px" type="text" value={bank} disabled/>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>For security reasons, please enter your pin</Form.Label>
      <Form.Control   id="pin" width="60px" type="number" placeholder="Security pin" />
  </Form.Group> */}


  <p class="" style={{ color:"#DD3737", fontWeight:"bold",textAlign:"center"}}>{notify}</p>


  
{/* <p class="" style={{textAlign:"center"}} >
<button  className="loanbutton" onClick={nextstep1}>Withdraw 
<div class="spinner-border spinner-border-sm" role="status">
<span class="sr-only">Loading...</span>
</div>

</button>
</p> */}



 
<br/>
<br/>
</div>





<div className="col-md-5 withdrawsteptwo">
{/* <p onClick={gobacktostep2} class="loansareavailable2 goback " style={{paddingLeft:"0px"}}>
                <img className="" src="images/arrow-left.svg"/> <span class="gobackp">Back</span></p>
        */}
<p  className="bookingnote">Withdrawal request received</p>
<hr/>
<div className="row successbox">
    <div className="col-md-2 col-2">
    <img className="mobilesuccess" src="images/tick-circle.svg"/>
    </div>

    <div className="col-md-6 col-10"style={{paddingLeft:"0px"}}>
    <p  className="bookingsubnote">
    Your withdrawal request has been received. You will receive your funds in a few minutes.
      </p>

        </div>
</div>

<p class="" style={{marginTop:"10px"}} >
<button  className="editloanbutton" onClick={ gohome}>Go back to dashboard
<div class="spinner-border spinner-border-sm" role="status">
<span class="sr-only">Loading...</span>
</div>
</button>
</p>



</div>


</div>









                  </div>
          </div>
         
   
 

    </div>

  


    )
    
    
}


export {Transfertowallet as default}