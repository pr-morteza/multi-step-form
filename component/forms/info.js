
import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Box, FormControl, TextField, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import PeriodContext from '@/context/period';
 

export default function Info() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const { setInfoVal} = useContext(PeriodContext)

  const nameHandler = (e)=>{
    e.preventDefault();
    let x=e.target.value
    return  setName(x)
  }
  const emailHandler=(e)=>{
    e.preventDefault();
    let x=e.target.value
   return  setEmail(x)  
  }
  const phoneNumHnadler=(e)=>{
    e.preventDefault();
    let x=e.target.value
    return  setPhoneNum(x)
  }
  useEffect(()=>{
    if(!name||!email ||!phoneNum){
      return setInfoVal(true)
    }
    ((name &&  name.trim().length>10) ||
    (email && !/^\S+@\S+\.\S+$/.test(email)) ||
    (phoneNum && phoneNum.trim().length!==12)) ? setInfoVal(true) : setInfoVal(false)
  },[name, email, phoneNum])
 
  return (

    <>
      <Box>
        <Typography variant='h4' component='h4'>
          Personal info        
        </Typography>
        <Typography color='GrayText' >
          Please provide your name, email address and phone number.
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { mt: 2},
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl fullWidth>
          <TextField 
            error={(name && name.trim().length>10) ? true : false} 
            value={name} 
            onChange={nameHandler} 
            size='small' 
            required 
            placeholder='e.g. Stephen King' 
            id="filled-basic" 
            label="Name" 
            variant="outlined" 
          />
          <TextField 
            error={(email && !/^\S+@\S+\.\S+$/.test(email)) ? true : false} 
            value={email} 
            onChange={emailHandler} 
            size='small'             
            required 
            placeholder='e.g. stephenking@lorem.com' 
            id="filled-basic" 
            label="Email address" 
            variant="outlined" 
          />
          <TextField 
            error={(phoneNum&& phoneNum.trim().length!==12) ? true : false} 
            value={phoneNum}
            inputProps={{type:'number'}} 
            onChange={phoneNumHnadler} 
            size='small' 
            required 
            placeholder='e.g. +1 234 567 890' 
            id="filled-basic" 
            label="Phone Number" 
            variant="outlined" 
          />
        </FormControl>             
      </Box>
    </>
  )
}


