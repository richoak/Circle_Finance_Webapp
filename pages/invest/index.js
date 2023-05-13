import React, {Fragment} from "react"
import Head from "next/head"
import Invest from "../../components/Invest/Invest"

const InvestPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Investment products | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Invest/>
</Fragment>
   
  )
}

export default InvestPage