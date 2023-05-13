import React, {Fragment} from "react"
import Head from "next/head"
import Security from "../components/account/Security"

const SecurityPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Security | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Security/>
</Fragment>
   
  )
}

export default SecurityPage 