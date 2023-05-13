import React, {Fragment} from "react"
import Head from "next/head"
import Realestate from "../../components/invest/Realestate"

const InvestRealestatePage = () => {
  return (
    <Fragment>
    <Head>
    <title>Invest | Real Estate | Circle Finance </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Realestate/>
</Fragment>
   
  )
}

export default  InvestRealestatePage