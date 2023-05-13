import React, {Fragment} from "react"
import Head from "next/head"
import Businessname from "../../components/loan/Businessname"

const BusinessNamePage = () => {
  return (
    <Fragment>
    <Head>
    <title>Business name | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Businessname/>
</Fragment>
   
  )
}

export default BusinessNamePage