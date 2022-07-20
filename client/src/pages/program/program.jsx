import React from 'react'
import './program.css'
import Navbar from '../../components/Navbar/Navbar'
import BottomBar from '../../components/bottombar/bottom'
import Template2 from '../../pict_source/template2.png'

import Alumni from '../../pict_source/alumni.png'
import prog_juara_kelas from '../../pict_source/program_juara_kelas.png'
import prog_utbk from '../../pict_source/program_utbk.png'
import prog_igcse from '../../pict_source/program_IGCSE.png'
import prog_ib from '../../pict_source/program_IB.png'
import Fasilitas from '../../pict_source/fasilitas.png'
// import Program from '../../pict_source/'





function Program() {
  return (
    <>
        <Navbar />
        
  
        <div className="program1">
        
          
          
          
          <table  width="90%" text-align="justify">
              <tr>
                <td width="20%">
                <div className="lingkaran1"><img src={prog_juara_kelas} width="200px"  /> </div>
                  
                </td>
                <td width="70%" text-align="justify"> 

                  Program pendukung belajar bagi siswa SD, SMP dan SMA untuk meningkatkan pemahaman atas materi pelajaran dan meningkatkan nilai akademik siswa. Siswa dapat memilih pelajaran apa saja sesuai kebutuhan. Program inipun dapat membantu siswa dalam mengerjakan tugas atau PR.
                </td>
              </tr>
              <tr>
                <td width="20%">
                <img src={prog_utbk} width="200px"  /> 
                </td>
                <td width="70%"> 
                  Program persiapan untuk dapat lulus tes masuk perguruan tinggi Negeri ataupun swasta. Terdiri atas 2 pilihan program MIPA dan SOSHUM. Metoda belajar yang digunakan adalah drilling. siswa diperkenalkan dengan tipe soal ujian,latihan dengan berbagai tipe soal dan juga tips trik dalam mengerjakan soal-soal ujian untuk mencapai nilai maksimum.
                </td>
              </tr>
              <tr>
                <td width="20%">
                <img src={prog_igcse} width="200px"  /> 
                </td>
                <td width="70%"> 
                 Program persiapan ujian international untk siswa kelas 7 sampai kelas 12. mata pelajaran yang dipilih terganting kebutuhan siswa. ada dua pilihan board yaitu Cambridge dan Edexcel. Program persiapan ini difokuskan pada cara menjawab soal dan bagaimana untuk mendapatkan nilai maksimum . serta diberitahukan pula kriteria penilaian untuk tiap soal sehingga siswa dapat meminimalisir kesalahan. 
                 Program ini terbuka 
                 bukan hanya bagus bagi siswa yang bersekolah di 
                 sekolah International. Namun program ini untuk semua kalangan siswa yang 
                 berminat melanjutkan sekolah di Luar negeri. Kami dapat membatu proese pendaftaran ujian bagi siswa individual.
                </td>
              </tr>
              <tr>
                <td width="20%">
                <img src={prog_ib} width="200px"  /> 
                </td>
                <td width="70%"> 
                 Program persiapan khusus untuk siswa yang bersekolah dengan menggunakan kurikulum IB dan akan mengikuti ujian IB. 
                 Siswa akan mendapatkan pengalaman belajar mengenai cara mengerjakan dan menjawab soal ujian, sehingga siswa lebih familiar dengan soal-soal yang diujikan. 
                 Materi yang diajarkan berdasarkan pada soal ujian sebelumnya, sehingga siswa akan terbiasa dengan tipe soal-soal yang diujkan.
                </td>
              </tr>
            </table>

        
        </div>
        

        <div className="gambarlogo">
            <img src={Alumni} alt=" " width="500px" height="500px" />
            <img src={Fasilitas} alt=" " width="500px" height="500px" />
        </div>

        

          <BottomBar />
        </>
  )
}

export default Program