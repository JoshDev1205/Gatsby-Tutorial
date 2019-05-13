import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

const AboutPage = () => {
  return (
    <Layout>
      <Head />
      <h1>About</h1>
      <p>Josh Dev Biography</p>
      <p>Need a Developer ? <Link to="/contact">Contact me!!!</Link></p>
    </Layout>
  )
}

export default AboutPage