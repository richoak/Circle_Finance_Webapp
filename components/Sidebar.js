import React, { Fragment } from "react"
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Sidebar = () => {
    const router = useRouter();

    return(
        <Fragment>
          <div className="mainsidebar">
            <div  className="navbarlogo" >
            <Image alt="" src="/images/logo.svg" width="200" height="35"/>
            </div>
          
          {/* <p className="navbarlogo"> <Image alt="" className="" src="/images/logo.svg" width="100" height="25"/></p> */}
       
       <Link className="" href="/home" activeClassName="is-active" >
          <p className={router.pathname == "/home" ? "thenavbarmenu thenavbaractive" : "thenavbarmenu"}>
           <Image className=""  alt="" style={{marginTop:"0px"}}  src="/images/home.svg" width="20" height="20"/> 
          <span className={router.pathname == "/home" ? "thenavbarmenuspan thenavbarmenuspanactive" : "thenavbarmenuspan"}>
            
               Home</span>
           </p>
        </Link>

        <Link className="" href="/invest" activeClassName="is-active" >
          <p className={
            router.pathname == "/invest" 
          || router.pathname == "/invest/credit" 
          || router.pathname == "/invest/agriculture" 
          || router.pathname == "/invest/realestate" 
          ? "thenavbarmenu thenavbaractive" : "thenavbarmenu"}>
           <Image className=""  alt="" style={{marginTop:"2px"}} src="/images/invest.svg" width="20" height="20"/> 
          <span className={router.pathname == "/invest" ? "thenavbarmenuspan thenavbarmenuspanactive" : "thenavbarmenuspan"}>   Invest</span>
           </p>
        </Link>

        <Link className="" href="/loan" activeClassName="is-active" >
          <p className={router.pathname == "/loan"
           || router.pathname == "/loan/travelloan" 
           || router.pathname == "/loan/businessloan"
           || router.pathname == "/loan/businessname" 
           || router.pathname == "/loan/consumerloan"
           || router.pathname == "/loan/limited" ? "thenavbarmenu thenavbaractive" : "thenavbarmenu"}>
           <Image className=""  alt="" style={{marginTop:"2px"}} src="/images/loans.svg" width="20" height="20"/> 
          <span className={router.pathname == "/loan" ? "thenavbarmenuspan thenavbarmenuspanactive" : "thenavbarmenuspan"}>   Loans</span>
           </p>
        </Link>

        <Link className="" href="/account" activeClassName="is-active" >
          <p className={router.pathname == "/account" ? "thenavbarmenu thenavbaractive" : "thenavbarmenu"}>
           <Image className=""  alt="" style={{marginTop:"2px"}}  src="/images/account.svg" width="20" height="20"/> 
          <span className={router.pathname == "/account" ? "thenavbarmenuspan thenavbarmenuspanactive" : "thenavbarmenuspan"}>   Account</span>
           </p>
        </Link>

        <Link className="" href="/payments" activeClassName="is-active" >
          <p className={router.pathname == "/payments" ? "thenavbarmenu thenavbaractive" : "thenavbarmenu"}>
           <Image className=""  alt="" style={{marginTop:"2px"}}  src="/images/payments.svg" width="20" height="20"/> 
          <span className={router.pathname == "/payments" ? "thenavbarmenuspan thenavbarmenuspanactive" : "thenavbarmenuspan"}>   Payments</span>
           </p>
        </Link>

        <hr className="sidebarhr"/>

        <Link className="" href="/support" activeClassName="is-active" >
          <p className={router.pathname == "/support" ? "thenavbarmenu thenavbaractive" : "thenavbarmenu"}>
           <Image className=""  alt="" style={{marginTop:"2px"}}  src="/images/support.svg" width="20" height="20"/> 
          <span className={router.pathname == "/support" ? "thenavbarmenuspan thenavbarmenuspanactive" : "thenavbarmenuspan"}>   Support</span>
           </p>
        </Link>

        <Link className="" href="/" activeClassName="is-active" >
          <p className="thenavbarmenu">
           <Image className=""  alt="" style={{marginTop:"2px"}}  src="/images/logout.svg" width="20" height="20"/> 
          <span className="thenavbarmenuspan">   Log out</span>
           </p>
        </Link>
       
          </div>


        
        </Fragment>
  
    )
}

export default Sidebar