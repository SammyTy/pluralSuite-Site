import { Link } from "react-router-dom";
import "./footer.scss"
import footerImg from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="mainFooter">
        <div className="footerLogo">
            <div className="fLogo">
                <img src={footerImg} alt="" />
            </div>
            <h2>PluralSuite</h2>
            <span>hotel $ Resort</span>
        </div>
        <div className="linkWrapper">
            <div className="links">
                <h2>Email</h2>
                <ul>
                    <li><Link to=''>Pluralsuite@gmail.com</Link></li>
                </ul>
            </div>
            <div className="links">
                <h2>Email</h2>
                <ul>
                    <li><Link to=''>Pluralsuite@gmail.com</Link></li>
                </ul>
            </div>
            <div className="links">
                <h2>Email</h2>
                <ul>
                    <li><Link to=''>Pluralsuite@gmail.com</Link></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="subFooter">
        <p>copyright @2024 All Right researved</p>
      </div>
    </div>
  )
}

export default Footer
