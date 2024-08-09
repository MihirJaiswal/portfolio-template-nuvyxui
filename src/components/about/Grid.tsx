import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import GitHubContributionGraph from "./GitHubContributionGraph";
import Image from "next/image";
import image from '../../../public/assests/pfp.webp'
import { MarqueeCard } from "./Marquee";

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
    component: <Image src={image} alt="mihir" loading="lazy" quality={100} placeholder="blur" className="object-cover md:h-screen rounded-lg" />,
    padding:"p-1",
  },
  {
    className: "md:col-span-2",
    component: <MarqueeCard/>,
    padding: "p-1",
  },
  {
    className: "md:col-span-2",
    formobile: "yes", 
    lightBackgroundColor: "bg-bg1",
    darkBackgroundColor:"dark:bg-bg8",
    component: <GitHubContributionGraph/>
  },
];
