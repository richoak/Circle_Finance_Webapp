import React, {Fragment} from "react"
import Head from "next/head"
import Credit from "../../components/invest/Credit"

const InvestCreditPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Invest | Credit | Circle Finance </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Credit/>
</Fragment>
   
  )
}

export default  InvestCreditPage