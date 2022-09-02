import React, {Fragment} from "react"
import Head from "next/head"
import Businessloan from "../../components/Businessloan"

const BusinessLoanPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Business Loan | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Businessloan/>
</Fragment>
   
  )
}

export default BusinessLoanPage