import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'
import '../styles/index.scss'

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <h1>Hello,</h1>
      <h2>Im Josh, a Fullstack Javascript developer</h2>
      <p>Need a Developer ? <Link to="/contact">Contact me!!!</Link></p>
    </Layout>
  )
}

export default IndexPage
