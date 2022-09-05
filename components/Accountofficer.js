import React, { useEffect, useState, useReducer } from 'react';
import Image from 'next/image'
import Link from 'next/link';

import Topbar from './Topbar';

import "../js/main.js"
import $ from 'jquery'
import Pageloader from './Pageloader';
import Sidebar from './Sidebar'
import useHttp from '../hooks/use-http';

const Accountofficer = () => {

  const { isLoading, error, sendRequest:fetchAccountOfficer }  = useHttp();
  const [name, setName] = useState("")
  const [phone, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")



  useEffect(() => {

    const transformData = ((data) => {
      setName(data.first_name + " " + data.last_name)
      setPhoneNumber(data.phone_number)
      setEmail("mailto:" + data.email)
      $(".overlay").fadeOut(0);
  })


  fetchAccountOfficer({
      url: "https://credisol-app.herokuapp.com/v1/users/" + localStorage.getItem("creditofficer") + "/",
      method: "GET",
      headers: { 
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + localStorage.getItem("access_token")
      }
  }, transformData)
  }, [fetchAccountOfficer])

  return (

    <div>
      <Pageloader />
      <div className="row thesidebarrow">
        <div className="col-md-2 thesidebar">
          <Sidebar />
        </div>

        <div className="col-md-10">
          <Topbar />

          <Link className="goback" href="/loan" activeClassName="is-active" >
            <p className="loansareavailable2 " style={{ paddingLeft: "20px", cursor:"pointer" }}><image className="" src="/images/arrow-left.svg" height="24" width="24"/> <span className="gobackp">Back</span></p>
          </Link>

          <div className="row" style={{ marginLeft: "0px" }}>
            <div className="col-md-3 col-12">
              <p style={{ textAlign: "center" }}>
                <Image className="aoimage"
                  width={132.5} 
                  height={132.5} 
                
                  src="/images/samuel.jpg" /></p>

              <div className="accountofficerdetails">
                <p className="accountofficername">{name}</p>
                <p className='accountofficertitle'>Account Officer</p>
              </div>


              <p className="" style={{ textAlign: "center" }} >
                <a href={phone}>
                  <button className="callbutton">
                    <Image className="" src="/images/call.svg" height="24" width="24"/>
                    <span style={{ fontWeight: "bold", paddingLeft: "10px", }}>{phone} </span>

                  </button>
                </a>
              </p>

              <p className="" style={{ textAlign: "center" }} >
                <a href={email}>
                  <button className="emailbutton">
                    <Image className="" src="/images/sms.svg" height="24" width="24" />
                    <span style={{ fontWeight: "bold", paddingLeft: "10px" }}> Send an email

                    </span>
                  </button>
                </a>
              </p>

            </div>
          </div>







        </div>
      </div>




    </div>




  )


}


export { Accountofficer as default }