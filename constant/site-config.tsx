import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Mihir Jaiswal. All Rights Reserved.`,
  author: {
    name: "Mihir Jaiswal",
    accounts: [
      {
        url: "https://github.com/MihirJaiswal/MihirJaiswal",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/mihirja73370412",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://www.linkedin.com/in/mihir-jaiswal-322898287/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "https://www.instagram.com/monty_draws_/",
        label: "Instagram Account",
        type: "purple",
        icon: <FaInstagram />
      },
      {
        url: "mailto:jaiswalmihir.business@gmail.com",
        label: "Mail Mihir",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
