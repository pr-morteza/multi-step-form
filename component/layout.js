import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useContext} from "react";
import PeriodContext from "../context/period";
import style from './layout.module.css';
import React from 'react';
import Typography from '@mui/material/Typography';
import {Box, Button, Grid} from '@mui/material';
import Info from "./forms/info";
import Plan from "./forms/plan";
import Addons from "./forms/addons";
import Summary from "./forms/summary";
import Confirming from "./forms/confirmation";
import { Container } from "@mui/system";




export default function Layout({children}){

  const {infoVal, choosedPlans, add, com, setCom} = useContext(PeriodContext)
  
  const steps = [
    {step: 'STEP 1', des: 'YOUR INFO'},
    {step: 'STEP 2', des: 'SELECT PLAN'},
    {step: 'STEP 3', des: 'ADD-ONS'},
    {step: 'STEP 4', des: 'SUMMARY'}
  ]
const next=()=>{
  return setCom(prev => prev+1)
}
const prev=()=>{
  return setCom(prev => prev-1)
}
  return(
    <>
      <link
        rel="stylesheet"
        href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap'
      />
      <Grid container direction='column' alignItems='center' justifyContent='center' sx={{minHeight:'100vh'}} className='bg-light'>        
        <Grid sx={{backgroundColor:{sm:'white', xs:'none'}}} padding={{sm:2}} className='rounded shadow'>
          <Grid container justifyContent={{sm:'space-between'}} direction={{sm:'row', xs:'column'}} item height={{xl:'40rem',md:'30rem',sm:'25rem',xs:'100vh'}} minHeight={{sm:'100%',xs:'40rem'}} width={{xl:'60rem',md:'50rem',sm:'40rem',xs:'100vw'}} className={`${style.MainBack} rounded `}>
            {/* steps side */}
            <Grid container justifyContent={{sm:'flex-start', xs:'center'}} alignItems={{sm:'flex-start', xs:'center'}} direction={{sm:"column", xs:'row'}} item sm={4} xs padding={{sm:1}}>
              {steps.map((x,index)=>{
                return (
                <Box key={x.step} padding={1}>
                  <Grid item alignItems='center' container sm={12} gap={2}>
                    <Grid color='white' container justifyContent='center' alignItems='center' width={{xs:'2rem'}} height={{xs:'2rem'}} className={`${(index===com || (com===4 && index===3)) && 'text-bg-light'} border m-0 p-0 rounded-circle`}>
                      {index+1} 
                    </Grid>
                    <Box sx={{display:{sm:'block',xs:'none'}}} >
                      <Typography className="text-white-50" variant="caption" display="block">
                        {x.step}
                      </Typography>
                      <Typography color="white" variant="subtitle2" display="block">
                        {x.des}                  
                      </Typography>
                    </Box>
                  </Grid>
                </Box>
              )
              })}  
            </Grid>
            {/* components side */}
            
            <Grid container sm={7} xs={11} item direction='column' alignItems={{sm:'flex-start', xs:'center'}} justifyContent={{xs:'space-between', sm:'space-around'}} className="me-sm-4">
              <Grid sm={9} width={{sm:'100%',xs:'90vw'}} padding={{sm:0,xs:2}} direction='column' justifyContent='space-around' container item sx={{boxShadow:{sm:0,xs:3}}} className="rounded bg-white ">
                {com===0 && <Info/> || com===1 && <Plan/> || com===2 && <Addons/> || com===3 && <Summary/> || com===4 && <Confirming/>}
              </Grid>

              {com!==4 && 
              <Grid container justifyContent='space-between' padding={{sm:0, xs:2}} className='bg-white'>
                {(com===1||com===2||com===3) && <Button type='submit' onClick={prev} variant="">go back</Button>}
                <Button 
                  disabled={com===0 && !infoVal || com===1 && choosedPlans.length===0 || com===2 && add.length===0 } 
                  type='submit' 
                  onClick={next} 
                  variant="contained"
                >
                  {com===3 ? 'confirm' : 'next step'}
                </Button>
              </Grid>}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
