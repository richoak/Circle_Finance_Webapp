import React, { Fragment } from "react"
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
    const router = useRouter();

    return(
        <Fragment>
                  <p className="navbarlogo"> <img className="brandlogo navbarlogo" src="/images/logo.svg"/></p>
       
       <Link className="" href="/home" activeClassName="is-active" >
          <p className={router.pathname == "/home" ? "thenavbarmenu thenavbaractive" : "thenavbarmenu"}>
           <img className="" src="/images/home.svg" /> 
          <span className={router.pathname == "/home" ? "thenavbarmenuspan thenavbarmenuspanactive" : "thenavbarmenuspan"}>   Home</span>
           </p>
        </Link>

        <Link className="" href="/loan" activeClassName="is-active" >
          <p className={router.pathname == "/loan" ? "thenavbarmenu thenavbaractive" : "thenavbarmenu"}>
           <img className="" src="/images/loans.svg" /> 
          <span className={router.pathname == "/loan" ? "thenavbarmenuspan thenavbarmenuspanactive" : "thenavbarmenuspan"}>   Loans</span>
           </p>
        </Link>

        <Link className="" href="/payments" activeClassName="is-active" >
          <p className={router.pathname == "/payments" ? "thenavbarmenu thenavbaractive" : "thenavbarmenu"}>
           <img className="" src="/images/payments.svg" /> 
          <span className={router.pathname == "/payments" ? "thenavbarmenuspan thenavbarmenuspanactive" : "thenavbarmenuspan"}>   Payments</span>
           </p>
        </Link>

        <Link className="" href="/support" activeClassName="is-active" >
          <p className={router.pathname == "/support" ? "thenavbarmenu thenavbaractive" : "thenavbarmenu"}>
           <img className="" src="/images/support.svg" /> 
          <span className={router.pathname == "/support" ? "thenavbarmenuspan thenavbarmenuspanactive" : "thenavbarmenuspan"}>   Support</span>
           </p>
        </Link>


        <Link className="" href="/about" activeClassName="is-active" >
          <p className={router.pathname == "/about" ? "thenavbarmenu thenavbaractive" : "thenavbarmenu"}>
           <img className="" src="/images/about.svg" /> 
          <span className={router.pathname == "/about" ? "thenavbarmenuspan thenavbarmenuspanactive" : "thenavbarmenuspan"}>   About Credisol</span>
           </p>
        </Link>
        
        </Fragment>
  
    )
}

export default Sidebar