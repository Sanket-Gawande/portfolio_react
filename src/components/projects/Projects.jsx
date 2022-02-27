import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { client, urlFor } from "../../connection/client";
import "./project.scss";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filterd_projects, setFilteredProjects] = useState([]);
  const [filterAnim, setFilterAnim] = useState({ y: "0px", opacity: 1 });
const [active , setActive] = useState("All")
  const FILTER_TABS = ["All", "html/css", "next", "react", "nodejs", "php"];
  useEffect(() => {
    const query =
      '*[ _type == "projects"]{projectname ,_id, category , thumbnail , tags}';
    client.fetch(query).then((data) => {
      
      setProjects(data);
      setFilteredProjects(data);
    });
  }, []);

  function filterElement(tag) {
    setFilterAnim({ y: "100px", opacity: 0 });
    const filtered = projects.filter((obj) => obj.tags.includes(tag));
    setActive(tag)
    setTimeout(() => {
      setFilteredProjects(filtered);
      setFilterAnim({ y: 0, opacity: 1 });
    }, 500);
  }
  return (
    <>
      <div className="projects wrapper" id="Projects">
        <h4 className="app__main_heading">Projects i have done before</h4>
        <p className="app__main_desc">
          Here are some of projects or works listed below that i have created to
          enhance my skills and knowledge. I hope it will give a good idea about
          my skills & me.
        </p>
        <div className="project__filter_tabs">
          {FILTER_TABS.map((item, index) => {
            return (
              <span
                key={`${index}_${item}`}
                className={`project__filter_tab ${active == item ? "active" : ""}`}
                onClick={() => filterElement(item)}
              >
                {item}
              </span>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="project__projects_list"
        >
          {filterd_projects.map((item) => {
            return (
              <motion.div
                animate={filterAnim}
                transition={{ duration: 0.5 }}
                initial={{ y: "100px", opacity: 0 }}
                whileInView={filterAnim}
                className="project__projects_list_item"
                key={item._id}
              >
                <div className="project__projects_list_item_thumbnail_wrapper">
                  <img
                    src={urlFor(item.thumbnail)}
                    alt={item.projectname}
                    className="project__projects_list_item_thumbnail"
                  />
                  <div className="project__projects_list_item_overlay">
                    <motion.a
                      whileHover={{ scale: [0, 1] }}
                      animate={{scale:1}}
                      transition={{ duration: 0.4, ease: "easeIn" }}
                      href="/"
                      className="project__projects_list_item_overlay_code_link"
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: [0, 1] }}
                      animate={{scale:1}}
                      transition={{ duration: 0.4, ease: "easeIn" }}
                      href="/"
                      className="project__projects_list_item_overlay_preview_link"
                    >
                      <FaGlobe />
                    </motion.a>
                  </div>
                </div>
                <p className="project__projects_list_item_category">
                  {item.category}
                </p>
                <h4 className="project__projects_list_item_title">
                  {item.projectname}
                </h4>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
