import React from 'react'
import './about.css'
import Navbar from '../../components/Navbar/Navbar'
import BottomBar from '../../components/bottombar/bottom'
import bg from '../../pict_source/bg_about.png'
import bg2 from '../../pict_source/bg_about2.png'
import bg3 from '../../pict_source/bg_sekolah.jpeg'
import bgframe from '../../pict_source/bg_sekolah_frame.jpeg'
import bgframe1 from '../../pict_source/bg_sekolah_frame1.jpeg'
import bgframe2 from '../../pict_source/bg_sekolah_frame2.jpeg'
import bgframe3 from '../../pict_source/bg_sekolah_frame3.jpeg'
import bgframe4 from '../../pict_source/bg_sekolah_frame4.jpeg'
import bgframe5 from '../../pict_source/bg_sekolah_frame5.jpeg'

import telephone from '../../pict_source/telephone.png'
import whatsapp from '../../pict_source/wa.png'
import Instagram from '../../pict_source/ig.png'
import Email from '../../pict_source/email.png'
// import logoBanner from '../../pict_source/logo_banner.jpg'
import Template from '../../pict_source/template.png'





function About() {
  return (
    <>
    <Navbar />
    <div className="utama">
      <h4> Our History</h4>
    </div>

    <div className="container-card-about">
        <div className="kanan">
        Giving Sadaqah is the new name of a UK registered charity which was first incorporated in 2002. This recent (2018) rebranding was initiated to refocus our efforts towards facilitating the basic welfare needs, with a particular focus on education, of those affected by natural disasters, famine, conflicts and other calamities.
        <p>
        The roots of this organisation date back to the Somalian drought of 2008, when a group of volunteers began to raise funds in response. Within a short period of time, and by the grace of Allah سُبْحَانَهُ وَ تَعَالَى, “RAMDA” (which later evolved into “HOPE Regeneration of Africa”) was founded, and was providing relief to the affected.
          </p>
          
          
        </div>
        
        <div className="kiri">
          <img src={bg3} width= "98%"/>
          
          
        </div>
    </div>

    <div className="container-card-about">
        
        <div className="kiri">
          <img src={bg2} width= "98%"/>
        </div>

        <div className="kanan">
        Giving Sadaqah is the new name of a UK registered charity which was first incorporated in 2002. This recent (2018) rebranding was initiated to refocus our efforts towards facilitating the basic welfare needs, with a particular focus on education, of those affected by natural disasters, famine, conflicts and other calamities.
        <p>
        The roots of this organisation date back to the Somalian drought of 2008, when a group of volunteers began to raise funds in response. Within a short period of time, and by the grace of Allah سُبْحَانَهُ وَ تَعَالَى, “RAMDA” (which later evolved into “HOPE Regeneration of Africa”) was founded, and was providing relief to the affected.
          </p>
        </div>
    </div>

    <div className="container2">
    
    <h4>SCHOOLS</h4>
    <h3> Some of our existing projects</h3>
    <p> 
    Although the charity is aiming to promote this with a global reach, the current focus is on North-West Somaliland – one of the most peaceful areas of Somalia. What started here as a small group of orphans being taught under the shade of a tree has today branched into:
• 4 schools providing quality national curriculum education (One (Migane) school was also voted as a top school by the Ministry of Education)
• Over 1800 children, mainly orphans receiving free education
• A sponsored team of over 40 dedicated teachers and another 12 support staff giving their all on salaries of about £100 per month.
The 4 Schools are the Gargaar School (Boromeh district with over 800 children); Hussein Migane School (Dilla region with over 500 children); Boon School (Southern region, over 250 children) and the Dhuhun School (over 150 children). The schools provide free education from Years 1-8 and do not have the capacity or facilities to take them to Secondary School completion or to lower the waiting lists, where hundreds more children could leave the barren ground and be in a classroom. There is a critical need for expansion. Currently the monthly costs for maintaining the schools is £5000 per month. For just £20/month you can earn the reward in Aakhira of sponsoring an orphan’s education and welfare needs. Allah (swt) and the Prophet (PBUH) remind across the Quran and the Sunnah of the importance of taking care of the orphans and the needy and our reward for this in the Aakhira.
    </p>
    </div>

    <div className="frame">
      <table width="85%"> 
        <tr>
          <td>
            <img src={bgframe} width="400" height="200px"></img>
          </td>

          <td>
            <img src={bgframe1} width="400" height="200px"></img>
          </td>

          <td>
            <img src={bgframe2} width="400" height="200px"></img>
          </td>
        </tr>

        <tr>
          <td>
            <img src={bgframe3} width="400" height="200px"></img>
          </td>

          <td>
            <img src={bgframe4} width="400" height="200px"></img>
          </td>

          <td>
            <img src={bgframe5} width="400" height="200px"></img>
          </td>
        </tr>
      </table>
      
    </div>
       
    <BottomBar />
    </>
  )
}

export default About