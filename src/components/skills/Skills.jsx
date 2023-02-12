import React, { useEffect, useState } from "react";
import "./skills.scss";
import { motion } from "framer-motion";
import { client, urlFor } from "../../connection/client";
import { useHeading } from "../../Context/HeadingContext";
import { FaCheckCircle } from "react-icons/fa";
import Loading from '../Loading-skeleton'
const Skills = () => {
  const data = useHeading();
  const section = data.find((item) => item.section === "skill");
  const [skills, setSkills] = useState([]);
  const [ExpData, setExpData] = useState([]);
  
  useEffect(() => {
    const skill_query = '*[ _type == "skills"]{skill , imgUrl , _id}';
    client.fetch(skill_query).then((data) => {
      setSkills(data.reverse());
      const exp_query =
        '*[ _type == "experience" ]{exp ,_id , isCertified , certificate ,from ,  to }';
      client
        .fetch(exp_query)
        .then((expData) => setExpData(expData))
        .catch((err) => {
          console.log(err)
        });
    });
  }, []);

  return (
    <div className="skills wrapper" id="Skills">
      <h2 className="app__main_heading">{section?.heading}</h2>
      <p className="app__main_desc">{section?.desc}</p>
      {skills.length < 1 && <Loading/>}
      <div className="skill__main_flex">
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: .5}}
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
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          animate={{ y: 0, opacity: 0 }}
          transition={{ duration: .5 }}
          className="skill__exp_section"
        >
          <ul className="skill__exp_list">
            {ExpData &&
              ExpData.map((obj) => {
                return (
                  <article key={obj._id}>
                    <li  key={obj._id} className="skill__exp_list_item">
                      <FaCheckCircle style={{flexShrink : "0"}} /> {obj.exp}
                    </li>
                    {obj.isCertified && (
                      <>
                        <span className="skill__exp_list_item_date">
                          From : {obj.from}
                        </span>
                        <span className="skill__exp_list_item_date">
                          to : {obj.to}
                        </span>
                        <a className="skill__exp_list_item_button" rel="noreferrer"  href={`${process.env.REACT_APP_SANITY_FILE_CDN}${obj?.certificate?.asset._ref.split("-")[1]}.${obj?.certificate?.asset._ref.split("-")[2]}`} target="_blank">
                          View certificate
                        </a>
                      </>
                    )}
                  </article>
                );
              })}
            
          </ul>
        </motion.section>
      </div>
    </div>
  );
};

export default Skills;
