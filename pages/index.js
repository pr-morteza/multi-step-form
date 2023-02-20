
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Layout from '../component/layout';
import Head from 'next/head';



export default function Home() {
  return (

    <>
    <Head>
      <link rel="icon" href="/assets/images/favicon-32x32.png" />
      <title>Multi Step Form</title>
    </Head>
    <Layout/>
    </>
  )
}


