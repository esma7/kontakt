import React from "react";
import kontakImg from "../../img/kontakt24Ay.png";
import logo from "../../img/logo.svg";
import facebook from "../../img/facebook.svg"
import google from "../../img/google.svg"
import { CiGrid41 } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GiScales } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";
import  "../Header/header.css"

const Header = () => {
  return (
   <>
    <header>
      <div className="headerUp">
        <img src={kontakImg} alt="" />
      </div>
      <div className="headerMiddle w-100 flex justify-between items-center px-10 py-5 bg-white border-b-2">
        <div className="logo w-1/3">
          <img className="" src={logo} alt="" />
        </div>
        <ul className="navigation flex gap-6 font-montserrat text-base font-bold">
          <li>
            <a className="text-red-500" href="#">
              Kampaniya
            </a>
          </li>
          <li>
            <a href="#">Mağazalar</a>
          </li>
          <li>
            <a href="#">Korporativ satışlar</a>
          </li>
        </ul>
        <ul className="profInfo flex items-center font-montserrat text-base">
          <a className="font-bold text-lg" href="#">
            <span className="text-red-800">*</span>6060
          </a>
          <div className="profInfoBtns mx-6 flex gap-2">
            <button className="payMouth border border-green-500 rounded-md p-1 text-green-500">Aylıq Ödəniş</button>
            <button className="login">Daxil ol</button>
          </div>
          <ul className="lang flex items-center flex-col">
            <li className="dropdown relative">
              <a href="#">AZ &#129171;</a>
              <li className="child  absolute">
                <a href="#">EN</a>
              </li>
            </li>
          </ul>
        </ul>
      </div>

      <div className="headerBottom w-100 flex justify-between px-10 py-4 bg-white">
        <div className="kataloq flex items-center">
          <i className="text-2xl"><CiGrid41 /></i>
          <span className="mx-2 text-xl">Kataloq</span>
        </div>
        <form className="formClass flex items-center p-1 rounded-md text-base border-0" action="#">         
            <span className="text-xl"><CiSearch /></span>
            <input className="w-100 mx-2" type="text" placeholder="Axtaris..." />
         
        </form>
        <div className="cartHistory flex items-center gap-5 text-2xl">
            <span className="p-2"><GiScales /></span>
            <span className="border-x-2 p-2"><CiHeart /></span>
            <span className="p-2"><FiShoppingCart /></span>
            
        </div>
      </div>
    </header>
    <div className="modal">        
        <div className="sign ">
            <a href="#">X</a>
            <h2>Xoş gördük! 👋</h2>
            <p>Üstünlüklərindən faydalanmaq üçün daxil olun!</p>
            <button className="fb"><img src={facebook} alt="" />Facebook</button>
            <button className="goog"><img src={google} alt="" />Google</button>
            <p className="other">və ya</p>
            <form action="#">
                <div className="email"><span><i>*</i>Elektron poçt</span><input type="text"/></div>
                <div className="pass"><span><i>*</i></span>Şifrə<input type="password"/></div>
                <div className="save">
                    <input type="checkbox" id="check" /> 
                    <label htmlFor="check">Yadda saxla</label>
                    <small>Şifrənizi unutmusunuz?</small>
                </div>
                <button>Daxil ol</button>
            </form>
        </div>
    </div>
   </>
  );
};

export default Header;
