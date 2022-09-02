import React, {Fragment} from "react"
import Head from "next/head"
import Transfer from "../components/Transfer"

const TransferPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Transfer | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Transfer/>
</Fragment>
   
  )
}

export default TransferPage 