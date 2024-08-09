import { FaGithub, FaTimes, FaYoutube, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiSass } from "react-icons/si";
import Image, { StaticImageData } from "next/image";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel } from "../components/ui/alert-dialog";
import UnderlinedText from "./UnderlineText";
import { MotionDiv } from "./MotiionDiv";

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string;
  alertImage?: StaticImageData;
  alertDescription?: string;
  blurHash?: string;
  link?: string;
  github: string;
  technologies: string[];
  youtube?: string;
}

const getTagIcon = (tech: string) => {
  switch (tech) {
    case "React":
      return <FaReact className="text-blue-600" />;
    case "Next.js":
      return <SiNextdotjs className="text-black dark:text-white" />;
    case "Tailwind":
      return <SiTailwindcss className="text-teal-500" />;
    case "Node.js":
      return <FaNodeJs className="text-green-700" />;
    case "Express":
      return <SiExpress className="text-gray-800 dark:text-white" />;
    case "MongoDB":
      return <SiMongodb className="text-green-600" />;
    case "HTML":
      return <FaHtml5 className="text-orange-500" />;
    case "CSS":
      return <FaCss3Alt className="text-blue-400" />;
    case "JavaScript":
      return <FaJsSquare className="text-yellow-500" />;
    case "TypeScript":
      return <SiTypescript className="text-blue-500" />;
    case "SCSS":
      return <SiSass className="text-pink-500" />;
    default:
      return null;
  }
};

const truncateText = (text:string, wordLimit:number): string => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, logo, alertImage, alertDescription, github, link, technologies, youtube }) => {
  const ORANGE = "#ff9400";
  return (
    <MotionDiv layout className="cursor-pointer w-full">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="flex items-center md:items-start p-4 bg-white dark:bg-[#1E2533] rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
            <Image src={logo} alt={`${title} logo`} width={40} height={40} className="w-8 h-8 rounded-md" quality={100} loading="lazy" />
            <div className="flex flex-col ml-4 w-full">
              <div className="flex justify-between w-full">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg">{title}</span>
                  <a href={github} target="_blank" rel="noopener noreferrer" className="hidden md:block">
                    <FaGithub className="text-gray-900 dark:text-gray-200" />
                  </a>
                </div>
                <div className="md:flex space-x-2 hidden">
                  {technologies.map((tech, index) => (
                    <div key={index} className="text-2xl">
                      {getTagIcon(tech)}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-200 md:hidden">{truncateText(description, 4)}</p>
              <p className="text-sm text-gray-500 dark:text-gray-200 mt-2 hidden md:block">{description}</p>
            </div>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-3xl p-6 bg-gray-50 dark:bg-gray-900 flex flex-col justify-center gap-8 md:max-w-lg mx-auto">
          <AlertDialogHeader className="relative">
            <div className="flex items-center gap-4">
              <AlertDialogTitle className="text-2xl font-bold mb-4 uppercase"> <UnderlinedText color={ORANGE}>{title}</UnderlinedText> </AlertDialogTitle>
              {youtube && (
                <a href={youtube} target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="w-8 h-8 text-red-600 mb-4" />
                </a>
              )}
            </div>
            <AlertDialogDescription className="text-gray-500 dark:text-gray-300">
              {alertImage && (
                <Image 
                src={alertImage} 
                alt={`${title} detailed`} 
                width={800} 
                height={400} 
                className="w-full h-auto max-h-64 object-contain rounded-lg mb-4" 
                loading="lazy"
                placeholder="blur"
                 />
              )}
              <p className="text-sm md:text-base text-gray-900 dark:text-gray-300 px-1 text-justify after:inline-block ">{alertDescription}</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="flex justify-between md:items-center w-full">
              <div className="flex gap-2">
                {technologies.map((tech, index) => (
                  <div key={index} className="text-2xl">
                    {getTagIcon(tech)}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="md:px-4 py-2 text-sm rounded-lg font-bold text-black dark:text-white underline decoration-double">
                    Live Demo
                  </a>
                )}
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl text-gray-800 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 transition" />
                </a>
              </div>
            </div>
          </AlertDialogFooter>
          <AlertDialogCancel asChild>
            <div className="absolute top-0 right-0">
              <FaTimes className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500" />
            </div>
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </MotionDiv>
  );
};

export default ProjectCard;
