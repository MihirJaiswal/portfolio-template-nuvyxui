import IconCloud from "../ui/icon-cloud";
import { skills } from "../../../constant/index";

export function IconClouds() {
  return (
    <div className="relative flex h-full w-full max-w-[37rem] items-center justify-center overflow-hidden rounded-lg md:px-20 px-4">
      <IconCloud iconSlugs={skills.map((skill) => skill.slug)} />
    </div>
  );
}
