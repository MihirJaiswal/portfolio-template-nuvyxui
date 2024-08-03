import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube
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
        url: "https://www.youtube.com/channel/UCANl98VUjfCZW7P2Tac1c6Q",
        label: "Youtube Channel",
        type: "youtube",
        icon: <FaYoutube />
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
