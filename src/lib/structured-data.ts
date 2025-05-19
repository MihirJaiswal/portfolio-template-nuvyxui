// This file contains structured data for Mihir Jaiswal's portfolio website
const personData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mihir Jaiswal",
  "givenName": "Mihir",
  "familyName": "Jaiswal",
  "jobTitle": "Software Engineer & Web Developer",
  "description": "Web developer and designer specializing in React, Next.js, and modern JavaScript applications",
  "image": "https://mihirjaiswal.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmihir.be21bcc9.webp&w=3840&q=100",
  "url": "https://mihirjaiswal.vercel.app/",
  "sameAs": [
    "https://github.com/MihirJaiswal", 
    "https://www.linkedin.com/in/mihir-jaiswal-322898287/",
    "https://twitter.com/mihirja73370412",
    "https://www.instagram.com/mihir_jaiswal_/"
  ],
  "knowsAbout": [
    "Web Development",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "UI/UX Design",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Software Engineering",
    "Agile Methodologies",
    "Version Control",
    "Git",
    "Responsive Design",
    "Cross-Browser Compatibility",
    "RESTful APIs",
    "GraphQL",
    "Database Management",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "HTML",
    "CSS",
    "Sass",
    "Tailwind CSS",
    "Bootstrap",
    "Material-UI",
    "Figma",
    "Adobe XD",
    "Web Accessibility",
    "Performance Optimization",
    "SEO",
    "Testing and Debugging",
    "Continuous Integration",
    "Continuous Delivery"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Indore",
    "addressRegion": "Madhya Pradesh",
    "addressCountry": "India"
  }
};

const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://mihirjaiswal.vercel.app/#website",
  "url": "https://mihirjaiswal.vercel.app/",
  "name": "Mihir Jaiswal | Web Developer & Designer",
  "description": "Portfolio website of Mihir Jaiswal, a web developer and designer from Indore, India",
  "publisher": {
    "@id": "https://mihirjaiswal.vercel.app/"
  }
};

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mihirjaiswal.vercel.app/",
  "name": "Web Development Services",
  "description": "Professional web development services including frontend development, UI/UX design, and full-stack JavaScript applications",
  "provider": {
    "@id": "https://mihirjaiswal.vercel.app/"
  },
  "serviceType": ["Web Development", "UI/UX Design", "Application Development", "Software Engineering", "Frontend Development", "Backend Development", "Full Stack Development"],
  "areaServed": {
    "@type": "Country",
    "name": "Worldwide"
  }
};

export const structuredData = [personData, websiteData, serviceData];