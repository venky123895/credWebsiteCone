import React from 'react'

const Header = () => {
  return (
    <div style={{display:'flex',justifyContent:"space-around",alignItems:"center",padding:'25px'}}>
        <img src='https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png' alt='newImage' className='logo' style={{width:"75px",height:"100px"}} />
        <div style={{display:'flex',gap:"100px",fontSize:"1.3rem"}}>
            <p style={{color:"white"}}>Credit score check</p>
            <p style={{color:"white"}}>CRED pay</p>
        </div>
    </div>
  )
}

export default Header