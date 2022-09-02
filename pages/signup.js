import React, {Fragment} from "react"
import Head from "next/head"
import Signup from "../components/Signup"

const SignupPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Signup | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Signup/>
</Fragment>
   
  )
}

export default SignupPage 