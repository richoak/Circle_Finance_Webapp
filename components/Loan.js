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

                  <div className="col-md-3 loanboxes" style={{cursor:"pointer"}}>
                     
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

                  <div className="col-md-3 loanboxes" style={{cursor:"pointer"}}>
                    

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


                  <div className="col-md-3 loanboxes" style={{cursor:"pointer"}}>
                     

                        <Image className="dashhomecard" src="/images/accountofficer.svg"  width="290" height="136" />
                        <Link href="/loan/accountofficer" eventKey="10">
                        <div className="webappdetailsbg">
                           <p className="loanproductstitle">Account officer </p>
                           <p className="loansareavailablenote2" style={{ paddingLeft: "0px" }}>
                              Speak to a credit officer today to access a<br />  loan and make the most of it.
                           </p>
                        </div>
                     </Link>
                  </div>

                  {/* <div className="col-md-3">
    <Nav.Link as={Link} to="/loantopup" eventKey="10">
 
 <Image className="dashhomecard" src="./images/loantopup.svg"/>
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