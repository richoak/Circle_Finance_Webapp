import React, {Fragment} from "react"
import Head from "next/head"
import Document from "../components/Document"

const DocumentPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Document | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Document/>
</Fragment>
   
  )
}

export default DocumentPage