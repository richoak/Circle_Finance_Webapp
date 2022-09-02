import React, {Fragment} from "react"
import Head from "next/head"
import Test from "../components/test"

const TestPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Test | Credisol </title>
    <meta 
    name="description" 
    content="Test"/>  
    </Head>  
    <Test/>
</Fragment>
   
  )
}

export default TestPage