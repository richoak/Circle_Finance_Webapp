import React, {Fragment} from "react"
import Head from "next/head"
import Repay from "../components/Repay"

const RepayPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Repay | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Repay/>
</Fragment>
   
  )
}

export default RepayPage 