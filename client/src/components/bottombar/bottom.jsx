import React from 'react'
import './bottom.css'

import telephone from '../../pict_source/telephone.png'
import whatsapp from '../../pict_source/wa.png'
import Instagram from '../../pict_source/ig.png'
import Email from '../../pict_source/email.png'
// import logoBanner from '../../pict_source/logo_banner.jpg'
import logoBanner from '../../pict_source/logo_banner.png'





function BottomBar() {
  return (
    <>
  
        <div className="bottom">
          <div className="gambarlogo">
            
            {/* <img src={logoUtama} alt=" Logo Newton " width="100px" height="100px" /> */}
            
             <img src={logoBanner} alt=" Logo Newton Detail " width="400px" height="100px" />
          </div>
          
          
          <div className="menu_bawah">
            
                
                <a href="#home">Contact</a> 
                <br/>
                <a href="#news">Whatsapp</a> 
                <br/>
                <a href="#contact">Instagram</a>
                <br/>
                <a href="#about">Email</a>
                <br/>
                <a href="#news">Whatsapp</a>
              
        
          </div>

        
        </div>

        
        </>
  )
}

export default BottomBar