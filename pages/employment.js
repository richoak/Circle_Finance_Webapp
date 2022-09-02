import React, {Fragment} from "react"
import Head from "next/head"
import Employment from "../components/Employment"

const EmploymentPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Employment | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Employment/>
</Fragment>
   
  )
}

export default EmploymentPage