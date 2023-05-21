import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,  
} from "../assets";

import todo from '../assets/To-Do-App.png';
import world from '../assets/countries.jpg';
import meals from '../assets/food.jpg'
import tours from '../assets/touristic-places.jpg'
import TodoApp from '../assets/To-Do-App.jpeg'
import countries from '../assets/World-Countries.jpeg'
import delicious from '../assets/food-order.jpeg'


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }, 
];

const experiences = [
  {
    title: "React Developer",
    company_name: "To-Do List",
    icon: todo,
    iconBg: "#383E56",
    date: "Jan - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: " Full stack Developer",
    company_name: "World-Ranks",
    icon:world,
    iconBg: "#E6DEDD",
    date: "Feb - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Food-Order",
    icon:meals,
    iconBg: "#383E56",
    date: "March - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "To-Do-App",
    description:
     "This Todo List app helps users develop better time management, organization and task completion skills in a personal or business setting. Users can easily track their daily, weekly or monthly tasks and manage their plans more efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Redux-Toolkit",
        color: "orange-text-gradient",
      },
    ],
    image:TodoApp,
    source_code_link: "https://friendly-creponne-14ff3c.netlify.app/",
  },
  {
    name: "World-Ranks",
    description:
      "World Ranks is an app that lets you explore countries around the world and review their rankings in different categories.You can access information about countries and compare different data from around the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "backend",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image:countries,
    source_code_link: "https://64677c0ba1ba7417254fef4b--ornate-gingersnap-ec6a5b.netlify.app/",
  },
  {
    name: "Food-Order",
    description:
      "Food App is a mobile app that makes it easy for you to discover, order and experience delicious food. This user-friendly app offers a variety of restaurants, menus and dining options so you can have a delicious dining experience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },     
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image:delicious,
    source_code_link: "https://wonderful-dasik-573cfa.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
