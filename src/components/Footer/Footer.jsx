import "./footer.scss";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo_section">
        <img src="/logo.png" alt="logo" className="footer__logo_section_logo"/>
        <div className="footer__logo_section_icons">
          <a href="http://github.com/Sanket-Gawande/">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/sanket_g__">
            <FaInstagram />
          </a>
          <a href="mailto:sanketgawande.gcoey@gmail.com">
            <BiMailSend />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
