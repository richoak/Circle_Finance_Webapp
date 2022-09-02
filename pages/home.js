import React, {Fragment} from "react"
import Head from "next/head"
import Home from "../components/Home"

const HomePage = () => {
  return (
    <Fragment>
    <Head>
    <title>Home | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Home/>
</Fragment>
   
  )
}

export default HomePage
