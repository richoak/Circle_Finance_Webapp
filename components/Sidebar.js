import React, { Fragment } from "react"
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Sidebar = () => {
    const router = useRouter();

    return(
        <Fragment>
                  <p className="navbarlogo"> <Image className="brandlogo navbarlogo" src="/images/logo.svg" width="100" height="80"/></p>
       
       <Link className="" href="/home" activeClassName="is-active" >
          <p className={router.pathname == "/home" ? "thenavbarmenu thenavbaractive" : "thenavbarmenu"}>
           <Image className="" style={{marginTop:"0px"}}  src="/images/home.svg" width="20" height="20"/> 
          <span className={router.pathname == "/home" ? "thenavbarmenuspan thenavbarmenuspanactive" : "thenavbarmenuspan"}>
            
               Home</span>
           </p>
        </Link>

        <Link className="" href="/loan" activeClassName="is-active" >
          <p className={router.pathname == "/loan" ? "thenavbarmenu thenavbaractive" : "thenavbarmenu"}>
           <Image className="" style={{marginTop:"2px"}} src="/images/loans.svg" width="20" height="20"/> 
          <span className={router.pathname == "/loan" ? "thenavbarmenuspan thenavbarmenuspanactive" : "thenavbarmenuspan"}>   Loans</span>
           </p>
        </Link>

        <Link className="" href="/payments" activeClassName="is-active" >
          <p className={router.pathname == "/payments" ? "thenavbarmenu thenavbaractive" : "thenavbarmenu"}>
           <Image className="" style={{marginTop:"2px"}}  src="/images/payments.svg" width="20" height="20"/> 
          <span className={router.pathname == "/payments" ? "thenavbarmenuspan thenavbarmenuspanactive" : "thenavbarmenuspan"}>   Payments</span>
           </p>
        </Link>

        <Link className="" href="/support" activeClassName="is-active" >
          <p className={router.pathname == "/support" ? "thenavbarmenu thenavbaractive" : "thenavbarmenu"}>
           <Image className="" style={{marginTop:"2px"}}  src="/images/support.svg" width="20" height="20"/> 
          <span className={router.pathname == "/support" ? "thenavbarmenuspan thenavbarmenuspanactive" : "thenavbarmenuspan"}>   Support</span>
           </p>
        </Link>


        <Link className="" href="/about" activeClassName="is-active" >
          <p className={router.pathname == "/about" ? "thenavbarmenu thenavbaractive" : "thenavbarmenu"}>
           <Image className="" style={{marginTop:"2px"}}  src="/images/about.svg" width="24" height="24"/> 
          <span className={router.pathname == "/about" ? "thenavbarmenuspan thenavbarmenuspanactive" : "thenavbarmenuspan"}>   About</span>
           </p>
        </Link>
        
        </Fragment>
  
    )
}

export default Sidebar