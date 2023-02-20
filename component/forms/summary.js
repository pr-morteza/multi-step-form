import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useContext } from "react";
import PeriodContext from '../../context/period';
import { Box, Button, Grid, Typography } from '@mui/material';


export default function Summary(){
    const {period, choosedPlans, add, setCom} = useContext(PeriodContext)

    const pickFees = add.map(x=>{
        return x.fee
    })

    return (
        <>
        <Box>
            <Typography variant='h4' component='h4'>
                Finishing up  
            </Typography>
            <Typography color='GrayText'>
                Double-check everything looks OK before confirming.
            </Typography>
        </Box>
        <Box >   
            <Grid className='p-3 bg-light rounded' marginY={{sm:0,xs:1}} container gap={2}>
                <Grid  
                    item
                    container 
                    justifyContent='space-between' 
                    alignItems='center'
                    className='border-bottom'
                >
                    <Box>
                        <Typography variant='subtitle1' color='hsl(213, 96%, 18%)'>
                            {choosedPlans.level}{period==='a' ? '(Monthly)' : '(Yearly)'}                      
                        </Typography>
                        <Box onClick={()=>setCom(1)}>
                            <Button color='secondary'>Change</Button>
                        </Box>                        
                    </Box>
                    <Typography variant='subtitle1' color='hsl(213, 96%, 18%)'>
                        {choosedPlans.fee2}
                    </Typography>
                </Grid> 
                {add.map(x=>{
                    return (
                        <Grid  
                            key={x.addon}
                            container 
                            justifyContent='space-between' 
                            alignItems='center'
                            className='rounded bg-light'
                            color='GrayText'
                        > 
                            <Typography variant='body2' className='p-0 m-0'>
                                {x.addon}                   
                            </Typography>                                  
                            <Typography color='hsl(213, 96%, 18%)' variant='body2'>
                                {x.fee2} 
                            </Typography>
                        </Grid> 
                    )
                })}   
            </Grid>
            <Grid color='GrayText' className='p-3' container justifyContent='space-between'>
                <Typography variant='body2'>
                    Total ({period==='a'?'per month':'per year'})
                </Typography>
                <Typography variant='h6' color='primary' component='h6'>
                    +${[...pickFees,choosedPlans.fee].reduce((x,y)=> x+y)}/{period==='a'?'mo':'yr'}
                </Typography>
            </Grid>        
        </Box>
        </>
    )
}

