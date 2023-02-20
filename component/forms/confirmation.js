import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import iconThank from '../../public/assets/images/icon-thank-you.svg'
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

export default function Confirming(){
    return(
        <Grid container paddingY={{sm:0,xs:5}} item className='text-center' direction='column' alignItems='center' justifyContent='center'>
            <Image src={iconThank} alt='thank you'/>
            <Typography variant='h4' component='h4' className='my-3'>
                Thank you!
            </Typography>
            <Typography color='GrayText' >
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
            </Typography>
        </Grid> 
    )
}