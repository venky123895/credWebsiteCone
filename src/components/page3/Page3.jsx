import React from 'react'
import './page.css'
import BiggerText from '../page1/BiggerText'
import SmallerText from '../page1/SmallerText'
import Button from '../page1/Button'
const Page3 = () => {
  return (
    <div className='imageBack'>
        <div className="box">
        <BiggerText text="feel spetial" style={{color:"white",fontSize:"100px"}}/>
        <BiggerText text="more often." style={{color:"white",fontSize:"100px"}}/>
        <SmallerText text="exclusive rewards for paying your bills" style={{fontSize:"40px",color:"white"}}/>
        <SmallerText text="every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good." style={{fontSize:"20px",color:"white",fontWeight:"Bold"}}/>
        <Button text="Explore rewards" style={{
            width:"300px",
            height:"70px",
            border:"none",
            borderRadius:"35px",
            fontSize:"1.4rem",
            marginTop:"25px"
           
            

        }} />
        </div>

    </div>
  )
}

export default Page3