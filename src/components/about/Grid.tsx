import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
} from "@tabler/icons-react";
import GitHubContributionGraph from "./GitHubContributionGraph";
import Image from "next/image";
import image from '../../../public/assests/pfp.webp'
import { MarqueeCard } from "./Marquee";

export function Grid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[12rem] ">
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

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

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
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:row-span-2 row-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    component: <Image src={image} alt="mihir" loading="lazy" quality={100} placeholder="blur" className="md:object-cover md:h-screen rounded-lg" />,
    padding:"p-1",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    component: <MarqueeCard/>,
    padding: "p-1",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    component: <GitHubContributionGraph />,
    formobile: "yes", 
    lightBackgroundColor: "bg-bg1",
    darkBackgroundColor:"dark:bg-bg8"
  },
];
