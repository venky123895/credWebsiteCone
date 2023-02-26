import React from 'react'
import Button from '../page1/Button'
const Page8 = () => {
  return (
    <div style={{
        width:"100vw",
        height:"100vh",
        // backgroundColor:"black"
        display:"flex",
        justifyContent:"space-evenly",
        backgroundColor:"black",
        paddingTop:"100px"
    }}>
        <div className="leftBox">
            <div className="ratiing" 
            style={{
                display:"flex",
                justifyContent:"center",
                alignItems:'center',
                gap:"25px",
               
            }}
            >
            <h1 style={{fontSize:"150px",
            color:"white"
        }}>4.8</h1>
            <h1 style={{
                fontSize:"50px",
                color:"white"
            }}>app <br/>store</h1>
            </div>
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png' style={{
                width:"200px"
            }} alt='rate'/>
            <Button text="Download the app" style={{
            width:"300px",
            height:"70px",
            border:"none",
            borderRadius:"35px",
            fontSize:"1.4rem",
            marginTop:"25px"
           
            

        }}/>
        </div>
        <div className="rightBox">
        <div className="ratiing1"
         style={{
            display:"flex",
            justifyContent:"center",
            alignItems:'center',
            gap:"25px",
           
        }}
        >
            <h1 style={{fontSize:"150px",
            color:"white"
        }}>4.7</h1>
            <h1 style={{
                fontSize:"50px",
                color:"white"
            }}>app <br/>store</h1>
            </div>
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png' style={{
                width:"200px"
            }} alt='rate1'/>
            <Button text="Download the app" style={{
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

export default Page8