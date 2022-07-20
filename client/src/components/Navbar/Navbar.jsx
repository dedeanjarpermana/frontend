import React from 'react'
import './navbar.css'
import logoUtama from '../../pict_source/logoUtama.png'




function Navbar() {
  return (
    <>
  
        <div className="header">
          <div id="gambarlogo">
            {/* <img src={logoUtama} alt="PT. WGS Bandung" /> */}
            <img src={logoUtama} alt=" Logo Newton " width="125px" height="100px" />
            
            
          </div>
          <div id="text1">
          {/* <h3>Newton Education</h3> */}
          </div>
          
          <div>
          
            <ul>
                
                <li><a href="/contact">Contact</a></li>
                <li><a href="/why_us">Why Us?</a></li>
                <li><a href="/program">Program</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/">Home</a></li>

            </ul>
          </div>

        
        </div>

        <input type="checkbox" id="cek" />
          <label for="cek">
            <i class="fas fa-arrow-right" id="btn"></i>
            <i class="fas fa-arrow-left" id="close"></i>
          </label>
        </>
  )
}

export default Navbar