import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useHeading } from "../../Context/HeadingContext";
import "./contact.scss";
import { client } from "../../connection/client";
const Contact = () => {
  // heading
  const data = useHeading();
  const section = data.find((item) => item.section === "contact");
  // ui update on message send's successfully
  const [messageStatus, setMessageStatus] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    message: "",
  });
  //  SUBMITTING CONTACT FORM
  const submitMessage = (e) => {
    e.preventDefault();
    const { first_name, last_name, contact, email, message } = formData;
    client
      .create({
        _type: "contact",
        name: `${first_name} ${last_name}`,
        message: message,
        email: email,
        phone: contact,
      })
      .then((response) => {
        if (response) {
          setMessageStatus(true);
          setFormData([
            {
              first_name: "",
              last_name: "",
              email: "",
              contact: "",
              message: "",
            },
          ]);
        }
      })
      .catch((err) => {
        alert("Something went wrong !");
      });
  };
  // HANDLING INPUT autoComplete="off"
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div id="Contact" className="contact">
      <h1 className="app__main_heading heading">{section.heading}</h1>
      <p className="app__main_desc">{section.desc}</p>
      <section className="contact__contact_section">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transiton={{ duration: 1 }}
          whileInView={{ x: [-100, 0] }}
          className="contact__contact_form"
        >
          <AnimatePresence>
            {!messageStatus && (
              <motion.form
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                autoComplete="none"
                onSubmit={submitMessage}
              >
                <div className="contact__contact_form_name">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileInView={{ opacity: [0.5, 1] }}
                    transition={{ duration: 1 }}
                    className="contact__contact_form_input_group"
                  >
                    <label className="contact__contact_form_input_label">
                      First name
                    </label>
                    <input
                      required
                      autoComplete="none"
                      type="text"
                      onChange={HandleChange}
                      name="first_name"
                      value={formData.first_name}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileInView={{ opacity: [0.5, 1] }}
                    transition={{ duration: 2 }}
                    className="contact__contact_form_input_group"
                  >
                    <label className="contact__contact_form_input_label">
                      Last name
                    </label>
                    <input
                      required
                      autoComplete="none"
                      type="text"
                      onChange={HandleChange}
                      name="last_name"
                      value={formData.last_name}
                      pattern="\w{2,}"
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileInView={{ opacity: [0.5, 1] }}
                  transition={{ duration: 1 }}
                  className="contact__contact_form_input_group"
                >
                  <label className="contact__contact_form_input_label">
                    Email Address
                  </label>
                  <input
                    required
                    autoComplete="none"
                    type="email"
                    onChange={HandleChange}
                    name="email"
                    value={formData.email}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileInView={{ opacity: [0.5, 1] }}
                  transition={{ duration: 2 }}
                  className="contact__contact_form_input_group"
                >
                  <label className="contact__contact_form_input_label">
                    Contact number
                  </label>
                  <input
                    required
                    autoComplete="none"
                    type="text"
                    onChange={HandleChange}
                    name="contact"
                    value={formData.contact}
                    pattern="[0-9]{10}"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileInView={{ opacity: [0.5, 1] }}
                  transition={{ duration: 2 }}
                  className="contact__contact_form_input_group"
                >
                  <label className="contact__contact_form_input_label">
                    Type your message here ...
                  </label>
                  <textarea
                    required
                    pattern="\w{5,}"
                    onChange={HandleChange}
                    name="message"
                    value={formData.message}
                  />
                </motion.div>
                <button className="contact__contact_form_submit">
                  {" "}
                  Send now{" "}
                </button>
              </motion.form>
            )}
            {messageStatus && (
              <motion.div
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 2,
                  ease: "easeIn",
                  type: "spring",
                  stiffness: 50,
                }}
                className="contact__contact_form_response"
              >
                <img src="/msg-send.gif" alt="message sended successfully !" />
                <motion.p
                  exit={{ opacity: 0, x: -200 }}
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 70,
                  }}
                  className="contact__contact_form_message_response_text"
                >
                  Thanks for contacting me :)
                </motion.p>
                <br />
                <motion.p
                  exit={{ opacity: 0, x: -200 }}
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 70,
                  }}
                  className="contact__contact_form_message_response_text"
                >
                  I'he hot your message
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          initial={{ x: "50vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transiton={{ duration: 2 }}
          whileInView={{ x: [100, 0] }}
          className="contact__contact_showcase"
        >
          <img src="/icons/contact-us.svg" alt="contact-us" />
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
