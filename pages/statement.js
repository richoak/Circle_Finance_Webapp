import React, {Fragment} from "react"
import Head from "next/head"
import Statement from "../components/account/Statement"

const StatementPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Statement | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Statement/>
</Fragment>
   
  )
}

export default StatementPage 