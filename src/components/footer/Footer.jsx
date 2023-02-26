import React from 'react'
import './footer.css'
const Footer = () => {
  return (

    <div id='footerMain'>
        <div className="leftContainer" style={{
            display:"flex",
            flexDirection:"column",
            gap:"20px"
        }}>
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo-horizontal.png' alt='footerlogo' style={{
                width:"200px",
                marginBottom:"50px"
            }}/>
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/security-logos.png' alt='foot' style={{
                width:"400px",
                marginBottom:"50px"
            }}/>
            <h3>complete security. no asterisks.</h3>
            <p>CRED encrypts all data and transactions to ensure a completely <br/>secure experience for our members.</p>
        </div>
        <div className="middleContainer">
                <h3 >products</h3>
                <p>CRED Pay</p>
                <p>credit score check</p>
                <h3 style={{marginTop:'50px'}}>resources</h3>
                <p>artlicles</p>
                <p>blogs</p>
                <p>calculators</p>
                <p>credit card payment guide</p>
                <p>credit score guide</p>
        </div>
        <div className="rightConainer">
            <h3>CRED</h3>
            <p style={{marginTop:'10px'}}>about</p>
            <p  style={{marginTop:'10px'}}>careers</p>
            <p style={{marginTop:'10px'}}>IPL</p>
            <p style={{marginTop:'10px'}}>Customer Care</p>
            <h3 style={{marginTop:'50px'}}>Policy</h3>
            <p style={{marginTop:'10px'}}>security</p>
            <p style={{marginTop:'10px'}}>transaction & User verification</p>
            <p style={{marginTop:'10px'}}>google API disclosure</p>
            <p style={{marginTop:'10px'}}>UPI faq & grievances</p>
        </div>
    </div>
 
  )
}

export default Footer