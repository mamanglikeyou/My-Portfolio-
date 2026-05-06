import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill, BsRobot } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaNpm, FaGolang } from "react-icons/fa6";
import { FaJava, FaDatabase } from "react-icons/fa";
import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiGoogle,
  SiFlutter,
  SiDart,
  SiNuxtdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiRedis,
  SiDocker,
  SiPostman,
  SiStreamlit,
} from "react-icons/si";

export type SkillProps = {
  [key: string]: {
    icon: JSX.Element;
    background: string;
    color: string;
    isActive?: boolean;
  };
};

const iconSize = 26;

export const STACKS: SkillProps = {
  HTML: {
    icon: <SiHtml5 size={iconSize} />,
    background: "bg-orange-500",
    color: "text-orange-500",
    isActive: true,
  },
  CSS: {
    icon: <SiCss3 size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  TailwindCSS: {
    icon: <SiTailwindcss size={iconSize} />,
    background: "bg-teal-500",
    color: "text-teal-500",
    isActive: true,
  },
  JavaScript: {
    icon: <SiJavascript size={iconSize} />,
    background: "bg-yellow-400",
    color: "text-yellow-400",
    isActive: true,
  },
  TypeScript: {
    icon: <SiTypescript size={iconSize} />,
    background: "bg-blue-600",
    color: "text-blue-600",
    isActive: true,
  },
  "Nuxt.js": {
    icon: <SiNuxtdotjs size={iconSize} />,
    background: "bg-green-600",
    color: "text-green-600",
    isActive: true,
  },
  PHP: {
    icon: <SiPhp size={iconSize} />,
    background: "bg-indigo-400",
    color: "text-indigo-400",
    isActive: true,
  },
  Laravel: {
    icon: <SiLaravel size={iconSize} />,
    background: "bg-red-700",
    color: "text-red-700",
    isActive: true,
  },
  Blade: {
    icon: <SiLaravel size={iconSize} />,
    background: "bg-gray-800",
    color: "text-gray-200",
    isActive: true,
  },
  MySql: {
    icon: <SiMysql size={iconSize} />,
    background: "bg-cyan-700",
    color: "text-cyan-700",
    isActive: true,
  },
  PostgreSQL: {
    icon: <SiPostgresql size={iconSize} />,
    background: "bg-sky-600",
    color: "text-sky-600",
    isActive: true,
  },
  "SQL Server": {
    icon: <SiMicrosoftsqlserver size={iconSize} />,
    background: "bg-red-600",
    color: "text-red-600",
    isActive: true,
  },
  Redis: {
    icon: <SiRedis size={iconSize} />,
    background: "bg-red-500",
    color: "text-red-500",
    isActive: true,
  },
  Python: {
    icon: <SiPython size={iconSize} />,
    background: "bg-blue-400",
    color: "text-blue-400",
    isActive: true,
  },
  Pandas: {
    icon: <SiPython size={iconSize} />, // tidak ada icon khusus, pakai Python
    background: "bg-indigo-600",
    color: "text-indigo-600",
    isActive: true,
  },
  NumPy: {
    icon: <SiPython size={iconSize} />,
    background: "bg-blue-700",
    color: "text-blue-700",
    isActive: true,
  },
  "Scikit-learn": {
    icon: <SiPython size={iconSize} />,
    background: "bg-teal-600",
    color: "text-teal-600",
    isActive: true,
  },
  TensorFlow: {
    icon: <SiTensorflow size={iconSize} />,
    background: "bg-orange-600",
    color: "text-orange-600",
    isActive: true,
  },
  PyTorch: {
    icon: <SiPytorch size={iconSize} />,
    background: "bg-red-500",
    color: "text-red-500",
    isActive: true,
  },
  Matplotlib: {
    icon: <SiPython size={iconSize} />,
    background: "bg-blue-800",
    color: "text-blue-800",
    isActive: true,
  },
  Seaborn: {
    icon: <SiPython size={iconSize} />,
    background: "bg-cyan-600",
    color: "text-cyan-600",
    isActive: true,
  },
  LookerStudio: {
    icon: <SiGoogle size={iconSize} />, // pakai icon Google
    background: "bg-yellow-400",
    color: "text-yellow-400",
    isActive: true,
  },
  Streamlit: {
    icon: <SiStreamlit size={iconSize} />,
    background: "bg-red-400",
    color: "text-red-400",
    isActive: true,
  },
  ML: {
    icon: <BsRobot size={iconSize} />,
    background: "bg-fuchsia-700",
    color: "text-fuchsia-700",
    isActive: true,
  },
  Flutter: {
    icon: <SiFlutter size={iconSize} />,
    background: "bg-cyan-500",
    color: "text-cyan-500",
    isActive: true,
  },
  Dart: {
    icon: <SiDart size={iconSize} />,
    background: "bg-sky-600",
    color: "text-sky-600",
    isActive: true,
  },
  Github: {
    icon: <SiGithub size={iconSize} />,
    background: "bg-slate-800",
    color: "text-neutral-50",
    isActive: true,
  },
  Docker: {
    icon: <SiDocker size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  Postman: {
    icon: <SiPostman size={iconSize} />,
    background: "bg-orange-500",
    color: "text-orange-500",
    isActive: true,
  },
  DBeaver: {
    icon: <FaDatabase size={iconSize} />,
    background: "bg-amber-600",
    color: "text-amber-600",
    isActive: true,
  },
};
