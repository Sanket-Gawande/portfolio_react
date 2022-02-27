import { motion } from 'framer-motion'
import React from 'react'
import './home.scss'
const Home = () => {
  return (
    <div className='home wrapper' id='Home'>
      {/* information div */}
    <motion.div className="info"
    initial={{x : "-50vw"}}
    animate={{x:0}}
    transition={{duration: 4 , type:"spring" , stiffness : 50}}
    >
      <div className="info_name">
        <span className="emoji">👋</span>
        <span>
          <small>Hello,</small>
          <h4>I'm Sanket</h4>
        </span>
      </div>
      <div className="info_role">
        <p>Web developer</p>
        <p>(MERN Stack)</p>
      </div>
    </motion.div>

    {/* image section  */}
    <motion.section className='image'
     initial={{y : "-100vw"}}
     animate={{y:0}}
     transition={{duration: 4 , type:"spring" , stiffness : 50}}
     >
      <img src="/hero.png" alt="Sanket-Gawande" />
    </motion.section>

    {/* icons section  */}
    <motion.section className="icons"
     initial={{x : "50vw" , scale : 0}}
     
     animate={{x:0}}
     whileInView={{scale: 1 }}
     transition={{duration: 4 , type:"spring" , stiffness : 50}}>
      <img className='img-1' src="/icons/react.png" alt="react" />
      <img className='img-2' src="/icons/nodejs.png" alt="node" />
      <img className='img-0' src="/icons/php.png" alt="php" />
    </motion.section>
    </div>
  )
}

export default Home