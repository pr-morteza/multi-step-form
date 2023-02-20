
import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useContext, useEffect } from "react";
import PeriodContext from '../../context/period';
import { Box, Button, CardMedia, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';


export default function Plan() {
  const {period, setPeriod, choosedPlans, setChoosedPlans} = useContext(PeriodContext)

  const handleChange = (e) => {
    return setPeriod(e.target.value);
  };

  const handlePlan=(x)=>{
    return choosedPlans.level!==x.level ? setChoosedPlans(x) : setChoosedPlans([])
  }

  const plans = [
    {level: 'Arcade', icon:"/assets/images/icon-arcade.svg", fee: period==='a' ? 9 : 90, fee2: period==='a' ? '$9/mo' : '$90/yr'},
    {level: 'Advanced', icon:'/assets/images/icon-advanced.svg', fee: period==='a' ? 12 : 120, fee2: period==='a' ? '$12/mo' : '$120/yr'},
    {level: 'Pro', icon: '/assets/images/icon-pro.svg', fee: period==='a' ? 15 : 150, fee2: period==='a' ? '$15/mo' : '$150/yr'}
]

useEffect(()=>{
  setChoosedPlans([])
},[period])
  
  return (
    <>
      <Box>
        <Typography variant='h4' component='h4'>
          Select your plan         
        </Typography>
        <Typography color='GrayText'>
          You have the options of monthly or yearly billing.
        </Typography>
      </Box>
      
      <Grid
        container
        direction={{sm:'row', xs:'column'}}
        gap={2}
        item      
        xs={6}
        paddingY={{sm:0,xs:1}}
      > 
        {plans.map(x=>{
          return(  
          
          <Grid component={Button} sx={{textTransform:'none'}} sm className={`ps-3 text-start py-1 border border-2 rounded ${choosedPlans.level===x.level && 'bg-light border-primary' }`} onClick={()=>handlePlan(x)} container alignItems={{sm:'flex-start', xs:'center'}} justifyContent={{sm:'space-around', xs:'flex-start'}} direction={{sm:'column', xs:'row'}} item key={x.level}>
            <CardMedia
              component="svg"
              height={35}
              width={35}
              image={x.icon}
              alt="green iguana"
            />
            <Box className='ps-sm-0 ps-3'>
              <Typography variant="h6" >
                {x.level}               
              </Typography>
              <Typography variant='body2' color='GrayText'>
                {x.fee2}
              </Typography>  
              {period==='b' && <Typography color='hsl(213, 96%, 18%)' variant='subtitle2'>2 months free</Typography>}      
            </Box>
          </Grid>
        )
        })}
      </Grid>
      <Grid item xs={1} justifyContent='center' container className='bg-light rounded'>
        <FormControl >
          <RadioGroup
            row
            defaultValue="female"
            aria-labelledby="demo-customized-radios"
            name="customized-radios" 
          >
            <FormControlLabel checked={period === 'a'}
              onChange={handleChange} 
              value="a" 
              control={<Radio />} 
              label="Monthly" 
            />
            <FormControlLabel 
              checked={period === 'b'}
              onChange={handleChange} 
              value="b" 
              control={<Radio />} 
              label="Yearly" 
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      
    </>
  )
}




