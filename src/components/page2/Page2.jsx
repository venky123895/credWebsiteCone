import React from 'react'

const Page2 = () => {
  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        padding:"30px",
        backgroundColor:"black",
        width:"100vw",
        height:"100vh",
        position:"relative"

    }}>
        <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png' alt='image2' style={{
            position:"absolute",
            top:"0",
            height:'650px',
            zIndex:"10"
            
        }}/>
        <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png' alt='image2 ' style={{
            position:"absolute",
            top:"40px",
            left:"440px",
            height:'650px',
            zIndex:"9",

        }}/>
        <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png' alt='image3'
        style={{
            position:"absolute",
            top:"70px",
            left:"300px",
            height:'650px',
            zIndex:"8",

        }}/>
        <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png' alt='image4' style={{
            position:"absolute",
            top:"40px",
            right:"440px",
            height:'650px',
            zIndex:"7",

        }}/>
        <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png' alt='image5'
        style={{
            position:"absolute",
            top:"70px",
            right:"300px",
            height:'650px',
            zIndex:"6",

        }}
        />
    </div>
  )
}

export default Page2