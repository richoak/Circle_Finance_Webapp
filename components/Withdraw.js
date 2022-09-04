import React, { useEffect, useState, useRef } from 'react';
import { Nav, Form } from 'react-bootstrap'
import Link from 'next/link';
import Topbar from './Topbar';
import Sidebar from './Sidebar'

import "../js/main.js"
import $ from 'jquery'
import Pageloader from './Pageloader';
import useHttp from '../hooks/use-http';


const Withdraw = () => {
  
  const walletRef = useRef()
  const amountRef = useRef()
  const destinationRef = useRef()
  const pinRef = useRef()


  const [notify, setnotify] = useState("")
  const [walletBalance, setWalletBalance ] = useState(0)
  const [ bankCode, setBankCode ] = useState("")
  const [ bank, setBank ] = useState("")
  const [ providusaccountnumber, setprovidusaccountnumber ] = useState("")
  const [ pin, setPin ] = useState("")

  useEffect(() => {

    setprovidusaccountnumber(providusaccountnumber)
    setBank(localStorage.getItem("bank"))
    var user_bank =localStorage.getItem("bank")
    if (user_bank ==="gtb"){
      setBankCode("000013")
    }
    else if(user_bank ==="diamond"){
      setBankCode("000005")
    }

    else if(user_bank ==="ecobank"){
      setBankCode("000010")
    }

    else if(user_bank ==="fidelity"){
      setBankCode("000007")
    }

    else if(user_bank ==="diamond"){
      setBankCode("000005")
    }

    else if(user_bank ==="firstbank"){
      setBankCode("000016")
    }

    else if(user_bank ==="fcmb"){
      setBankCode("100031")
    }

    else if(user_bank ==="heritage"){
      setBankCode("000020")
    }

    else if(user_bank ==="keystone"){
      setBankCode("000002")
    }

    else if(user_bank ==="polaris"){
      setBankCode("000008")
    }

    else if(user_bank ==="providus"){
      setBankCode("000023")
    }

    else if(user_bank ==="stanbic"){
      setBankCode("000012")
    }

    else if(user_bank ==="standard"){
      setBankCode("000021")
    }

    else if(user_bank ==="sterling"){
      setBankCode("000001")
    }

    else if(user_bank ==="suntrust"){
      setBankCode("000022")
    }

    else if(user_bank ==="union"){
      setBankCode("000018")
    }

    else if(user_bank ==="uba"){
      setBankCode("000004")
    }

    else if(user_bank ==="unity"){
      setBankCode("000011")
    }

    else if(user_bank ==="wema"){
      setBankCode("000017")
    }

    else if(user_bank ==="zenith"){
      setBankCode("000015")
    }
    // setPin(localStorage.getItem('pin'))
  })
  
  // GET WALLET DETAILS
  const { sendRequest:fetchWallet }  = useHttp();
  useEffect(() => {
    const providusid = localStorage.getItem("providusid")
    const transformWallet = ((data) => {
      console.log(data)
      setWalletBalance(data.balance)
 
      $(".overlay").fadeOut(0);

  })


  fetchWallet({
      url: `https://credisol-app.herokuapp.com/v1/wallet/${providusid}/virtual_accounts/`,
      method: "GET",
      headers: { 
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + localStorage.getItem("access_token")
      }
  }, transformWallet)
  }, [])
    // GET WALLET DETAILS
  
  const nextstep1 = () => {
    localStorage.getItem('pin')
    console.log(pinRef.current.value)
    if(amountRef.current.value === ""){
      setnotify("Input an amount")
  }

  else if(destinationRef.current.value === ""){
    setnotify("Missing Bank")
}

else if(pinRef.current.value === ""){
  setnotify("Input your 4 digit pin")
}

else if(pinRef.current.value !==  localStorage.getItem("pin")){
    setnotify("You entered an Incorrect pin")
  }

  else{
    $(".spinner-border").css({ 'display': 'inline-block' });
    setnotify("")


    const beneficiary_account_name = localStorage.getItem("lastname") + " " +   localStorage.getItem("firstname")
    const beneficiary_account_number = localStorage.getItem("accountnumber")
   
    const transaction_amount = amountRef.current.value
    const transaction_reference = "CS"
    const narration = "Transfer from credisol"
    const source_account_name = localStorage.getItem("lastname") + " " +   localStorage.getItem("firstname")
    const virtual_account = localStorage.getItem("providusid")
    
    console.log(beneficiary_account_name)
    console.log(beneficiary_account_number)
    console.log(bankCode)
    console.log(transaction_amount)
    console.log(transaction_reference)
    console.log(narration)
    console.log(source_account_name)
    console.log(virtual_account)

    const obj ={
      
        "beneficiary_account_name":beneficiary_account_name,
        "beneficiary_account_number": beneficiary_account_number,
        "bank" : bank,
        "transaction_amount" : transaction_amount,
        "transaction_reference" : transaction_reference,
        "narration": narration,
        "source_account_name": source_account_name,
        "virtual_account": virtual_account,
        "beneficiary_bank": bankCode
      
      
    }

    var settingsthree = {
      url: 'https://credisol-app.herokuapp.com/v1/wallet/nip_transfer/',
      "method": "POST",
      "timeout": 0,
      "headers": {  'Content-Type': 'application/json',
          "Authorization": "Bearer " + localStorage.getItem("access_token", )},
      "data": JSON.stringify(obj)
  
      
      ,
      error: function (xhr, status, error) {
        console.log(xhr)
        // if(xhr.status === 401){
        //   window.location.replace("/");
        // }
      },
    }

    $.ajax(settingsthree).done(function (responsethree) {
      console.log(responsethree)
      $(".spinner-border").css({ 'display': 'none' });
      $(".withdrawstepone").slideDown();
      $(".withdrawstepone").css({ 'display': 'none' });
      $(".withdrawsteptwo").toggle( "slide" );
      $(".overlay").fadeOut(0);

      // window.location.replace("/profileoptions");
    })

  }

}




const gohome = () =>{
  $(".spinner-border").css({ 'display': 'inline-block' });
window.location.replace("/home");
}
  
    return (
      
      <div>
          <Pageloader/>
          <div className="row thesidebarrow">
          <div className="col-md-2 thesidebar">
          <Sidebar/>

</div>

              <div className="col-md-10">
              <Topbar/>

           
<div className="row">
 
    <div className="col-md-4 tabs webapptabs  withdrawstepone">
    <Link className="goback" href="/transfer"  eventKey="2" activeClassName="is-active" >
              <p className="loansareavailable2 " style={{paddingLeft:"0px", cursor:"pointer"}}>
                <img className="" src="images/arrow-left.svg"/> <span className="gobackp">Back</span></p>
              </Link>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Wallet Balnce</Form.Label>
      <Form.Control   id="" width="60px" type="text" ref={walletRef} value={walletBalance} placeholder="Amount to withdraw" disabled/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Amount to withdraw</Form.Label>
      <Form.Control   id="amount" width="60px" ref={amountRef} type="text" placeholder="Amount to withdraw" />
  </Form.Group>
   
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>Destination Bank</Form.Label>
      <Form.Control className="makeuppercase"  id="bank" ref={destinationRef} width="60px" type="text" value={bank} disabled/>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>For security reasons, please enter your pin</Form.Label>
      <Form.Control   id="pin" width="60px" type="password" ref={pinRef} placeholder="Security pin" />
  </Form.Group>


  <p className="" style={{ color:"#DD3737", fontWeight:"bold",textAlign:"center"}}>{notify}</p>


  
<p className="" style={{textAlign:"center"}} >
<button  className="loanbutton" onClick={nextstep1}>Withdraw 
<div className="spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>

</button>
</p>



 
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

<p className="" style={{marginTop:"10px"}} >
<button  className="editloanbutton" onClick={ gohome}>Go back to dashboard
<div className="spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
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


export {Withdraw as default}