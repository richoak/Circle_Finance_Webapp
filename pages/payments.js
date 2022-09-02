import React, {Fragment} from "react"
import Head from "next/head"
import Payments from "../components/Payments"

const PaymentsPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Payments | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Payments/>
</Fragment>
   
  )
}

export default PaymentsPage