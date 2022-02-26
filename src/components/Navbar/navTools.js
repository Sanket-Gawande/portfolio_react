export const NAV_LINKS = [
  { link: "Home", yOffset: 0 },
  { link: "About", yOffset: 1000 },
  { link: "Skills", yOffset: 2000 },
  { link: "Experience", yOffset: 3000 },
  { link: "Contact", yOffset: 40000 },
];

export function SectionNavigation(link) {
  // window.scrollTo(0, y);
  window.location.href = `#${link}`
}
