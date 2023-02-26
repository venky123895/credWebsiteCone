import React from 'react'

const Page4 = () => {
  return (
    <div style={{
        width:"100vw",
        height:"250px",
        display:"flex",
        justifyContent:"center",
        alignContent:'center',
        marginTop:"50px"
    }}>
        <div className="logos" style={{
            width:"90%",
            height:"200px",
            // border:"2px solid black"
        }}>
            <p style={{
                fontSize:"30px",
                fontWeight:"bold",
                marginBottom:"50px",
                color:"black"

            }}>rewards from brands you love.</p>
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/brands-desktop.png' alt='logo' style={{width:'90%'}}/>
        </div>
    </div>
  )
}

export default Page4