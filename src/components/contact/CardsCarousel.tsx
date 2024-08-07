"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { data } from "../../../constant";

export function CardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full max-w-3xl h-screen flex items-center bg-bg3 dark:bg-bg4 z-0">
       <div className="absolute inset-0 bg-white opacity-20 dark:opacity-0 z-0"></div>
      <Carousel items={cards} />
    </div>
  );
}

