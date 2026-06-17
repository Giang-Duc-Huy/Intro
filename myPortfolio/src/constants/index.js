const navLinks = [
  { name: "Work", link: "#work" },
  { name: "About", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
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
  { name: "TypeScript", imgPath: `${import.meta.env.BASE_URL}images/logos/typescript.png` },
  { name: "Node.js",    imgPath: `${import.meta.env.BASE_URL}images/logos/node.png` },
  { name: "Python",     imgPath: `${import.meta.env.BASE_URL}images/logos/python.svg` },
  { name: "PostgreSQL", imgPath: `${import.meta.env.BASE_URL}images/logos/postgresql.png` },
  { name: "Figma",      imgPath: `${import.meta.env.BASE_URL}images/logos/figma.png` },
  { name: "Git",        imgPath: `${import.meta.env.BASE_URL}images/logos/git.svg` },
  { name: "REST API",   imgPath: `${import.meta.env.BASE_URL}images/logos/restapi.png` },
  { name: "Blender",    imgPath: `${import.meta.env.BASE_URL}images/logos/blender.png` },
  { name: "MongoDB",    imgPath: `${import.meta.env.BASE_URL}images/logos/mongodb.png` },
  { name: "Socket.io",  imgPath: `${import.meta.env.BASE_URL}images/logos/socketio.png` },
  { name: "Tailwind",   imgPath: `${import.meta.env.BASE_URL}images/logos/tailwind.png` },
];

const expCards = [
  {
    review: "A UEH student obsessed with building things that actually work, not just look good.",
    imgPath: `${import.meta.env.BASE_URL}images/logos/ueh.png`,
    logoPath: `${import.meta.env.BASE_URL}images/logo1.png`,
    title: "University of Economics Ho Chi Minh City (UEH)",
    date: "2022 - Present",
    responsibilities: [
      "Maintaining a GPA of 4.9/5.0 — Top of the faculty ranking.",
      "Pursuing a Bachelor's degree in Software Engineering.",
      "Actively building real-world projects alongside academic studies to bridge theory and practice.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: `${import.meta.env.BASE_URL}images/logo1.png` },
  { name: "logo2", imgPath: `${import.meta.env.BASE_URL}images/logo2.png` },
  { name: "logo3", imgPath: `${import.meta.env.BASE_URL}images/logo3.png` },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review: "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: `${import.meta.env.BASE_URL}images/client1.png`,
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review: "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: `${import.meta.env.BASE_URL}images/client3.png`,
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    imgPath: `${import.meta.env.BASE_URL}images/client2.png`,
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review: "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
    imgPath: `${import.meta.env.BASE_URL}images/client5.png`,
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review: "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch.",
    imgPath: `${import.meta.env.BASE_URL}images/client4.png`,
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review: "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: `${import.meta.env.BASE_URL}images/client6.png`,
  },
];

const socialImgs = [
  { name: "insta",    imgPath: `${import.meta.env.BASE_URL}images/insta.png` },
  { name: "fb",       imgPath: `${import.meta.env.BASE_URL}images/fb.png` },
  { name: "x",        imgPath: `${import.meta.env.BASE_URL}images/x.png` },
  { name: "linkedin", imgPath: `${import.meta.env.BASE_URL}images/linkedin.png` },
];

export {
  words,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackImgs,
  navLinks,
};