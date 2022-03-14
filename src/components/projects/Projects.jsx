import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { client, urlFor } from "../../connection/client";
import "./project.scss";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { useHeading } from "../../Context/HeadingContext";
import Loading from "../Loading-skeleton/index";
const Projects = () => {
  const data = useHeading();
  const section = data.find((item) => item.section === "project");
  const [projects, setProjects] = useState([]);
  const [filterd_projects, setFilteredProjects] = useState([]);
  const [filterAnim, setFilterAnim] = useState({ y: "0px", opacity: 1 });
  const [active, setActive] = useState("All");
  const FILTER_TABS = [
    "All",
    "html/css",
    "next",
    "react",
    "nodejs",
    "php",
    "js",
  ];
  useEffect(() => {
    const query =
      '*[ _type == "projects"]{projectname ,_id, category , thumbnail , tags , code ,Description, preview}';
    client.fetch(query).then((data) => {
      setProjects(data);
      setFilteredProjects(data);
    });
  }, []);

  function filterElement(tag) {
    setFilterAnim({ y: "100px", opacity: 0 });
    const filtered = projects.filter((obj) => obj.tags.includes(tag));
    setActive(tag);
    setTimeout(() => {
      setFilteredProjects(filtered);
      setFilterAnim({ y: 0, opacity: 1 });
    }, 500);
  }
  
  return (
    <>
      <div className="projects wrapper" id="Projects">
        <h4 className="app__main_heading">{section?.heading}</h4>
        <p className="app__main_desc">{section?.desc}</p>
        <div className="project__filter_tabs">
          {FILTER_TABS.map((item, index) => {
            return (
              <span
                key={`${index}_${item}`}
                className={`project__filter_tab ${
                  active === item ? "active" : ""
                }`}
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
          {filterd_projects.length < 1 && <Loading />}
          {filterd_projects.map((item) => {
            return (
              <motion.div
                animate={filterAnim}
                transition={{ duration: 0.4, ease: "linear" }}
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
                </div>
                  <div className="project__projects_list_item_overlay">
                    <motion.a
                      whileHover={{ scale: [0.5, 1] }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeIn" }}
                      href={item.code}
                      target="_blank"
                      className="project__projects_list_item_overlay_code_link"
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: [0.5, 1] }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeIn" }}
                      href={item.preview}
                      target="_blank"
                      className="project__projects_list_item_overlay_preview_link"
                    >
                      <FaGlobe />
                    </motion.a>
                  </div>
                <p className="project__projects_list_item_category">
                  {item.category}
                </p>
                <h4 className="project__projects_list_item_title">
                  {item.projectname}
                </h4>
                <p className="project__projects_list_item_desc">
                 {item.Description.substr(0, 95)}...
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
