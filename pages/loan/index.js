import React, {Fragment} from "react"
import Head from "next/head"
import Loan from "../../components/Loan"

const LoanPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Loan | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Loan/>
</Fragment>
   
  )
}

export default LoanPage
