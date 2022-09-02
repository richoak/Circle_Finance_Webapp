import React, {Fragment} from "react"
import Head from "next/head"
import Loanproducts from "../../components/Loanproducts"

const LoanproductsPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Loan products | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Loanproducts/>
</Fragment>
   
  )
}

export default LoanproductsPage 