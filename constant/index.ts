import monsterpediaImage from '../public/projects/details/monsterpedia.webp';
import herohqImage from '../public/projects/details/herohq.webp';
import inkscrollImage from '../public/projects/details/inkscroll.webp';
import portfolioImage from '../public/projects/details/portfolio.webp';
import ghibliVerseImage from '../public/projects/details/ghibliverse.webp';
import cybersphereImage from '../public/projects/details/cybersphere.webp';
import gdscImage from '../public/projects/details/gdsc.webp';
import toyImage from '../public/projects/details/toy.webp';
import citronicsImage from '../public/projects/details/citronics.webp';
import certificategeneratorImage from '../public/projects/details/certificategenerator.webp';
import dreammistImage from '../public/projects/details/dreammist.webp';
import cosmicImage from '../public/projects/details/cosmic.webp';

//career
import cdgiLogo from '/public/education/cdgi.webp';
import kkLogo from '/public/education/kk.webp';
import sjsLogo from '/public/education/sjs.webp';
import freelanceLogo from '/public/work/freelance.webp';
import hotwaxLogo from '/public/work/hotwax.webp';

// highlights
export const HIGHLIGHTS = [
  {
    title: "Hero-Headquater",
    href: "https://hero-hq-five.vercel.app/",
    isNew: true,
  },
  {
    title: "Ghibli Verse",
    href: "https://ghibli-verse.vercel.app/",
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

//projects
export const projectsList = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
    title: "Windows-95 Portfolio",
    description: "A portfolio website in windows 95 theme.",
    logo: "/projects/portfolio.webp",
    link: "https://mihirjaiswalportfolio-wmtn.vercel.app/",
    github: "https://github.com/MihirJaiswal/windows-95-theme-portfolio",
    technologies: ["HTML", "CSS", "JavaScript"],
    alertDescription: "A portfolio website in windows 95 theme, This project is a nostalgic journey back to the era of Windows 95, with a modern twist. Explore my work, play games, view my drawings, and much more!, also there is an easter egg in the website if you find it do let me know.",
    alertImage: portfolioImage,
  },
  {
    id: 4,
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
    id: 5,
    title: "CyberSphere",
    description: "CyberSphere is a browser extension and website designed to detect phishing attacks.",
    logo: "/projects/cybersphere.webp",
    link: "https://cyber-sphere-minor-project.vercel.app/",
    github: "https://github.com/MihirJaiswal/CyberSphere-Minor-Project",
    technologies: ["React", "Tailwind", "M.L."],
    alertDescription: "CyberSphere is a browser extension and website designed to detect phishing attacks using machine learning techniques. The machine learning model is trained using XGBoost, Random Forest, Decision Tree, and SVM algorithms.The machine learning models are trained on a dataset consisting of over 30,000 samples.It provides Browser extension for real-time phishing detection while browsing.",
    alertImage: cybersphereImage,
  },
  {
    id: 10,
    title: "Certificate Generator",
    description: "A certificate generator where you can generate and customize certificates for free.",
    logo: "/projects/certi.webp",
    link: "https://certificate-generator-rust.vercel.app/",
    github: "https://github.com/MihirJaiswal/certificate-generator",
    technologies: ["React", "SCSS", "Material-UI"],
    alertDescription: "From customizable templates to automated name insertion, our tool makes certificate generation simple and efficient, perfect for events, and more.",
    alertImage: certificategeneratorImage,
  },
  {
    id: 6,
    title: "GDSC CDGI Website",
    description: "The official website of GDSC CDGI.",
    logo: "/projects/gdsc.svg",
    github: "https://github.com/MihirJaiswal/gdscwebsite",
    technologies: ["Next.js", "Tailwind", "TypeScript"],
    alertDescription: "The official website of GDSC CDGI. The website is made using Next.js, Tailwind, and TypeScript. The website is designed and developed by Mihir Jaiswal.",
    alertImage: gdscImage,
  },
  {
    id: 7,
    title: "Toy Sandook",
    description: "Toy Sandook is a website that I made for a client.",
    logo: "/projects/toy.webp",
    github: "https://github.com/MihirJaiswal/toyshopweb",
    technologies: ["Next.js", "MongoDB", "Express"],
    alertDescription: "Toy Sandook is a website that I made for a client. The website is made using Next.js, MongoDB, and Express. The website is designed and developed by Mihir Jaiswal.",
    alertImage: toyImage,
  },
  {
    id: 9,
    title: "Citronics Website",
    description: "Citronics is an annual techno-management fest of CDGI, Indore.",
    logo: "/projects/citro.webp",
    link: "https://mihirjaiswal.github.io/Citronics-website2024/",
    github: "https://github.com/MihirJaiswal/Citronics-website2024",
    technologies: ["HTML", "Tailwind", "JavaScript"],
    alertDescription: "Citronics is an annual techno-management fest of CDGI, Indore. The website is made using HTML, Tailwind, and JavaScript. The website is designed and developed by Mihir Jaiswal.",
    alertImage: citronicsImage,
  },
  
  {
    id: 11,
    title: "Dream Mist",
    description: "Dream Mist is a Pokémon game made using HTML canvas.",
    logo: "/projects/dreammist.jpg",
    link: "https://mihirjaiswal.github.io/DreamMist/",
    github: "https://github.com/MihirJaiswal/DreamMist",
    technologies: ["HTML","JavaScript", "CSS"],
    alertDescription: "Dream Mist is an immersive Pokémon game built using HTML canvas, offering players a rich and dynamic experience.Explore vibrant towns and cities filled with shops, and hidden secrets. Dream Mist provides a captivating adventure filled with visual flair and interactive gameplay.",
    alertImage: dreammistImage,
  },
  {
    id: 12,
    title: "Cosmic Onslaught",
    description: "Cosmic Onslaught is a classic space invader game brought to life with HTML, CSS, and JavaScript.",
    logo: "/projects/cosmic.webp",
    link: "https://mihirjaiswal.github.io/Cosmic-Onslaught/",
    github: "https://github.com/MihirJaiswal/Cosmic-Onslaught",
    technologies: ["HTML","JavaScript", "CSS"],
    alertDescription: "Cosmic Onslaught is a classic space invader game brought to life with HTML, CSS, and JavaScript. Get ready to defend Earth from an intergalactic invasion!",
    alertImage: cosmicImage,
  },
];

//skills
export const skills = [
  {
    name: "Next.js",
    description: "Web development",
    link: "https://nextjs.org/", 
    type: "development",
    image: '/skills/nextjs.png'
  },
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: '/skills/react.png'
  },
  {
    name: "Tailwind",
    description: "Web development",
    link: "https://tailwindcss.com/",
    type: "design",
    image: '/skills/tailwind.svg'
  },
  {
    name: "Sass",
    description: "Web development, styling",
    link: "https://sass-lang.com/",
    type: "design",
    image: '/skills/sass.svg'
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: '/skills/javascript.png'
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: '/skills/typescript.png'
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: '/skills/html-5.png'
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: '/skills/css3.png'
  },
  {
    name: "MongoDB",
    description: "Database",
    link: "https://www.mongodb.com/",
    type: "database",
    image: '/skills/mongodb.svg'
  },
  {
    name: "Mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: '/skills/mysql.png'
  },
  {
    name: "Vercel",
    description: "Deployment platform",
    link: "https://vercel.com/",
    type: "devops",
    image: '/skills/vercel.png'
  },
  {
    name: "AWS",
    description: "Cloud computing",
    link: "https://aws.amazon.com/",
    type: "devops",
    image: '/skills/aws.png'
  },
  {
    name: "Express",
    description: "Web application framework",
    link: "https://expressjs.com/",
    type: "development",
    image: '/skills/express.png'
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "",
    image: '/skills/vscode.png'
  },
  {
    name: "Canva",
    description: "Designing and editing",
    link: "https://www.canva.com/",
    type: "design",
    image: '/skills/canva.svg'
  },
  {
    name: "Figma",
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
    title: "Frontend Intern",
    role: "Hotwax Commerce",
    skills: ["Vue.js", "Moqui"],
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
];

//questions
export const PREDEFINED_QA = [
  { question: "What is your name?", answer: "My name is Mihir." },
  { question: "What do you do?", answer: "I'm a Full Stack Developer and UI/UX Designer." },
  { question: "What are your hobbies?", answer: "I enjoy playing video games, drawing, cooking, and reading." },
  { question: "Where are you from?", answer: "I'm from India." },
  { question: "How old are you?", answer: "I'm in my early 20s." },
  { question: "What is your favorite color?", answer: "My favorite color is blue." },
  { question: "What is your favorite food?", answer: "I love pizza." },
  { question: "Do you like to travel?", answer: "Yes, I enjoy traveling to new places." },
  { question: "What is your favorite movie?", answer: "My favorite movie is 'Inception'." },
  { question: "What kind of music do you like?", answer: "I enjoy listening to a variety of music genres." },
  { question: "Do you play any musical instruments?", answer: "No, I don't play any musical instruments." },
  { question: "What languages do you speak?", answer: "I speak English and Hindi." },
  { question: "Do you have any pets?", answer: "No, I don't have any pets." },
  { question: "What is your favorite book?", answer: "My favorite book is 'To Kill a Mockingbird'." },
  { question: "What sports do you like?", answer: "I enjoy watching boxing and cricket sometimes." },
  { question: "Do you work out?", answer: "Yes, I try to stay active." },
  { question: "What is your favorite season?", answer: "My favorite season is winter." },
  { question: "Do you like coffee or tea?", answer: "I prefer coffee." },
  { question: "Are you a morning person or a night owl?", answer: "I'm more of a night owl." },
  { question: "What is your dream job?", answer: "My dream job is to be a tech entrepreneur." },
  { question: "Do you have any siblings?", answer: "Yes, I have siblings." },
  { question: "What is your favorite holiday?", answer: "My favorite holiday is Diwali." },
  { question: "What is your favorite TV show?", answer: "I enjoy watching 'Stranger Things'." },
  { question: "Do you prefer cats or dogs?", answer: "I like cats." },
  { question: "What is your favorite ice cream flavor?", answer: "I love chocolate ice cream." },
  { question: "What is your favorite place to visit?", answer: "I enjoy visiting the mountains." },
  { question: "Do you like to cook?", answer: "Yes, I enjoy cooking." },
  { question: "What is your favorite dessert?", answer: "My favorite dessert is cheesecake." },
  { question: "Do you play any sports?", answer: "I play badminton occasionally." },
  { question: "What is your favorite video game?", answer: "I enjoy playing 'The Legend of Zelda' series." },
  { question: "Do you like art?", answer: "Yes, I love art and drawing." },
  { question: "Do you prefer movies or TV shows?", answer: "I like both, but I usually watch more TV shows." },
  { question: "What is your favorite kind of weather?", answer: "I like cool, breezy weather." },
  { question: "What is your favorite subject in school?", answer: "I enjoyed studying computer science." },
  { question: "Do you like to read?", answer: "Yes, I enjoy reading." },
  { question: "What is your favorite animal?", answer: "My favorite animal is the dolphin." },
  { question: "Do you like to dance?", answer: "I'm not much of a dancer." },
  { question: "Do you like to sing?", answer: "I enjoy singing occasionally, but I'm not very good at it." },
  { question: "What is your favorite drink?", answer: "My favorite drink is coffee." },
  { question: "What is your favorite time of day?", answer: "I enjoy the evening." },
  { question: "Do you prefer sweet or savory foods?", answer: "I prefer savory foods." },
  { question: "Do you like to go to the beach?", answer: "Yes, I love going to the beach." },
  { question: "What is your favorite kind of movie?", answer: "I enjoy sci-fi and action movies." },
  { question: "Do you like to garden?", answer: "I don't garden, but I appreciate plants." },
  { question: "Do you like to write?", answer: "Yes, I enjoy writing stories." },
  { question: "What is your favorite type of exercise?", answer: "I enjoy going for a run." },
  { question: "Do you like to paint?", answer: "Yes, I enjoy painting." },
  { question: "Do you have any allergies?", answer: "No, I don't have any allergies." },
  { question: "What is your favorite fruit?", answer: "My favorite fruit is mango." },
  { question: "Do you like to swim?", answer: "Yes, I enjoy swimming." },
  { question: "What is your favorite type of cuisine?", answer: "I love Italian cuisine." },
  { question: "Do you like to do puzzles?", answer: "Yes, I enjoy solving puzzles." },
  { question: "Do you like to watch sports?", answer: "Yes, I like watching football." },
  { question: "What is your favorite candy?", answer: "I love chocolate bars." },
  { question: "Do you like to go camping?", answer: "Yes, I enjoy camping." },
  { question: "What is your favorite holiday destination?", answer: "I love visiting the mountains." },
  { question: "Do you like to bake?", answer: "Yes, I enjoy baking." },
  { question: "Do you like board games?", answer: "Yes, I enjoy playing board games." },
  { question: "What is your favorite hobby?", answer: "I enjoy drawing and coding." },
  { question: "Do you like museums?", answer: "Yes, I enjoy visiting museums." },
  { question: "Do you like roller coasters?", answer: "Yes, I enjoy roller coasters." },
  { question: "What is your favorite ice cream topping?", answer: "I like chocolate chips as a topping." },
  { question: "Do you like scary movies?", answer: "Yes, I enjoy a good horror movie now and then." },
  { question: "What is your favorite vegetable?", answer: "My favorite vegetable is spinach." },
  { question: "Do you like the city or countryside?", answer: "I enjoy the peace of the countryside." },
  { question: "What is your favorite sandwich?", answer: "I love a classic grilled cheese sandwich." },
  { question: "Do you like to shop?", answer: "Yes, I enjoy shopping occasionally." },
  { question: "Do you prefer chocolate or vanilla?", answer: "I prefer chocolate." },
  { question: "Do you like rain or sunshine?", answer: "I like sunshine, but I also enjoy the rain." },
  { question: "What is your favorite quote?", answer: "My favorite quote is 'The only limit to our realization of tomorrow is our doubts of today.'" },
  { question: "Do you like to do yoga?", answer: "Yes, I enjoy doing yoga." },
  { question: "Do you like to play cards?", answer: "Yes, I enjoy playing cards." },
  { question: "What is your favorite flower?", answer: "My favorite flower is the rose." },
  { question: "Do you like to hike?", answer: "Yes, I enjoy hiking." },
  { question: "Do you like to go to concerts?", answer: "Yes, I enjoy live music." },
  { question: "What is your favorite snack?", answer: "I like popcorn as a snack." },
  { question: "Do you like to go to the gym?", answer: "Yes, I try to stay active." },
  { question: "Do you like to eat out?", answer: "Yes, I enjoy trying new restaurants." },
  { question: "What is your favorite drink?", answer: "My favorite drink is coffee." },
  { question: "Do you like to play video games?", answer: "Yes, I love playing video games." },
  { question: "What is your favorite TV channel?", answer: "I usually watch Netflix or streaming services." },
  { question: "Do you like to do crafts?", answer: "Yes, I enjoy doing DIY crafts." },
  { question: "What is your favorite park?", answer: "I enjoy visiting national parks." },
  { question: "Do you like to read magazines?", answer: "Yes, I occasionally read magazines." },
  { question: "What is your favorite season?", answer: "I enjoy the winter season." },
  { question: "Do you like to play chess?", answer: "Yes, I enjoy playing chess." },
  { question: "What is your favorite fast food?", answer: "I love burgers." },
  { question: "Do you like to watch cartoons?", answer: "Yes, I still enjoy watching cartoons." },
  { question: "Do you like to fish?", answer: "Yes, I enjoy fishing." },
  { question: "What is your favorite place to relax?", answer: "I enjoy relaxing at the beach." },
  { question: "Do you like to go to the zoo?", answer: "Yes, I enjoy visiting the zoo." },
  { question: "Do you like spicy food?", answer: "Yes, I enjoy spicy food." },
  { question: "Do you like to ride bikes?", answer: "Yes, I enjoy biking." },
  { question: "What is your favorite vacation spot?", answer: "I love visiting the mountains." },
  { question: "Do you like to go to the movies?", answer: "Yes, I enjoy going to the movies." },
  { question: "Do you like to eat breakfast?", answer: "Yes, breakfast is my favorite meal of the day." },
  
];

