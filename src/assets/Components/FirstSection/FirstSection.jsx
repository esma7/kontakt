import React from 'react'
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { BsSmartwatch } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { HiOutlineTv } from "react-icons/hi2";
import { PiWashingMachineThin } from "react-icons/pi";
import { GiVacuumCleaner } from "react-icons/gi";   
import { FaWineGlassEmpty } from "react-icons/fa6";
import { PiHairDryer } from "react-icons/pi";
import { MdOutlineSportsRugby } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { FaCarRear } from "react-icons/fa6";
import { LuSofa } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { GiDelicatePerfume } from "react-icons/gi";
import { PiBabyCarriage } from "react-icons/pi";
import { GiClothes } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsGiftFill } from "react-icons/bs";
import  "../FirstSection/firstSection.css"




const FirstSection = () => {
  return (
    <section className='firstSection px-8 py-5'>
      <div className="sideBar">
        <ul className='sideLinks'>
            <li> <i>1+1</i><a href="#">Birlikdə al</a></li>
            <li> <i><MdOutlinePhoneAndroid/></i><a href="#">Smartfonlar və aksesuarlar</a></li>
            <li> <i><BsSmartwatch/></i><a href="#">Smart qadjetlər</a></li>
            <li> <i><MdComputer/></i><a href="#">Notbuklar, PK, planşetlər</a></li>
            <li> <i><CgGames/></i><a href="#">Geymerlər üçün məhsullar</a></li>
            <li> <i><HiOutlineTv/></i><a href="#">TV, audio və foto</a></li>
            <li> <i><PiWashingMachineThin/></i><a href="#">Mətbəx texnikası</a></li>
            <li> <i><GiVacuumCleaner/></i><a href="#">Ev texnikası</a></li>
            <li> <i><FaWineGlassEmpty/></i><a href="#">Qab-qacaq</a></li>
            <li> <i><PiHairDryer/></i><a href="#">Gözəllik və sağlamlıq texnikası</a></li>
            <li> <i><MdOutlineSportsRugby/></i><a href="#">Hobbi və əyləncə</a></li>
            <li> <i><VscTools/></i><a href="#">Təmir tikinti</a></li>
            <li> <i><FaCarRear/></i><a href="#">Avtomobil məhsulları</a></li>
            <li> <i><LuSofa/></i><a href="#">Mebel və tekstil</a></li>
            <li> <i><IoHomeOutline/></i><a href="#">Ev və bağ</a></li>
            <li> <i><GiDelicatePerfume/></i><a href="#">Kosmetika və Baxım</a></li>
            <li> <i><PiBabyCarriage/></i><a href="#">Uşaq aləmi</a></li>
            <li> <i><GiClothes/></i><a href="#">Geyim,Ayaqqabı və Aksesuar</a></li>
            <li> <i><HiOutlineLightBulb/> </i><a href="#">Kontakt plus xidmətləri</a></li>
            <li> <i><BsGiftFill/></i><a href="#">Hədiyyə və sertifikatlar</a></li>
        </ul>
      </div>
      <div className="slider"></div>
      <div className="dayOffer"></div>
    </section>
  )
}

export default FirstSection
