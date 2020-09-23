import React, { useState } from 'react'
import App from 'next/app'
import Router from 'next/router'
import { appWithTranslation } from '../i18n'
import { PageTransition } from 'next-page-transitions'
import Layout from '../components/Layout'
import PageLoader from '../components/PageLoader'
function MyApp({ Component, pageProps }) {
  const [showLoading, setLoading] = useState(false)
  Router.onRouteChangeStart = (url) => {
    // Some page has started loading
    setLoading(true) // set state to pass to loader prop
  };
  Router.onRouteChangeComplete = (url) => {
    // Some page has finished loading
    setLoading(false) // set state to pass to loader prop
  };

  Router.onRouteChangeError = (err, url) => {
    // an error occurred.
    // some error logic
  };
  return (
    <div>
      <Layout>
        {
          showLoading ?
            <PageLoader />
            :
            <PageTransition timeout={300} classNames="page-transition">
              <Component {...pageProps} />
            </PageTransition>
        }
      </Layout>
    </div>
  )

}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(MyApp);