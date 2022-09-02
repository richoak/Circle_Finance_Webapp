import React, {Fragment} from "react"
import Head from "next/head"
import About from "../components/About"

const AboutPage = () => {
  return (
    <Fragment>
    <Head>
    <title>About | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <About/>
</Fragment>
   
  )
}

export default AboutPage
