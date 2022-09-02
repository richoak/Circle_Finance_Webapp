import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import Topbar from './Topbar';
import Sidebar from './Sidebar'

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
         <div class="row thesidebarrow">
            <div class="col-md-2 thesidebar">
               <Sidebar />

            </div>

            <div class="col-md-10">
               <Topbar />


               <div class="row">

                  <div className="col-md-3 loanboxes" style={{cursor:"pointer"}}>
                     
                        <img className="dashhomecard" src="./images/loanproducts.svg" />
                        <Link href="/loanproducts" eventKey="10">
                        <div className="webappdetailsbg">
                           <p class="loanproductstitle">Loans products </p>
                           <p className="loansareavailablenote2" style={{ paddingLeft: "0px" }}>
                              The various loan products available<br /> to our Credisol customers
                           </p>
                        </div>
                        
                     </Link>
                  </div>

                  <div className="col-md-3 loanboxes" style={{cursor:"pointer"}}>
                    

                        <img className="dashhomecard" src="./images/loanhistory1.svg" />
                        <Link href="/loan/history" eventKey="10">
                        <div className="webappdetailsbg">
                           <p class="loanproductstitle">Loans history </p>
                           <p className="loansareavailablenote2" style={{ paddingLeft: "0px" }}>
                              Fill up the necessary information to verify<br /> and have full access to your account.
                           </p>
                        </div>
                     </Link>
                  </div>


                  <div className="col-md-3 loanboxes" style={{cursor:"pointer"}}>
                     

                        <img className="dashhomecard" src="./images/accountofficer.svg" />
                        <Link href="/loan/accountofficer" eventKey="10">
                        <div className="webappdetailsbg">
                           <p class="loanproductstitle">Account officer </p>
                           <p className="loansareavailablenote2" style={{ paddingLeft: "0px" }}>
                              Speak to a credit officer today to access a<br />  loan and make the most of it.
                           </p>
                        </div>
                     </Link>
                  </div>

                  {/* <div className="col-md-3">
    <Nav.Link as={Link} to="/loantopup" eventKey="10">
 
 <img className="dashhomecard" src="./images/loantopup.svg"/>
 <div className="webappdetailsbg">
 <p class="loanproductstitle">Loan top up </p>
 <p className="loansareavailablenote2" style={{paddingLeft:"0px"}}>
 Have a running loan, but have a pressing<br/> financial need? Apply for a top up loan.
</p>




 </div>
 </Nav.Link>
    </div> */}




               </div>







            </div>
         </div>




      </div>




   )


}


export { Loan as default }