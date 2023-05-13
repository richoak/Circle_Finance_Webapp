import React, {Fragment} from "react"
import Head from "next/head"
import HomeTab from "../components/payments/HomeTab"

const PaymentsPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Payments | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <HomeTab/>
</Fragment>
   
  )
}

export default PaymentsPage