import React, { useEffect, useState } from "react";
import "./skills.scss";
import { motion } from "framer-motion";
import { client, urlFor } from "../../connection/client";
const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[ _type == "skills"]{skill , imgUrl , _id}';
    client.fetch(query).then((data) => {
      
      setSkills(data);
    });
  }, []);
  
  return (
    <div className="skills wrapper" id="Skills">
      <h2 className="app__main_heading">Skills & Experiences</h2>
      <div className="skill__main_flex">
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView={{ y: [100, 0], opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 180 }}
          className="skill__skill_section"
        >
          {skills.map((obj) => (
            <div className="skill__skill_item" key={obj._id}>
              <img
                src={urlFor(obj.imgUrl)}
                alt={obj.skill}
                className="skill__img"
              />
              <h4 className="skill__skill_heading">{obj.skill}</h4>
            </div>
          ))}
        </motion.section>
      </div>
    </div>
  );
};

export default Skills;
