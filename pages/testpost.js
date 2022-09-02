import React, {Fragment} from "react"
import Head from "next/head"
import Testpost from "../components/testpost"

const TestpostPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Testpost | Credisol </title>
    <meta 
    name="description" 
    content="Testpost"/>  
    </Head>  
    <Testpost/>
</Fragment>
   
  )
}

export default TestpostPage