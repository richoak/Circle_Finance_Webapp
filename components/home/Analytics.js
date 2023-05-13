import React, { useEffect, useState, useReducer} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';

import Image from 'next/image';
import classes from './Home.module.css'
import ReactEcharts from "echarts-for-react";



const Homeanalytics  = () => {
    const [name, setname]= useState()
    const [ isnotifications, setisnotifications ] = useState(true)
    const [locations, setLocations ] = useState([])
    const [chartvalues2, setChartValues2 ] = useState([])
    const chartvalues = []

    useEffect(() => {
        setname(localStorage.getItem("firstname") + " " + localStorage.getItem("lastname"))
      },[])


//   useEffect(() => {
//     const getLocation = ((data) => {
//       setLocations(data.top_sources)
      
//       for (const key in data.top_sources){
//         chartvalues.push({
//             value: data.top_sources[key].percent,
//            name: data.top_sources[key].source,  
//         })
//     }
//     setChartValues2(chartvalues)
    
//   })

//   fetchWallet({
//       url: `https://vast-bastion-98389.herokuapp.com/https://fe-task-api.mainstack.io/`,
//       method: "GET",
//       headers: { 
//           'Content-Type': 'application/json',
      
//       }
//   }, getLocation)
//   }, [])

  async function loadData() {
    let response
    let data

    try{
      response = await fetch('https://vast-bastion-98389.herokuapp.com/https://fe-task-api.mainstack.io/',{
        method: "GET",     
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/json',
        //   'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
        //   "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
            },
      })
      data = await response.json()
    //   console.log("data",data,top_sources)
      setLocations(data.top_sources)
      
      for (const key in data.top_sources){
        chartvalues.push({
            value: data.top_sources[key].percent,
           name: data.top_sources[key].source,  
        })
    }

    const demo = [
        { name:"Credit" , value: "20"},
        { name:"Agriculture" , value: "40"},
        { name:"Real Estate" , value: "10"},

    ]
    // setChartValues2(chartvalues)
    setChartValues2(demo)
      console.log(chartvalues2)
        
    } catch (error){
        console.log(error)
      return
    }

  }

  useEffect(() => {
    loadData()
  }, [])
  

const option = {
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'Vehicle',
      type: 'pie',
      radius: ['45%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 10,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      color:[
        "#F3B53D",
        "#416CD1",
        "#40B676",
      
      ],
      data: chartvalues2
    }
  ]
};





      
    return (
        <>
        <div className={classes.investmentbox}>
        <p className={classes.investmenttitle}>Analytics</p>
   
        <div className={classes.investmentbox2}>
        <div style={{marginTop:"10px",  width:""}}>
        <div className="row">

        <div className="col-md-6">
            <div className={classes.chartbox}>
            <ReactEcharts option={option} />
            </div>
        
        </div>

        <div className="col-md-4">
            <div className={classes.analyticsinner} >
            {
                   chartvalues2.map((item) => (
                    <div key={item.value}>
                   
                        <p className="locationsbox"> 
                        <span style={{
                                backgroundColor: `${item.name =="Credit" ? "#F3B53D"
                                : item.name =="Agriculture" ? "#416CD1" 
                                : item.name =="Real Estate" ? "#40B676" :
                                
                                 
                                "#000"}`
                             }} className={classes.dot}></span>
                            <span style={{textTransform:"capitalize", paddingLeft:"5px"}} >{item.name }</span>
                             <span className={classes.percent}> {item.value}% </span>
                         
                              </p>

                    </div>
                    ))
            }
            </div>

        </div>
       </div>
</div>
    
    </div>


        </div>
            
        </>
    )}

    export {Homeanalytics as default}