import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./about.scss";
import { client, urlFor } from "../../connection/client";

const About = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(async () => {
    const query = '*[_type == "profiles"]{profile , imgUrl , description , _id}';
    client
      .fetch(query)
      .then((data) => setProfiles(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="about wrapper" id="About">
      <h2 className="app__main_heading">
        Lorem ipsum dolor sit amet <span>consectetur</span> adipisicing elit. A,{" "}
        <span>voluptatum</span>.
      </h2>
      <p className="app__main_desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic
        doloribus nihil ipsum nisi, error alias eligendi saepe voluptas tenetur
        odio repudiandae soluta, aspernatur iste!
      </p>
      <div className="about_flex">
        {profiles.map((obj) => {
          return (
            <motion.div
              key={obj._id}
              whileHover={{ scale: 1.1 }}
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.8, opacity: 0.5 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              // transition={{duration : .1 , ease : "easeInOut"}}
              className="about_profile"
            >
              <img
                src={urlFor(obj.imgUrl)}
                alt="frontend"
                className="about_profile-thumbnail"
              />
              <h4 className="about_profile-name">{obj.profile}</h4>
              <p className="about_profile-desc">{obj.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
