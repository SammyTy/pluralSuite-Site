import { useState } from 'react';
import "./header.scss";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"

function Header() {
  const [open, isOpen] = useState(false);

  const openNavbar = () =>{
    console.log("hello world");
    
    isOpen(!open)
  }
  return (
    <div className='header'>
        <div className="sub_header">
          <div className="mobileLogo">
            <Link to="/" className="logo"><img src={logo} alt="pluralcodelogo"/><span>pluralSuite</span> </Link>
          </div>
          <div className="srch">
            <CiSearch />
          </div>
          <div className="bar" onClick={openNavbar}><FaBars /></div>
          <div className="navbar">
            <ul className={`nav_ul ${open ? "show" : "hide"}`}>
              <div className="subLogo">
                <Link to="/" className="logo"><img src={logo} alt="pluralcodelogo"/>  <span>pluralSuite</span> </Link>
                <div className="close" onClick={openNavbar}>
                    <IoMdClose />
                </div>
              </div>
              <li><Link to="/">home</Link></li>
              <li><Link to="/about">about</Link></li>
              <li><Link to="/rooms">rooms</Link></li>
              <li className="log"><Link to="/" className="logo"><img src={logo} alt="pluralcodelogo"/>  <span>plu ralSuite</span> </Link></li>
              <li><Link to="/resto&bars">resto & bars</Link></li>
              <li><Link to="/News">News</Link></li>
              <li><Link to="/contact">contact</Link></li>
            </ul>
          </div>
            <button className="btn">book yourr room today</button>
        </div>
    </div>
  )
}

export default Header
