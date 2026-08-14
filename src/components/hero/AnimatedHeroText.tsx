'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

export default function AnimatedHeroText() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const subtitleClasses = 'text-subtitle text-size-300 md:text-size-400 top-0'
  const subtitleTexts = ['CSUI Student', 'AI Engineer', 'Software Engineer']

  useGSAP(() => {
    const titleElement = titleRef.current
    const subtitleElement = subtitleRef.current

    if (!titleElement || !subtitleElement) return

    const timeline = gsap.timeline()
    timeline.set(titleElement, { opacity: 0, yPercent: 60 })
    timeline.set(subtitleElement, { opacity: 0, yPercent: 40 })

    timeline.to(titleElement, {
      opacity: 1,
      yPercent: 0,
      duration: 1.5,
      ease: 'power1.out',
    })

    const subtitlesTimeline = gsap.timeline({ repeat: -1 })

    subtitleTexts.forEach((text) => {
      subtitlesTimeline
        .call(() => {
          subtitleElement.textContent = text
        })
        .to(subtitleElement, { opacity: 1, yPercent: 0, duration: 1, ease: 'power1.out' })
        .to(subtitleElement, { opacity: 0, yPercent: 40, duration: 0.7, ease: 'power1.in' })
    })

    timeline.add(subtitlesTimeline)
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="flex flex-col z-10 items-center justify-center">
      <h1 ref={titleRef} className="text-title text-size-600 md:text-size-900 leading-none">
        ATHAYA
      </h1>
      <span className="flex justify-center">
        <p className={subtitleClasses} ref={subtitleRef}>
          Dummy
        </p>
      </span>
    </div>
  )
}