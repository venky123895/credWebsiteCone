import React from 'react'
import './pagedog.css'
import BiggerText from '../page1/BiggerText'
import SmallerText from '../page1/SmallerText'
import Button from '../page1/Button'
const PageDog = () => {
  return (
    <div className='hello'>
        <div className="container1" style={{
            width:"60%",
            height:"500px",
         
            paddingTop:'100px',
            paddingLeft:'200px'

        }} >
            <BiggerText text="security first." style={{color:"white",fontSize:"100px"}}/>
            <BiggerText text="and second." style={{color:"white",fontSize:"100px"}}/>
            <SmallerText text="what’s yours remains only yours." style={{fontSize:"40px",color:"white"}}/>
            <SmallerText text="CRED ensures that all your personal data and transactions are encrypted, and secured so what’s yours remains only yours. there’s no room for mistakes because we didn’t leave any." style={{fontSize:"20px",color:"white",fontWeight:"Bold"}}/>
            <Button text="Become a Member" style={{
            width:"300px",
            height:"70px",
            border:"none",
            borderRadius:"35px",
            fontSize:"1.4rem",
            marginTop:"25px"
           
            

        }}/>
        </div>
    </div>
  )
}

export default PageDog