import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import GitHubContributionGraph from "./GitHubContributionGraph";
import Image from "next/image";
import { MarqueeCard } from "./Marquee";
import Link from "next/link";
import { GRID_DATA } from "../../../constant/index";

export function Grid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[12rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          component={item.component}
          formobile={item.formobile}
          padding={item.padding}
          image={item.image}
          lightBackgroundColor={item.lightBackgroundColor}
          darkBackgroundColor={item.darkBackgroundColor}
        />
      ))}
    </BentoGrid>
  );
}

const items: Array<{
  title?: string;
  description?: string;
  header?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  component?: React.ReactNode;
  formobile?: "yes" | "no";
  padding?: string;
  image?: string;
  lightBackgroundColor?: string;
  darkBackgroundColor?: string;
}> = [
  {
    className: "md:row-span-2",
    component: <div className="max-w-sm ">
    <a href={GRID_DATA.link}>
      <Image 
        className="rounded-t-lg" 
        src={GRID_DATA.image} 
        alt="Noteworthy technology acquisitions 2021" 
        width={400}
        height={300}
        layout="responsive"
        loading="lazy"
        quality={100}
      />
    </a>
    <div className="p-5">
    <h5 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 transition-colors duration-300">
     {GRID_DATA.title}
    <Link href={GRID_DATA.link}>
    <span className="block text-sm font-normal text-gray-700 dark:text-gray-300 mt-4 underline">{GRID_DATA.linkText}</span></Link>
    </h5>

    </div>
  </div>,
    padding:"p-1",
    lightBackgroundColor: "bg-teal-50",
    darkBackgroundColor:"dark:bg-bg8",
  },
  {
    className: "md:col-span-2",
    formobile: "yes", 
    lightBackgroundColor: "bg-bg1",
    darkBackgroundColor:"dark:bg-bg8",
    component: <GitHubContributionGraph/>
  },
  {
    className: "md:col-span-2",
    component: <MarqueeCard/>,
    padding: "p-1",
  },
];
