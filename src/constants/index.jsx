import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  // FaFacebook,
  // FaDiscord,
  // FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
// import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
// import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  // { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React, Node, MongoDb, Tailwind, postgreSql, Prisma ORM, Firebase, TypeScript,  Javascript, Redux, ejs, html, css, Express, GIT, GITHUB, Nginx, AWS , figma ,";

export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A full-featured e-commerce website with razorpay payment integration built with Node.js.",
    imgSrc: project1,
    link: "https://better-buys-e-commerse-2.onrender.com/",
  },
  {
    id: 2,
    title: "Voucher management Application",
    description: "Seamlessly generate, manage, and distribute vouchers with customizable sizes and easy download/print options.",
    imgSrc: project2,
    link: "http://faslurahman.online/login",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    imgSrc: project3,
    link: "https://portfolio-eta-bice-88.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Blog Platform",
  //   description:
  //     "A blogging platform with user authentication and content management.",
  //   imgSrc: project4,
  //   link: "https://example.com/blog-platform",
  // },
  {
    id: 7,
    title: "Netflix clone",
    description: "clone of netflix website with TMDB api and axios.",
    imgSrc: project7,
    link: "https://netflix-clone-3xippnz3q-sahla-thasnims-projects.vercel.app/",
  },
  {
    id: 5,
    title: "User flow",
    description: "A user management tool to organize with admin panel with MERN technologies.",
    imgSrc: project5,
    link: "https://github.com/SahlaThasnim89/user-flow",
  },
  {
    id: 6,
    title: "Review blog app",
    description:
      "An simple react application here you can get the review by users.",
    imgSrc: project6,
    link: "https://github.com/SahlaThasnim89/review-blog-App",
  },
  {
    id: 8,
    title: "Weather Dashboard",
    description:
      "A weather dashboard providing current weather data and forecasts.",
    imgSrc: project8,
    link: "https://github.com/SahlaThasnim89/weather-app",
  },
  // {
  //   id: 9,
  //   title: "Voucher management Application",
  //   description: "Seamlessly generate, manage, and distribute vouchers with customizable sizes and easy download/print options.",
  //   imgSrc: project9,
  //   link: "http://faslurahman.online/login",
  // },
];

export const ABOUT =
  "As a dedicated Full Stack Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like MongoDB and PostgreSQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";

export const EXPERIENCES = [
  {
    company: "Google",
    role: "Software Engineer",
    year: "12/2023 - Present",
    description:
      "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
  },
  {
    company: "Facebook",
    role: "Frontend Developer",
    year: "01/2021 - 11/2023",
    description:
      "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://x.com/",
  //   icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  // },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "sahlathasnim2002@gmail.com",
  phone: "+(221 - 7654567892)",
};
