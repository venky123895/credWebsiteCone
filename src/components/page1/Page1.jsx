import React from 'react'
import Header from './Header'
import BiggerText from './BiggerText'
import SmallerText from './SmallerText'
import Button from './Button'
const Page1 = () => {
  return (
    <div style={{width:"100vw",height:"100vh",backgroundColor:'black',textAlign:"center"}}>
        <Header/>
        <BiggerText text='rewards for paying' style={{color:"white",textAlign:"center",fontSize:"100px",marginTop:"50px"}}/>
        <BiggerText text="credit card bills." style={{color:"white",textAlign:"center",fontSize:"100px",marginTop:"0px"}}/>
        <SmallerText style={{textAlign:"center",fontSize:"1.3rem",color:"white",marginTop:"25px"}} text="join 9M+ members who win rewards and cashbacks everyday."/>
        <Button style={{
            width:"300px",
            height:"70px",
            border:"none",
            borderRadius:"35px",
            fontSize:"1.4rem",
            marginTop:"25px"
        }} text="Download CRED"/>
    </div>
  )
}

export default Page1