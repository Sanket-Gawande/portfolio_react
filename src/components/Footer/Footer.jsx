import './footer.scss'
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaArrowAltCircleUp,
} from 'react-icons/fa'
import { NAV_LINKS, SectionNavigation } from '../Navbar/navTools'
import { BiMailSend } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import '../Navbar/navbar.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo_section">
        <img src="/logo.png" alt="logo" className="footer__logo_section_logo" />

        <ul className="navlinks big_screen">
          {NAV_LINKS.map((item) => {
            return (
              <li key={item.link} className="navlinks_item">
                <NavLink
                  to={`/${item.link}`}
                  className="navlinks_link"
                  onClick={() => SectionNavigation(item.link)}
                >
                  {item.link}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <div className="small_screen">
          <FaArrowAltCircleUp />
        </div>
      </div>
      {/* address section */}
      <section className="address_section">
        <div>
          <h4>Snaket Gawande</h4>
          <p>7030621543</p> | <p>sanketgawande.gcoey@gmail.com</p>
          <br />
          <p>At Yavatmal , Maharashtra 445001</p>
          <br />
          <p>
            Hello , I'm Sanket Gawande , BTech student completing my UG in 2023.
            I'm Full stack (MERN) developer ,I have created so many creative
            projects with this tech stack , and working on more like this .{' '}
          </p>
        </div>
        {/* iframe map of yavatmal */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4041.1332558529584!2d78.13329375068511!3d20.413153886268006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3ef97f2cbf13f%3A0x1851e9dd43605803!2sGovernment%20College%20Of%20Engineering%20Yavatmal!5e1!3m2!1sen!2sin!4v1649593376706!5m2!1sen!2sin"
            title="map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <div className="footer__logo_section_icons ">
        <a href="http://github.com/Sanket-Gawande/">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/sanket_g__">
          <FaInstagram />
        </a>
        <a href="mailto:sanketgawande.gcoey@gmail.com">
          <BiMailSend />
        </a>
        <a href="mailto:sanketgawande.gcoey@gmail.com">
          <FaLinkedin />
        </a>
      </div>
      <p className='copy'>&copy; All rights are reserved | 2022 </p>
    </div>
  )
}

export default Footer
