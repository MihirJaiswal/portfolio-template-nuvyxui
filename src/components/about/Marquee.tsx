import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import Image from "next/image";
import user from "../../../public/assests/usericon.webp"

const reviews = [
  {
    body: "you make awesome UI 🙌",
  },
  {
    body: "Amazing frontend",
  },
  {
    body: "Love your work!!! 🤗",
  },
  {
    body: "UI is amazing 👌",
  },
  {
    body: "keep up the awesome work!",
  },
  {
    body: "👏👏👏",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  body,
}: {
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-50/70 hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-800 dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-4">
      <Image src={user} alt="user" placeholder="blur" loading="lazy" quality={100} className="w-6" />
      <blockquote className="text-sm">{body}</blockquote>
      </div>
      
    </figure>
  );
};

export function MarqueeCard() {
  return (
    <div className="relative flex py-4 md:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-teal-50 dark:bg-bg7">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.body} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.body} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
