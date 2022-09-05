import React, {Fragment} from "react"
import Head from "next/head"
import Login from "../components/Login"



const SignInPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Signin | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Login/>
</Fragment>
   
  )
}

export default SignInPage 