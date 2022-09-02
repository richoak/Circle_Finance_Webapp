import React, {Fragment} from "react"
import Head from "next/head"
import Businessname from "../../components/Businessname"

const BusinessNamePage = () => {
  return (
    <Fragment>
    <Head>
    <title>Business name | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Businessname/>
</Fragment>
   
  )
}

export default BusinessNamePage