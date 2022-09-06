import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import Topbar from './Topbar';
import Sidebar from './Sidebar'
import Image from 'next/image';

import "../js/main.js"
import $ from 'jquery'
import AuthContext from '../store/auth-context';


const Loan = () => {

   const authCtx = useContext(AuthContext)
console.log(authCtx.isLoggedIn)

   const [notify, setnotify] = useState("")
   const [notify2, setnotify2] = useState("")
   const [notify3, setnotify3] = useState("")
   const [email, setemail] = useState("")



   return (

      <div>
         <div className="row thesidebarrow">
            <div className="col-md-2 thesidebar">
               <Sidebar />

            </div>

            <div className="col-md-10">
               <Topbar />


               <div className="row">

                  {/* <div className="col-md-3 col-12 loanboxes" style={{cursor:"pointer"}}>
                     
                        <Image className="dashhomecard" src="/images/loanproducts.svg" width="290" height="136"/>
                        <Link href="/loanproducts" eventKey="10">
                        <div className="webappdetailsbg">
                           <p className="loanproductstitle">Loans products </p>
                           <p className="loansareavailablenote2" style={{ paddingLeft: "0px" }}>
                              The various loan products available<br /> to our Credisol customers
                           </p>
                        </div>
                        
                     </Link>
                  </div>

                  <div className="col-md-3 col-12 loanboxes" style={{cursor:"pointer"}}>
                    

                        <Image className="dashhomecard" src="/images/loanhistory1.svg"  width="290" height="136" />
                        <Link href="/loan/history" eventKey="10">
                        <div className="webappdetailsbg">
                           <p className="loanproductstitle">Loans history </p>
                           <p className="loansareavailablenote2" style={{ paddingLeft: "0px" }}>
                              Fill up the necessary information to verify<br /> and have full access to your account.
                           </p>
                        </div>
                     </Link>
                  </div>


                  <div className="col-md-3 col-12 loanboxes" style={{cursor:"pointer"}}>
                     

                        <Image className="dashhomecard" src="/images/accountofficer.svg"  width="290" height="136" />
                        <Link href="/loan/accountofficer" eventKey="10">
                        <div className="webappdetailsbg">
                           <p className="loanproductstitle">Account officer </p>
                           <p className="loansareavailablenote2" style={{ paddingLeft: "0px" }}>
                              Speak to a credit officer today to access a<br />  loan and make the most of it.
                           </p>
                        </div>
                     </Link>
                  </div> */}

    
                  <div>
  <Link className="" href="/loanproducts" id="availableloanoptions2"  eventKey="2" activeClassName="is-active" >
<div className="row loanproductoptions" >
<div className="col-md-1 col-3">
  <p style={{float:"right"}} >
  <Image className="" src="/images/businessloans.svg" height="48" width="48"/>
  </p>
</div>

<div className="col-md-3 col-7">
<p > <span className="loansareavailable2">Loan Products</span> <br/>
<span  className="loansareavailablenote2"> The various loan products available to our Credisol customers</span></p>  

</div>

<div className="col-md-1 col-2">
<Image style={{marginTop:"10px"}} className="" src="/images/arrow-right.svg" height="24" width="24"/>
</div>

</div>
</Link>
<hr className="hrmarginright900"/>
  </div>


  

  <div>
  <Link className="" href="/loan/history" id="availableloanoptions2"  eventKey="2" activeClassName="is-active" >
<div className="row loanproductoptions" >
<div className="col-md-1 col-3">
  <p style={{float:"right"}} >
  <Image className="" src="/images/businessloans.svg" height="48" width="48"/>
  </p>
</div>

<div className="col-md-3 col-7">
<p > <span className="loansareavailable2">Loan History</span> <br/>
<span  className="loansareavailablenote2"> Fill up the necessary information to verify and have full access to your account.</span></p>  

</div>

<div className="col-md-1 col-2">
<Image style={{marginTop:"10px"}} className="" src="/images/arrow-right.svg" height="24" width="24"/>
</div>

</div>
</Link>
<hr className="hrmarginright900"/>
  </div>

  <div>
  <Link className="" href="/loan/accountofficer" id="availableloanoptions2"  eventKey="2" activeClassName="is-active" >
<div className="row loanproductoptions" >
<div className="col-md-1 col-3">
  <p style={{float:"right"}} >
  <Image className="" src="/images/businessloans.svg" height="48" width="48"/>
  </p>
</div>

<div className="col-md-3 col-7">
<p > <span className="loansareavailable2">Account Officer</span> <br/>
<span  className="loansareavailablenote2">  Speak to a credit officer today to access a loan and make the most of it.</span></p>  

</div>

<div className="col-md-1 col-2">
<Image style={{marginTop:"10px"}} className="" src="/images/arrow-right.svg" height="24" width="24"/>
</div>

</div>
</Link>
<hr className="hrmarginright900"/>
  </div>

  


               </div>







            </div>
         </div>




      </div>




   )


}


export { Loan as default }