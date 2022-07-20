import React from 'react'
import './career.css'
import Navbar from '../../components/Navbar/Navbar'
import BottomBar from '../../components/bottombar/bottom'
import TemplateCareer from '../../pict_source/template_career.png'








function Career() {
  return (
    <>
        <Navbar />
        <div className='career'>
        Dibutuhkan guru sbb: 
        
        <ol className='list_job'>
          <li> Matematika SMA</li>
          <li> Biology SMA</li>
          <li> Fisika SMA</li>
          <li> Kimia SMA</li>
          <li> Bahasa Inggris SMA</li>
        </ol>
        silahkan klik <a href="https://docs.google.com/forms/d/e/1FAIpQLSdmktDg8EwHv400kKOpSa_Lhz5DFXdKCrnIfTGP42ijw7eoXw/viewform">link </a> di bawah ini 
            
        </div>
        <div className="gambar_career">
          <img src={TemplateCareer} />
        </div>

        <BottomBar/>
    </>
  )
}

export default Career