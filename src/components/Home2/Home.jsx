import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../../connection/client'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import './home.scss'
const Home = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    const q = '*[ _type == "skills" ]{imgUrl , featured}'
    client.fetch(q).then((images) => {
      const featured = images.filter((img) => img.featured === true)
      const zero = urlFor(featured[0]?.imgUrl)
      const one = urlFor(featured[2]?.imgUrl)
      const two = urlFor(featured[1]?.imgUrl)
      setImages([zero, one, two])
    })
  }, [])
  return (
    <div className="home wrapper" id="Home">
      <motion.div
        className="image"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 50 }}
        whileInView={{ x: [-100, 0] }}
      >
        <div className="social_icons">
          <a href="http://github.com/Sanket-Gawande/">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/sanket_g__">
            <FaInstagram />
          </a>
          <a href="mailto:sanketgawande.gcoey@gmail.com">
            <BiMailSend />
          </a>
          <a href="https://www.linkedin.com/in/sanket-gawande-279375202">
            <FaLinkedin />
          </a>
        </div>
        <img src="/profile.webp" alt="profile photo" />
      </motion.div>
      <div className="info">
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: 'spring',
            stiffness: 100,
            delay: 0.2,
          }}
          whileInView={{ x: [100, 0], o1acity: [0, 1] }}
        >
          hello , I'm <span>Sanket Gawande</span>{' '}
        </motion.h2>
        <motion.h5
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: 'spring',
            stiffness: 100,
            delay: 0.5,
          }}
          whileInView={{ x: [200, 0], o1acity: [0, 1] }}
        >
          Full stack web developer
        </motion.h5>
        <motion.p
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: 'spring',
            stiffness: 100,
            delay: 0.7,
          }}
          whileInView={{ x: [200, 0], o1acity: [0, 1] }}
        >
         Hello , I&#8218;m Sanket Gawande , BTech student completing my UG in 2023.
            I&#8218;m Full stack (MERN) developer ,I have created so many creative
            projects with this tech stack , and working on more like this .
        </motion.p>
        <motion.a
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100, delay: 1 }}
          whileInView={{ x: [100, 0], o1acity: [0, 1] }}
          href="/files/resume.pdf"
          download="sanket_gawande_resume.pdf"
          className="resume_button"
        >
          Download resume
        </motion.a>
      </div>
    </div>
  )
}

export default Home
