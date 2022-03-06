import { createContext, useContext } from "react";

const HeaderContext = createContext();
const HEADINGS = [
  {
    heading: "Highlights of my profile",
    section: "about",
    desc: "Here is short description about my profile , I have mentioned highlights of my profile ",
  },
  {
    heading: "Projects i have done before",
    section: "project",
    desc: "Here are some of projects or works listed below that i have created to enhance my skills and knowledge. I hope it will give a good idea about my skills & me.",
  },
  { heading: "Skills & Experiences", section: "skill", desc: "" },
  {
    heading: "Contact me here !",
    section: "contact",
    desc: "Feel free to contact me here , I'm available on social media also",
  },
];
export const HeaderContextProvider = ({ children }) => {
  return (
    <HeaderContext.Provider value={HEADINGS}>{children}</HeaderContext.Provider>
  );
};

export function useHeading() {
  return useContext(HeaderContext);
}
