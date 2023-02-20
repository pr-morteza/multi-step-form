import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import { useContext } from "react";
import PeriodContext from '../../context/period';
import { Box, Button, Checkbox, Grid, Typography } from '@mui/material';


export default function Addons(){
    const {period, add, setAdd} = useContext(PeriodContext)
    const addons = [
        {addon: 'Online service', des: 'Access to multiplayer games', fee: period==='a' ? 1 : 10, fee2: period==='a' ? '+$1/mo' : '+$10/yr'},
        {addon: 'Larger storage', des: 'Extra 1TB of cloud save', fee: period==='a' ? 2 : 20, fee2: period==='a' ? '+$2/mo' : '+$20/yr'},
        {addon: 'Customizable profile', des: 'Custom theme on your profile', fee: period==='a' ? 2 : 20, fee2: period==='a' ? '+$2/mo' : '+$20/yr'}
    ]

    const handleAddon=(x)=>{
        return !add.find(t=>t.addon===x.addon) ? setAdd(prev=>[...prev, x]) : setAdd(add.filter(r=>r.addon!==x.addon))
    }

    return(
        <>
        <Box>
            <Typography variant='h4' component='h4'>
                Pick add-ons  
            </Typography>
            <Typography color='GrayText'>
                Add-ons help enhance your gaming experience.
            </Typography>
        </Box> 
        <Box>
            {addons.map(x=>{
                return (                        
                    <Grid 
                        key={x.addon}
                        container
                        className={`border text-start ${add.find(t=>t.addon===x.addon) && 'bg-light border-primary'} p-2 my-3 rounded`}                       
                        alignItems='center'
                        onClick={()=>handleAddon(x)}
                        component={Button}
                        sx={{textTransform:'none'}}
                    >
                        <Box>
                            <Checkbox 
                                checked={add.find(t=>t.addon===x.addon) ? true : false} 
                            />
                        </Box>
                        <Grid container direction={{sm:'row',xs:'column'}} alignItems={{sm:'center'}} xs item justifyContent={{sm:'space-between'}}>
                            <Box>
                                <Typography variant="subtitle1" color='hsl(213, 96%, 18%)'>
                                    {x.addon}                            
                                </Typography>
                                <Typography variant="body2" display="block" color='GrayText'>
                                    {x.des}                          
                                </Typography>  
                            </Box>
                            <Typography variant="subtitle2" component='div' color='primary'>
                                {x.fee2}
                            </Typography>
                        </Grid>
                    </Grid>           
                )})}              
        </Box>
        </>
    )
}