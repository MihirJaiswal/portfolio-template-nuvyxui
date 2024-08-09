import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { data } from "../../../constant";

export function CardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full max-w-lg h-screen flex items-center z-0">
       <div className="absolute inset-0 bg-white opacity-20 dark:opacity-0 z-0"></div>
      <Carousel items={cards} />
    </div>
  );
}

