import React, { useEffect, useState, useReducer} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';

import Image from 'next/image';
import classes from './Home.module.css'
import ReactEcharts from "echarts-for-react";



const Homeanalytics  = (props) => {
  console.log(props)
    const [name, setname]= useState()
    const [ isnotifications, setisnotifications ] = useState(true)
    const [locations, setLocations ] = useState([])
    const [chartvalues2, setChartValues2 ] = useState([])
    const chartvalues = []

    useEffect(() => {
        setname(localStorage.getItem("firstname") + " " + localStorage.getItem("lastname"))
      },[])


  useEffect(() => {

    const demo = ([
      { name:"Credit" , value: props.credit},
      { name:"Real Estate" , value: props.realestate},

  ])
  setChartValues2(demo)
  console.log("chartvalues", chartvalues2)
  }, [props])
  
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