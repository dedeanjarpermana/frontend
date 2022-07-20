import React, {useState, useEffect} from 'react'
import './dashboard.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import BottomBar from '../../components/bottombar/bottom'
import logoDetail from '../../pict_source/logoIklan.png'
import Program from '../program/program'
import Alumni from '../../pict_source/alumni.png'
import Fasilitas from '../../pict_source/fasilitas.png'
import bg1 from '../../pict_source/1_front_end_bg.png'
import bg2 from '../../pict_source/1_Front_end_2.png'
import bg_green from '../../pict_source/bg_green.png'

import math from '../../pict_source/bg_math.png'
import science from '../../pict_source/bg_science.png'





function Dashboard() {
  
 

  return (
    <>
      <Navbar />
      
      <br />
        <div className="container1">
          <img src={bg1} alt=" " width="100%" height="100%" />
          <h1> Newton Education is the Best</h1>
          <h3> The best learning athmosphere to create the student mental and student ability by providing the best choice for students. It can make the class be more funtastic, more complex and more challenging. The best ever to make our system can competitive with the rivals.</h3>
          
        </div>
            


      <div className= "kotak1" >
        <h2> Rebuild lives with Fun Learning</h2>
        <table width="100%">
          <tr>
            <td width="50%">
            To rebuild the lives of those affected, the young in particular, requires a collaborative and co-operative approach between donors and those in need, in order to alleviate their poverty and improve their situation. Such an approach permits us to not only assist in the provision of basic necessities such as water, food and shelter, but also to go further and empower individuals so that they may become self-sufficient through education or other small gifts that make a gigantic difference to their lives. Giving Sadaqah is the key to facilitating such vital transformations.
            </td>
            <td>
            Become a Sponsor. Get Involved.
            One of the easiest ways to support our work is to become a sponsor. Sponsors typically donate a fixed amount per month over an agreed period of time. We can provide the relevant charity tax exemption documents in return for your help.
        
            </td>
          </tr>
        </table>
        
      </div>



      
      <div className='our-mission'>
          <h6>Our Mission</h6>
      
      </div>


      <div className="bg2">
      <img src={bg2} alt=" " width="95%"  />

      </div>


      <div className="bg_green">
      <img src={bg_green} alt=" " width="95%"  />

      </div>

    {/* kotak sebelum footer */}
      
      <div className="container-card">
        <div className="kanan">
          Science
          <img src={science} alt=" " width="95%"  />
          <button>Choose Class</button>
        </div>
        <div className="tengah">
          Math
          <img src={math} alt=" " width="95%"  />
          <button>Choose Class</button>
        </div>
        <div className="kiri">
          Chemistry
          <img src={science} alt=" " width="95%"  />
          <button>Choose Class</button>
        </div>
      </div>

    
      <BottomBar />
    </>
  )
}

export default Dashboard
