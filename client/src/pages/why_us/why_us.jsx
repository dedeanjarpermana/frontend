
import './why_us.css'
import Navbar from '../../components/Navbar/Navbar'
import BottomBar from '../../components/bottombar/bottom'

import telephone from '../../pict_source/telephone.png'
import whatsapp from '../../pict_source/wa.png'
import Instagram from '../../pict_source/ig.png'
import Email from '../../pict_source/email.png'
import foto1 from '../../pict_source/program_IB.png'
import foto2 from '../../pict_source/program_IGCSE.png'
import foto3 from '../../pict_source/program_Juara_kelas.png'
import polisi from   '../../pict_source/bg_polisi.webp'
import chef from   '../../pict_source/bg_chef.jpeg'
import dokter from   '../../pict_source/bg_dokter.jpeg'
import engineer from   '../../pict_source/bg_engineer.jpg'



// import logoBanner from '../../pict_source/logo_banner.jpg'
import logoBanner from '../../pict_source/logo_banner.png'
import Template3 from '../../pict_source/template3.png'
import React, { useState } from "react";
import { animated, useSpring } from "react-spring";





const WhyUs = () => {
  const professions = ["police", "chef", "docter","engineer"];
  const [myProfession, setMyProfession] = useState("");

  return (
    <>
    <Navbar />
        <div className="container-menu">
        <div className="row w-100">
          <div className="col mb-3 col-12 text-center">
                    <h2>Select the profession you like the most</h2>
                    <br />
                    <h6> just click me!</h6>
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                    >
                        {professions.map(profession => (
                            <button
                                type="button"
                                key={profession}
                                className={"btn btn-light border-dark "}
                                onClick={() => setMyProfession(profession)}
                            >
                                {profession.toLocaleUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
                <br />
                <div className="container-kotak1">
                <div className="col text-center">
                    <p>{myProfession}</p>

                    <p>
                        {myProfession === "police" && (
                            <ProfessionImage src={polisi} />
                        )}
                        {myProfession === "chef" && (
                            <ProfessionImage src={chef} />
                        )}
                        {myProfession === "docter" && (
                            <ProfessionImage src={dokter} />
                        )}
                        {myProfession === "engineer" && (
                            <ProfessionImage src={engineer} />
                        )}
                    </p>
                </div>
                </div>

        </div>
          
    </div>
    <BottomBar />
    </>
  )
}
const ProfessionImage = ({ src }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
      <animated.img
          src={src}
          alt=""
          style={{ width: "250px", height: "250px", ...props }}
      />
  );
};

export default WhyUs