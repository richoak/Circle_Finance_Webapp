import React, { useEffect, useState, useContext} from 'react';
import Link from 'next/link';
import Topbar from './Topbar';
import Sidebar from './Sidebar'
import "../js/main.js"
import $ from 'jquery'
import Pageloader from './Pageloader';
import useHttp from '../hooks/use-http';
import Image from 'next/image';

const Loanproducts = () => {

  const [ loanExist, setLoanExist ] = useState("")
  const { isLoading, error, sendRequest:fetchLoans }  = useHttp();

  useEffect(() => {
    const transformLoans = ((data) => {
      // console.log(data[0].status)
      console.log(data)
      console.log(typeof(data))
  

    if (data.length === 0){
      // console.log("kk")
      setLoanExist(false);
      $(".overlay").fadeOut(0);
      return
    }
    else if(data[0].status!== "declined"){
      setLoanExist(true);
      $(".overlay").fadeOut(0);
  }

    else{
      setLoanExist(false);
      $(".overlay").fadeOut(0);
    }
    // $(".overlay").fadeOut(0);
  })


  fetchLoans({
      url: 'https://credisol-main.herokuapp.com/v1/loans/all/',
      method: "GET",
      headers: { 
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + localStorage.getItem("access_token")
      }
  }, transformLoans)
   
  }, [fetchLoans])
  
    return (
      
      <div>
                <Pageloader/>
          <div className="row thesidebarrow">
          <div className="col-md-2 thesidebar">
          <Sidebar/>

</div>

              <div className="col-md-10">
              <Topbar/>

              <Link className="goback" href="/loan"   activeClassName="is-active" >
              <p className="loansareavailable2 " style={{paddingLeft:"20px", cursor:"pointer"}}>
                {/* <Image className="" style={{marginTop:"7px"}} src="/images/arrow-left.svg" height="24" width="24"/>  */}
                <span className=""><i className="fas fa-long-arrow-alt-left" style={{color:"#DD3737"}}></i> Back</span>
                </p>
              </Link>


{
!loanExist && <div>
  <Link className="" href="/loanproducts/businessloan" id="availableloanoptions2"  eventKey="2" activeClassName="is-active" >
<div className="row loanproductoptions" >
<div className="col-md-1 col-3">
  <p style={{float:"right"}} >
  <Image className="" src="/images/businessloans.svg" height="48" width="48"/>
  </p>
</div>

<div className="col-md-3 col-7">
<p > <span className="loansareavailable2">Business and Corporate Loans</span> <br/>
<span  className="loansareavailablenote2">Personal loans available for individuals</span></p>  

</div>

<div className="col-md-1 col-2">
<Image style={{marginTop:"10px"}} className="" src="/images/arrow-right.svg" height="24" width="24"/>
</div>

</div>
</Link>
<hr className="hrmarginright900"/>
  </div>
  }

  {!loanExist && <div>
    <div className="row loanproductoptions" >
<div className="col-md-1 col-3">
<p style={{float:"right"}} >
<Image className="" src="/images/travelloans.svg" height="48" width="48"/>

</p>
</div>

<Link className="" href="/loanproducts/travelloan" id="availableloanoptions3" eventKey="2" activeClassName="is-active" >
<div className="col-md-3 col-7">
<p > <span className="loansareavailable2">Travel Loans</span> <br/><span  className="loansareavailablenote2">Personal loans available for individuals</span></p>  
</div>
</Link>

<div className="col-md-1 col-2">
 <Image style={{marginTop:"10px"}} className="" src="/images/arrow-right.svg" height="24" width="24"/>
</div>


</div>
<hr className="hrmarginright900"/>
  </div>}

  {loanExist && <div>
    <div className="row loanproductoptions">
<div className="col-md-1  col-2">
<p style={{float:"right"}} >
<Image className="" src="/images/consumerloans.svg" height="48" width="48"/>
</p>
</div>

<div className="col-md-3 col-8" >
<p > <span className="loansareavailable2">Pending Loan</span> <br/><span  className="loansareavailablenote2">
  You have a pending loan and can`t request for a new one.
  </span></p>  
</div>


</div>
<hr className="hrmarginright900"/>
    </div>}











                  </div>
          </div>
         
   
 

    </div>

  


    )
    
    
}


export {Loanproducts as default}