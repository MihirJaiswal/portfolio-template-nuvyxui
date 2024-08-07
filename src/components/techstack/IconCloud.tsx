import IconCloud from "../ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "jest",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "tailwind",
  "sass",
  "mongodb",
  "mysql",
  "canva"
];

export function IconClouds() {
  return (
    <div className="relative flex h-full w-full max-w-[37rem] items-center justify-center overflow-hidden rounded-lg md:px-20 px-4">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
