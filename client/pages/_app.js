import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'
import styles from '../styles/custom.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {useEffect} from "react";



  
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
   },[]);
  return (
    <>
    <Head>
     <title>Wire and Switch</title>
        <meta name="description" content="best online electronic shop" />
        <link className={styles.icont} rel="icon" href="/icons/logof.ico" />
    </Head>
  <Layout><Component {...pageProps} /></Layout>
  </>
  )
}

export default MyApp
