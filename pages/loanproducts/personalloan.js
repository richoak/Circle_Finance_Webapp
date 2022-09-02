import React, {Fragment} from "react"
import Head from "next/head"
import Personalloan from "../../components/Personalloan"

const PersonalloanPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Personal Loan | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Personalloan/>
</Fragment>
   
  )
}

export default PersonalloanPage 