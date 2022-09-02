import React, {Fragment} from "react"
import Head from "next/head"
import Signin from "../components/Signin"

const SignInPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Signin | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Signin/>
</Fragment>
   
  )
}

export default SignInPage 