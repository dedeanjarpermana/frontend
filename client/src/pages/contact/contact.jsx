import React from 'react'
import './contact.css'
import Navbar from '../../components/Navbar/Navbar'
import BottomBar from '../../components/bottombar/bottom'

import telephone from '../../pict_source/telephone.png'
import whatsapp from '../../pict_source/wa.png'
import Instagram from '../../pict_source/ig.png'
import Email from '../../pict_source/email.png'
// import logoBanner from '../../pict_source/logo_banner.jpg'
import logoBanner from '../../pict_source/logo_banner.png'
import TemplateContact from '../../pict_source/template_contact.png'





function Contact() {
  return (
    <>
        <Navbar />
        <div className="container-kontak">
          <div className="detail_kontak">
            Komplek Griya Bandung Asri 1 Blok H 98 Bojongsoang
            <br />
            Kab. Bandung, Jawa Barat, Indonesia, 40228
            <br/> 
            Phone/WA : +6285860495780
          <p/>
          Headquarter
          Jln. Soekarno Hatta No.10901 Bandung,
          Indonesia, 40222
          <br/>
          Phone/WA : +6285723400826
          </div>
          
          <div className="detail_form">
            Contact us, you can send a message to Us
            <p/>
            <div id="feedback-form">
              {/* <h2 class="header"> Register Today</h2> */}
              <div>
                <form>
                  <input type="text" name="name" placeholder="name"></input>
                  <input type="text" name="email" placeholder="email"></input>

                  <input type="text"  name="phone" placeholder="Phone number"></input>
                  <label for="">Write your message</label> <br/>
                  <textarea name="question" id="question1" cols="60" rows="6"></textarea>
                  <br/>
                  <button type="submit">Register</button>
                  
                  
                </form>
              </div>
            </div>
            
          </div>
      </div>


        <BottomBar/>
    </>
  )
}

export default Contact