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
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import  "../FirstSection/firstSection.css"



const FirstSection = () => {

  
  return (
    <section className='firstSection flex justify-between px-8 py-5'>
      <div className="sideBar w-[20%] h-[595px] overflow-y-scroll bg-white rounded-xl">
        <ul className='sideLinks px-4 py-2 '>
            <li className=''>
              <a href="#">
                <i>1+1</i><span>Birlikdə al</span>
              </a>
              <button><IoIosArrowForward/></button>                         
            </li>

            <li>
              <a href="#">
                <i><MdOutlinePhoneAndroid/></i><span>Smartfonlar və aksesuarlar</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>

            <li>
              <a href="#">
              <i><BsSmartwatch/></i><span>Smart qadjetlə</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>
            <li>
              <a href="#">
              <i><MdComputer/></i><span>Notbuklar, PK, planşetlər</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>

            <li>
              <a href="#">
             <i><CgGames/></i><span>Geymerlər üçün məhsullar</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>

            <li>
              <a href="#">
              <i><HiOutlineTv/></i><span>TV, audio və foto</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>
            <li>
              <a href="#">
              <i><PiWashingMachineThin/></i><span>Mətbəx texnikası</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>
            <li>
              <a href="#">
              <i><PiWashingMachineThin/></i><span>Ev texnikası</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>

            <li>
              <a href="#">
              <i><FaWineGlassEmpty/></i><span>Qab-qacaq</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>
            <li>
              <a href="#">
              <i><PiHairDryer/></i><span>Gözəllik və sağlamlıq texnikası</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>
            <li>
              <a href="#">
              <i><MdOutlineSportsRugby/></i><span>Hobbi və əyləncə</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>
            <li>
              <a href="#">
              <i><VscTools/></i><span>Təmir tikinti</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>
            <li>
              <a href="#">
              <i><FaCarRear/></i><span>Avtomobil məhsulları</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>
            <li>
              <a href="#">
              <i><LuSofa/></i><span>Mebel və tekstil</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>
            <li>
              <a href="#">
              <i><IoHomeOutline/></i><span>Ev və bağ</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>
            <li>
              <a href="#">
              <i><GiDelicatePerfume/></i><span>Kosmetika və Baxım</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>
            <li>
              <a href="#">
              <i><PiBabyCarriage/></i><span>Uşaq aləmi</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>
            <li>
              <a href="#">
              <i><GiClothes/></i><span>Geyim,Ayaqqabı və Aksesuar</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>
            <li>
              <a href="#">
              <i><HiOutlineLightBulb/> </i><span>Kontakt plus xidmətləri</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>
            <li>
              <a href="#">
              <i><BsGiftFill/></i><span>Hədiyyə və sertifikatlar</span>
              </a>
              <button><IoIosArrowForward/></button>

            </li>
                
        </ul>
      </div>
      <div className="slider w-[50%] h-[595px] flex overflow-y-hidden gap-3 rounded-xl relative">
        <button className='absolute top-[50%] right-0 text-white' type="button"><FaArrowCircleRight/></button>
        <button className='absolute top-[50%] text-white' type="button"><FaArrowCircleLeft/></button>
        <img className='' src="https://kontakt.az/media/dinarys/banner/images/2_copy_13_4_595_1-b15730ec.webp" alt="" />        
        <img className='' src="https://kontakt.az/media/dinarys/banner/images/595x595_aze_1-fa49e77e.webp" alt="" />        
        <img className='' src="https://kontakt.az/media/dinarys/banner/images/595x595_1-49a62e26.webp" alt="" />        
        <img className='' src="https://kontakt.az/media/dinarys/banner/images/1_copy_3_3az567890_1-7b9084b7.webp" alt="" />        
        <img className='' src="https://kontakt.az/media/dinarys/banner/images/2_7__1-a8e744d3.webp" alt="" />        
      </div>
      <div className="dayOffer w-[20%] bg-white rounded-xl font-montserrat">
        <h2 className='text-center font-bold my-3'>Günün təklifi</h2>
        <div className="dealTimer flex gap-2 items-center justify-center">
          <div className="hour w-[50px]"><p className='text-green-500'>08</p>saat</div>
          <div className="minute w-[50px]"><p className='text-green-500'>38</p>dəqiqə</div>
          <div className="second"><p className='text-green-500'>40</p >saniyə</div>
        </div>

      </div>
    </section>
  )
}

export default FirstSection
