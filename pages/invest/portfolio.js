import React, {Fragment} from "react"
import Head from "next/head"
import Portfolio from "../../components/invest/Portfolio"

const InvestPorrtfolioPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Invest | Portfolio | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Portfolio/>
</Fragment>
   
  )
}

export default  InvestPortfolioPage