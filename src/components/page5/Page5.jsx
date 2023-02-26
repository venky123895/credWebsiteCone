import React from 'react'
import './sealogo.css'
import BiggerText from '../page1/BiggerText'
import SmallerText from '../page1/SmallerText'
import Button from '../page1/Button'
const Page5 = () => {
  return (
    <div className='page'>
        <div className="container" style={{
            width:"70%",
            height:"500px",
            // border:"2px solid black"
        }} >
            <BiggerText text="we take your money" style={{color:"white",fontSize:"100px"}}/>
            <BiggerText text="matters seriously." style={{color:"white",fontSize:"100px"}}/>
            <SmallerText text="so that you don’t have to." style={{fontSize:"40px",color:"white"}}/>
            <SmallerText text="never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always." style={{fontSize:"20px",color:"white",fontWeight:"Bold"}}/>
            <Button text="Experience the upgrade" style={{
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

export default Page5