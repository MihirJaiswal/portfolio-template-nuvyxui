import monsterpediaImage from '../public/projects/details/monsterpedia.webp';
import herohqImage from '../public/projects/details/herohq.webp';
import inkscrollImage from '../public/projects/details/inkscroll.webp';
import ghibliVerseImage from '../public/projects/details/ghibliverse.webp';
import certificategeneratorImage from '../public/projects/details/certificategenerator.webp';
import storyweaverImage from '../public/projects/details/storyweaverAI.webp';
import digibazaarImage from '../public/projects/details/digibazaar.webp';
import nuvyxImage from '../public/projects/details/nuvyx.webp';
//career
import cdgiLogo from '/public/education/cdgi.webp';
import kkLogo from '/public/education/kk.webp';
import sjsLogo from '/public/education/sjs.webp';
import freelanceLogo from '/public/work/freelance.webp';
import hotwaxLogo from '/public/work/hotwax.webp';

//site data
export const DATA = {
  name: "Mihir Jaiswal",
  description: "This is my portfolio, where I showcase my projects and share the skills I've mastered along the way. 🚀",
  url: "https://mihirjaiswal.vercel.app/",
  email: "youremail@gmail.com",
  author: "Mihir Jaiswal",
  accounts: [
    {
      url: "https://github.com/MihirJaiswal",
      label: "Github",
      type: "gray",
    }
  ]
};

//hero data
export const HERO_DATA = {
  greeting: "Hey!",
  name: "Mihir",
  role1: "Full Stack Developer",
  role2: "an UI/UX designer",
  location: "India",
  description: "This is my portfolio, where I showcase my projects and share the skills I've mastered along the way. 🚀"
};

// highlights
export const HIGHLIGHTS = [
  {
    title: "Nyx ui",
    href: "https://nuvyxui.vercel.app/",
    isNew: true,
  },
  {
    title: "HeroHQ",
    href: "https://hero-hq-five.vercel.app/",
  },
  {
    title: "MonsterPedia",
    href: "https://monsterpedia-orcin.vercel.app/",
  },
  {
    title: "Windows 95 theme portfolio",
    href: "https://mihirjaiswalportfolio-wmtn.vercel.app/",
  },
];


//ABOUT SECTION

//github username
export const GITHUB_USERNAME = "MihirJaiswal";


//marquee data
export const reviews = [
  {
    body: "you make awesome UI 🙌",
  },
  {
    body: "Amazing frontend",
  },
  {
    body: "Love your work!!! 🤗",
  },
  {
    body: "UI is amazing 👌",
  },
  {
    body: "keep up the awesome work!",
  },
  {
    body: "👏👏👏",
  },
];

//intro data
export const INTRO_DATA = {
  title: "About Me",
  paragraphs: [
    "Since I was young, I've loved computers. I've also been pretty creative, spending my free time drawing and painting.",
    "Beyond software development, I enjoy playing video games, drawing, cooking, and listening to music. I also love to read books, write stories and meeting new people.✨"
  ]
};

//grid data
export const GRID_DATA = {
  title: "I have my own",
  link: "https://nuvyxui.vercel.app/",
  linkText: "UI library",
  image: "/assests/code.webp",
};


//projects
export const projectsList = [
  {
    id: 9,
    title: "Nyx UI",
    description: "A modern UI component library for React.",
    logo: "/projects/nuvyx.webp",
    link: "https://nyxui.vercel.app/",
    github: "https://github.com/MihirJaiswal/nyxui",
    technologies: ["React", "Tailwind", "TypeScript", "Framer Motion"],
    alertDescription: "Nyx UI is a curated library of modular components that can be easily integrated into your web applications. It offers a versatile selection of components, blocks, and templates designed to accelerate your development process.",
    alertImage: nuvyxImage,
    youtube: 'https://www.youtube.com/watch?v=E3R_lVYSuk8&ab_channel=MihirJaiswal',
  },
  {
    id: 8,
    title: "Digi Bazaar",
    description: "The Ultimate eCommerce & Warehouse Management Solution.",
    logo: "/projects/digi.webp",
    github: "https://github.com/MihirJaiswal/digibazaar-frontend",
    technologies: ["Next.js", "Tailwind", "TypeScript", "Node.js", "MySQL", "Express"],
    alertDescription: "DigiBazaar is a revolutionary platform that merges eCommerce, Warehouse Management, Wholesale, and Community into a single powerful ecosystem. DigiBazaar transcends traditional eCommerce platforms by offering a full-featured business ecosystem.",
    alertImage: digibazaarImage,
    youtube: 'https://www.youtube.com/watch?v=KVnkONXLbXg&list=LL',
  },
  {
    id: 7,
    title: "StoryWeaver AI",
    description: "A web application that generates story scenes, dialogs, and images based on user input plot.",
    logo: "/projects/story.webp",
    link: "https://story-weaver-ai.vercel.app/",
    github: "https://github.com/MihirJaiswal/StoryWeaver-AI",
    technologies: ["Next.js", "Tailwind", "TypeScript"],
    alertDescription: "StoryWeaver AI is a web application that generates story scenes, dialogs, and images based on user input plot. The project uses Qwen/QwQ-32B-Preview model for generating story scenes and dialogs, and OpenAI's DALL-E for generating images. The application is built using Next.js, Tailwind CSS, and Framer Motion to deliver an engaging and visually appealing user experience.",
    alertImage: storyweaverImage,
    youtube: 'https://youtu.be/zoQiy0SFk-o',
  },
  {
    id: 5,
    title: "Monster Pedia",
    description: "Website containing a pokedex, a type calculator, a team builder, and a card generator.",
    logo: "/projects/monsterpedia.webp",
    link: "https://monsterpedia-orcin.vercel.app/",
    github: "https://github.com/MihirJaiswal/monsterpedia",
    technologies: ["Next.js", "Tailwind", "TypeScript"],
    alertDescription: "Monster Pedia is an interactive web application designed for Pokémon fans. It includes a comprehensive Pokédex, a type weakness calculator, a team builder, and a Pokémon card maker. The project is built using Next.js, Tailwind CSS, and Framer Motion to deliver an engaging and visually appealing user experience.",
    alertImage: monsterpediaImage,
    youtube: 'https://www.youtube.com/watch?v=hi3fNjSSy4c&t=38s',
  },
  {
    id: 4,
    title: "HERO-HQ",
    description: "Web application where users can explore details about various superheroes and compare.",
    logo: "/projects/herohq.webp",
    link: "https://hero-hq-five.vercel.app/",
    github: "https://github.com/MihirJaiswal/hero-hq",
    technologies: ["Next.js", "Tailwind", "TypeScript"],
    alertDescription: 'Hero HQ is a dynamic web application where users can explore details about various superheroes and compare them side by side. The comparison feature includes visual graphs of power stats, height, and a win probability indicator to help users determine the likely winner in a hypothetical match-up.',
    alertImage: herohqImage,
    youtube: 'https://www.youtube.com/watch?v=w3m6HlIUoLw&t=46s',
  },
  {
    id: 3,
    title: "Ink Scroll",
    description: "Manga Hosting website where users can upload and read mangas.",
    logo: "/projects/inkscroll.webp",
    github: "https://github.com/MihirJaiswal/InkScroll",
    technologies: ["Next.js", "Node.js", "TypeScript"],
    alertDescription: "Inkscroll is a versatile platform designed for manga enthusiasts to host and read manga. Users can easily upload their manga creations and share them with a broader audience, as well as explore and read manga uploaded by others. The website is built using Next.js and Node.js, ensuring a fast, seamless, and dynamic user experience.",
    alertImage: inkscrollImage,
    youtube: 'https://www.youtube.com/watch?v=uP-OGbNdiZI&t=3s',
  },
  {
    id: 2,
    title: "Ghibli Verse",
    description: "A comprehensive web application dedicated to exploring the enchanting world of Studio Ghibli.",
    logo: "/projects/ghibli.webp",
    link: "https://ghibli-verse.vercel.app/",
    github: "https://github.com/MihirJaiswal/ghibli-verse",
    technologies: ["Next.js", "Tailwind", "TypeScript"],
    alertDescription: "Ghibli Verse is a comprehensive web application dedicated to exploring the enchanting world of Studio Ghibli. This project provides detailed information about characters, movies, and locations from the beloved Studio Ghibli films. Used Studio Ghibli API for fetching the information about the characters, movies and locations.",
    alertImage: ghibliVerseImage,
    youtube: 'https://www.youtube.com/watch?v=QrFH8RzUTiw&list=LL&index=3',
  },
  {
    id: 1,
    title: "Certificate Generator",
    description: "A certificate generator where you can generate and customize certificates for free.",
    logo: "/projects/certi.webp",
    link: "https://certificate-generator-rust.vercel.app/",
    github: "https://github.com/MihirJaiswal/certificate-generator",
    technologies: ["React", "SCSS", "Material-UI"],
    alertDescription: "From customizable templates to automated name insertion, our tool makes certificate generation simple and efficient, perfect for events, and more.",
    alertImage: certificategeneratorImage,
  }
];

//skills
export const skills = [
  {
    name: "Next.js",
    slug: "nextdotjs",
    description: "Web development",
    link: "https://nextjs.org/", 
    type: "development",
    image: '/skills/nextjs.png'
  },
  {
    name: "React",
    slug: "react",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: '/skills/react.png'
  },
  {
    name: "Tailwind",
    slug: "tailwindcss",
    description: "Web development",
    link: "https://tailwindcss.com/",
    type: "design",
    image: '/skills/tailwind.svg'
  },
  {
    name: "Sass",
    slug: "sass",
    description: "Web development, styling",
    link: "https://sass-lang.com/",
    type: "design",
    image: '/skills/sass.svg'
  },
  {
    name: "Javascript",
    slug: "javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: '/skills/javascript.png'
  },
  {
    name: "Typescript",
    slug: "typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: '/skills/typescript.png'
  },
  {
    name: "Html5",
    slug: "html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: '/skills/html-5.png'
  },
  {
    name: "Css3",
    slug: "css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: '/skills/css3.png'
  },
  {
    name: "MongoDB",
    slug: "mongodb",
    description: "Database",
    link: "https://www.mongodb.com/",
    type: "database",
    image: '/skills/mongodb.svg'
  },
  {
    name: "Mysql",
    slug: "mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: '/skills/mysql.png'
  },
  {
    name: "Vercel",
    slug: "vercel",
    description: "Deployment platform",
    link: "https://vercel.com/",
    type: "devops",
    image: '/skills/vercel.png'
  },
  {
    name: "AWS",
    slug: "amazonaws",
    description: "Cloud computing",
    link: "https://aws.amazon.com/",
    type: "devops",
    image: '/skills/aws.png'
  },
  {
    name: "Express",
    slug: "express",
    description: "Web application framework",
    link: "https://expressjs.com/",
    type: "development",
    image: '/skills/express.png'
  },
  {
    name: "Visual Studio Code",
    slug: "visualstudiocode",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "tools",
    image: '/skills/vscode.png'
  },
  {
    name: "Canva",
    slug: "canva",
    description: "Designing and editing",
    link: "https://www.canva.com/",
    type: "design",
    image: '/skills/canva.svg'
  },
  {
    name: "Figma",
    slug: "figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: '/skills/figma.png'
  }
];

//career
export const educationData = [
  {
    title: "Chameli Devi Group of Institutions",
    role: "B.Tech in AI and DS",
    skills: [],
    period: "2021-2025",
    logo: cdgiLogo,
  },
  {
    title: "K.K. Convent Hr. Sec. School",
    role: "",
    skills: ["Physics", "Chemistry", "Maths"],
    period: "2018-2020",
    logo: kkLogo,
  },
  {
    title: "St Jude's Higher Secondary School",
    role: "",
    skills: [],
    period: "2005-2017",
    logo: sjsLogo,
  },
];

export const workExperienceData = [
  {
    title: "Freelancer",
    role: "Web developer",
    skills: ["Next.js", "React", "Node.js"],
    period: "2023-2024",
    logo: freelanceLogo,
  },
  {
    title: "Software Developer Intern",
    role: "HotWax Systems",
    skills: ["Vue.js", "Moqui", "MySQL"],
    period: "2025-Present",
    logo: hotwaxLogo,
  },
];

//contact 
export const data = [
  {
    category: "",
    title: "",
    src: "/contact/hero.webp",
  },
  {
    category: "",
    title: "",
    src: "/contact/ghibli.webp",
  },
  {
    category: "",
    title: "",
    src: "/contact/cybersphere.webp",
  },
  {
    category: "",
    title: "",
    src: "/contact/certigen.webp",
  },
  {
    category: "",
    title: "",
    src: "/contact/gdsc.webp",
  },
  
  {
    category: "",
    title: "",
    src: "/contact/monsterpedia.webp",
  },
  {
    category: "",
    title: "",
    src: "/contact/riya.webp",
  },
  {
    category: "",
    title: "",
    src: "/contact/citronics.webp",
  },
  {
    category: "",
    title: "",
    src: "/contact/dreammist.webp",
  },
  {
    category: "",
    title: "",
    src: "/contact/equi.webp",
  },
  {
    category: "",
    title: "",
    src: "/contact/inkscroll.webp",
  },
  {
    category: "",
    title: "",
    src: "/contact/story.webp",
  },
];

//contact form data 
export const CONTACT_FORM_DATA = {
  action: "https://formsubmit.co/" + DATA.email,
  email: DATA.email,
};
