"use client"

import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { EmblaCarouselType } from "embla-carousel"
import GithubLogo from "@/public/svg/github-logo.svg"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const SLIDES = [
  {
    id: 1,
    title: "Lapor Aman",
    image: "/images/laporaman.png",
    githubLink: "https://github.com/RisyadAthaya/laporaman",
    websiteLink: "https://risyadathaya.github.io/laporaman/"
  },
  {
    id: 2,
    title: "Lapor Aman",
    image: "/images/laporaman.png",
    githubLink: "https://github.com/RisyadAthaya/laporaman",
    websiteLink: "https://risyadathaya.github.io/laporaman/"
  },
  {
    id: 3,
    title: "Lapor Aman",
    image: "/images/laporaman.png",
    githubLink: "https://github.com/RisyadAthaya/laporaman",
    websiteLink: "https://risyadathaya.github.io/laporaman/"
  },
]

export default function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  // Arrow navigation functions
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  // Initialization for dots
  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  // Update state when a slide is selected
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, []);

  // Attach event listeners
  useEffect(() => {
    if (!emblaApi) return
    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi
      .on("reInit", onInit)
      .on("reInit", onSelect)
      .on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className="flex flex-col items-center relative w-full md:max-w-3xl mx-auto py-8 group">
      <div className="overflow-hidden rounded-none md:rounded-xl" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((slide) => (
            <div className="flex-[0_0_100%] min-w-0 relative bg-gray-100" key={slide.id}>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover block"
              />
              <div className="absolute -bottom-1 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 pt-12">
                <div className="flex flex-row items-center justify-between">
                  <h3 className="text-white text-2xl font-bold tracking-wide">
                    {slide.title}
                  </h3>
                  <div className="flex flex-row justify-between gap-2 items-center">
                    <a href={slide.githubLink} target="_blank">
                      <Image width={30} height={30} src={GithubLogo} alt="Github Repo" />
                    </a>
                    <a href={slide.websiteLink} target="_blank">
                      <ExternalLink size={30} color="#ffffff" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="flex justify-center gap-3 mt-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-slate-800 scale-125"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}