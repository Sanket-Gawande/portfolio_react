import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../connection/client";
import "./home.scss";
const Home = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const q = '*[ _type == "skills" ]{imgUrl , featured}';
    client.fetch(q).then((images) => {
      const featured = images.filter(img => img.featured === true);
      const zero = urlFor(featured[0]?.imgUrl)
      const one = urlFor(featured[2]?.imgUrl)
      const two = urlFor(featured[1]?.imgUrl)
      setImages([zero , one ,two]);
    
    });
  }, []);
  return (
    <div className="home wrapper" id="Home">
      {/* information div */}
      <motion.div
        className="info"
        initial={{ x: "-50vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 4, type: "spring", stiffness: 50 }}
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
      <motion.section
        className="image"
        initial={{ y: "-100vw" }}
        animate={{ y: 0 }}
        transition={{ duration: 4, type: "spring", stiffness: 50 }}
      >
        <img src="/hero.png" alt="Sanket-Gawande" />
      </motion.section>

      {/* icons section  */}
      <motion.section
        className="icons"
        initial={{ x: "50vw", scale: 0 }}
        animate={{ x: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 4, type: "spring", stiffness: 50 }}
      >
        <img className="img-1" src={images[0]} alt="code_logo" />
        <img className="img-2" src={images[1]} alt="code_logo" />
        <img className="img-0" src={images[2]} alt="code_logo" />
      </motion.section>
    </div>
  );
};

export default Home;
