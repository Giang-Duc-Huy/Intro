const navLinks = [
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

const words = [
  { text: "Ideas", imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
  { text: "Concepts", imgPath: `${import.meta.env.BASE_URL}images/concepts.svg` },
  { text: "Designs", imgPath: `${import.meta.env.BASE_URL}images/designs.svg` },
  { text: "Code", imgPath: `${import.meta.env.BASE_URL}images/code.svg` },
  { text: "Ideas", imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
  { text: "Concepts", imgPath: `${import.meta.env.BASE_URL}images/concepts.svg` },
  { text: "Designs", imgPath: `${import.meta.env.BASE_URL}images/designs.svg` },
  { text: "Code", imgPath: `${import.meta.env.BASE_URL}images/code.svg` },
];

// Tech stack dùng cho slider trong TechStack.jsx
const techStackImgs = [
  { name: "React",      imgPath: `${import.meta.env.BASE_URL}images/logos/react.png` },
  { name: "TypeScript", imgPath: `${import.meta.env.BASE_URL}images/logos/ts.png` },
  { name: "Node.js",    imgPath: `${import.meta.env.BASE_URL}images/logos/node.png` },
  { name: "Python",     imgPath: `${import.meta.env.BASE_URL}images/logos/python.svg` },
  { name: "PostgreSQL", imgPath: `${import.meta.env.BASE_URL}images/logos/postgre.png` },
  { name: "Figma",      imgPath: `${import.meta.env.BASE_URL}images/logos/figma.png` },
  { name: "Git",        imgPath: `${import.meta.env.BASE_URL}images/logos/git.svg` },
  { name: "REST API",   imgPath: `${import.meta.env.BASE_URL}images/logos/restapi.png` },
  { name: "Blender",    imgPath: `${import.meta.env.BASE_URL}images/logos/blender.png` },
  { name: "MongoDB",    imgPath: `${import.meta.env.BASE_URL}images/logos/mongo.png` },
  { name: "Socket.io",  imgPath: `${import.meta.env.BASE_URL}images/logos/socket.png` },
  { name: "Tailwind",   imgPath: `${import.meta.env.BASE_URL}images/logos/tailwind.png` },
];

const expCards = [
  {
    review: "Established in 1976, University of Economics Ho Chi Minh City (UEH) is a leading multidisciplinary university in Vietnam, renowned for excellence in business, economics, technology, and sustainable development.",
    imgPath: `${import.meta.env.BASE_URL}images/logos/ueh.png`,
    logoPath: `${import.meta.env.BASE_URL}images/logo1.png`,
    title: "University of Economics Ho Chi Minh City (UEH)",
    date: "2023 - Present",
    responsibilities: [
      "Maintaining a GPA of 3.49/4.0.",
      "Pursuing a Bachelor's degree in Software Engineering.",
      "Actively building real-world projects alongside academic studies to bridge theory and practice.",
    ],
  },
];

const testimonials = [
  {
    name: "Le Nam",
    mentions: "@lenam",
    review: "Reliable and easy to work with, he understands requirements quickly and gets things done without needing much back and forth",
    imgPath: `${import.meta.env.BASE_URL}images/client1.png`,
  },
  {
    name: "Hoang Giang",
    mentions: "@hoanggiang",
    review: "Good communicator and takes feedback well. Our project ran smoothly largely because he stayed consistent and kept things on track.",
    imgPath: `${import.meta.env.BASE_URL}images/client3.png`,
  },
  {
    name: "Mai Nguyen",
    mentions: "@mainguyen",
    review: "Has an ability to turn ideas into real, functional products. From UI design to implementation, he handles everything with care.",
    imgPath: `${import.meta.env.BASE_URL}images/client2.png`,
  },
];

const socialImgs = [
  { name: "instagram", imgPath: `${import.meta.env.BASE_URL}images/logos/instagram.png`, imglink: "https://www.instagram.com/cancel.giang/" },
  { name: "facebook", imgPath: `${import.meta.env.BASE_URL}images/logos/facebook.png`, imglink: "https://www.facebook.com/cancel.giang/" },
  { name: "github", imgPath: `${import.meta.env.BASE_URL}images/logos/github.png`, imglink: "https://github.com/Giang-Duc-Huy" },
  { name: "linkedin", imgPath: `${import.meta.env.BASE_URL}images/logos/linkedin.png`, imglink: "https://www.linkedin.com/in/hijang17" },
  { name: "figma", imgPath: `${import.meta.env.BASE_URL}images/logos/figma.png`, imglink: "https://www.figma.com/@hijang17" },
];

export {
  words,
  expCards,
  testimonials,
  socialImgs,
  techStackImgs,
  navLinks,
};