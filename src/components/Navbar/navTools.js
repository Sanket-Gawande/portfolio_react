export const NAV_LINKS = [
  { link: "Home" },
  { link: "About" },
  { link: "Projects" },
  { link: "Skills" },
  { link: "Experience" },
  { link: "Contact" },
];

export function SectionNavigation(link) {
  // window.scrollTo(0, y);
  window.location.href = `#${link}`;
}
