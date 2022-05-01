import React from "react";
import "./Header.css";
import tiktok from "./tiktok.jpg"
import search from "./search.svg"
import{Link} from 'react-router-dom'
const Header = () => {
  return (
  <>
      <div class="Container">
      <div className="Header">
        <img className="logo"src={tiktok} alt="" />
      </div>
      <div class="top">
       <Link  to="/">
         <button className="login">Đăng Nhập</button>
       </Link>
       <Link to="/">
       <button className="register">Đăng Ký</button>
       </Link>
      </div>
    </div>
    <div className="Bottom">
      <div class="left">
      <input className="inputContainer" type="text" placeholder="Tìm kiếm tài khoản và video..." />
      <div class="box"></div>
        <img className="solid" src={search} alt="" />
   
      </div>
      <div class="Choose">
      <select>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
      </select>
      
    </div>
    
    </div>
    
  </>


  );
};

export default Header;
