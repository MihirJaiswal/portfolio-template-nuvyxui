import * as React from "react";
import siteConfig from "../../constant/site-config";
import Link from "next/link";

const getIconColorClass = (type: string) => {
  switch (type) {
    case "youtube":
      return "text-red-500"; // Example color for Twitter
    case "linkedin":
      return "text-blue-700"; // Example color for LinkedIn
    case "purple":
      return "text-purple-500"; // Example color for Quora
    default:
      return "text-gray-600"; // Default color for other icons
  }
};

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between p-4 max-w-4xl mx-auto w-full">
      <div className="text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Mihir Jaiswal
      </div>
      <div className="flex space-x-4 mt-4 sm:mt-0">
        {siteConfig.author.accounts.map((sc, index) => (
          <Link
            key={index}
            href={sc.url}
            aria-label={sc.label}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300 ${getIconColorClass(sc.type)}`}
          >
            {sc.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
