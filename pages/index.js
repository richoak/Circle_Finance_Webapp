import React, {Fragment} from "react"
import Head from "next/head"
import SignIn from "../components/SignIn"


const SignInPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Signin | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <SignIn/>
</Fragment>
   
  )
}

export default SignInPage 