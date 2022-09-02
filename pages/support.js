import React, {Fragment} from "react"
import Head from "next/head"
import Support from "../components/Support"

const SupportPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Support | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Support/>
</Fragment>
   
  )
}

export default SupportPage