
import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Box, FormControl, TextField, Typography } from '@mui/material';
import { useContext, useEffect, useReducer} from 'react';
import PeriodContext from '@/context/period';
 
function reducer(state, action){
  let pay = action.payload
  switch (action.type) {
    case 'name':
     return  {...state, name:pay, error1: (pay && pay.trim().length>15)} 
    case 'email':
      return {...state, email:pay, error2: (pay && !/^\S+@\S+\.\S+$/.test(pay))} 
    case 'phonenum':
      return {...state, phoneNum:pay, error3: (pay && (pay.trim().length<(4) || pay.trim().length>(15)))}
    default:
      break;
  }
}

export default function Info() {
  const init = {name:'', email:'', phoneNum:'', errors:{error1:undefined, error2:undefined, error3: undefined}}
  const { setInfoVal} = useContext(PeriodContext)
  const [state, dispatch] = useReducer(reducer, init)

  const nameHandler = (e)=>{
    e.preventDefault();
    let x=e.target.value
    dispatch({type:'name', payload:x})
  }
  const emailHandler=(e)=>{
    e.preventDefault();
    let x=e.target.value
    dispatch({type:'email', payload:x}) 
  }
  const phoneNumHnadler=(e)=>{
    e.preventDefault();
    let x=e.target.value
    dispatch({type:'phonenum', payload:x})
  }
  const {name, email, phoneNum, error1, error2, error3}=state

  useEffect(()=>{
    if(!name||!email||!phoneNum){
      return setInfoVal(true)
    }
 
    (error1|| error2|| error3) ? setInfoVal(true) : setInfoVal(false)
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
            error={state.error1}  
            onChange={nameHandler} 
            helperText={state.error1&&'cannot exceed 15 characters'}
            size='small' 
            required 
            placeholder='e.g. Stephen King' 
            id="filled-basic" 
            label="Name" 
            variant="outlined" 
          />
          <TextField 
            error={state.error2} 
            onChange={emailHandler} 
            type='email'
            size='small'             
            required 
            placeholder='e.g. stephenking@lorem.com' 
            id="filled-basic" 
            label="Email address" 
            variant="outlined" 
          />
          <TextField 
            error={state.error3} 
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
