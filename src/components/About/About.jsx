import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./about.scss";
import { client, urlFor } from "../../connection/client";
import { useHeading } from "../../Context/HeadingContext";
import Loading from "../Loading-skeleton";
const About = () => {
  const data = useHeading();
  const section = data.find((item) => item.section === "about");

  const [profiles, setProfiles] = useState([]);
  const getProfiles = async () => {
    const query =
      '*[_type == "profiles"]{profile , imgUrl , description , _id}';
    const data = await client.fetch(query)
    setProfiles(data)
  }
  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <div className="about wrapper" id="About">
      <h2 className="app__main_heading">{section?.heading}</h2>
      <p className="app__main_desc">{section?.desc} </p>
      <div className="about_flex">
        {profiles.length < 1 && <Loading />}
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
