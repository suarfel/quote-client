import classes from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';
const Footer = () => {
  const width = useSelector((state) => state.nav.width);
  const iconStyle = {
    margin: '0px',
    color: 'black', // Change the color to white
    fontSize: '28px',
  };
  return (
    <div className={classes.footer}>
          <div className={classes.mainName}>Quote</div>
          <div className={classes.footerRights}>
          @2012.QuoteBook. All rights reserved
          </div>
         
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to="https://www.linkedin.com/in/surafel-getahun-3a8344235/">  <FaLinkedin style={iconStyle} /></NavLink>
            </li>
            <li>
              <NavLink to="/pricing"><FaTwitter style={iconStyle} /></NavLink>
            </li>
            <li>
              <NavLink to="/Features"><FaFacebook style={iconStyle} /></NavLink>
            </li>
            <li>
              <NavLink to="https://github.com/suarfel"><FaGithub style={iconStyle} /></NavLink>
            </li>
          </ul>
        </nav>   
    </div>
  );
};

export default Footer;
