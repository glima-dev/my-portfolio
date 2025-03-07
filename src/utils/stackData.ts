import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import {
  SiPostgresql,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiSass,
} from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "Sass",
    img: SiSass,
  },
  {
    title: "JS",
    img: FaJs,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "Node JS",
    img: FaNode,
  },
  {
    title: "React",
    img: FaReact,
  },
  {
    title: "React Native",
    img: TbBrandReactNative,
  },
  { title: "Next.js", img: TbBrandNextjs },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "MySQL", img: SiMysql },
  { title: "Git", img: FaGit },
  { title: "Python", img: FaPython },
  /* { title: "MongoDB", img: SiMongodb }, */
  /* { title: "Docker", img: FaDocker }, */
];
