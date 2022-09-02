import React, {Fragment} from "react"
import Head from "next/head"
import Withdraw from "../components/Withdraw"

const WithdrawPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Withdraw | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Withdraw/>
</Fragment>
   
  )
}

export default WithdrawPage 