import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossOrigin="anonymous"
      />
      <meta name= "description" content="" />
      <meta name= "keywords" content=""/>
      <title>BigPaw adventures</title>
      <link rel="icon" sizes="32x32" href="icon.svg" />
    </Head>
  
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
      crossOrigin="anonymous"/>

    <Layout>
        <Component {...pageProps} />
    </Layout>
    </>
    )
}

export default MyApp
