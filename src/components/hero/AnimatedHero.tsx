'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

export default function AnimatedHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const subtitleClasses = 'text-subtitle text-size-300 md:text-size-500 top-0'
  const subtitleTexts = ['CSUI Student', 'AI Engineer', 'Software Engineer']

  useGSAP(
    () => {
      const titleElement = titleRef.current
      const subtitleElement = subtitleRef.current
      const videoElement = videoRef.current

      if (!titleElement || !subtitleElement) return

      const timeline = gsap.timeline()
      timeline.set(titleElement, { opacity: 0, yPercent: 60 })
      timeline.set(subtitleElement, { opacity: 0, xPercent: -10 })
      timeline.set(videoElement, { opacity: 0 })

      // Disable scrolling for a while
      timeline.call(() => {
        document.body.style.overflow = 'hidden'
      })
      timeline
        .to(titleElement, {
          opacity: 1,
          yPercent: 0,
          duration: 1.5,
          ease: 'power1.out',
          delay: 1,
        })
        .to(videoElement, {
          opacity: 1,
          duration: 0.8,
        })
        // Enable scrolling again
        .call(() => {
          document.body.style.overflow = ''
        })

      const subtitlesTimeline = gsap.timeline({ repeat: -1 })

      subtitleTexts.forEach((text) => {
        subtitlesTimeline
          .call(() => {
            subtitleElement.textContent = text
          })
          .to(subtitleElement, {
            opacity: 1,
            xPercent: 0,
            duration: 1.4,
            ease: 'power1.out',
          })
          .to(subtitleElement, {
            opacity: 0,
            xPercent: 10,
            duration: 1,
            ease: 'power1.in',
          })
          .set(subtitleElement, { xPercent: -10 })
      })

      timeline.add(subtitlesTimeline)
    },
    { scope: containerRef },
  )

  return (
    <>
      <div
        ref={containerRef}
        className="flex flex-col z-10 items-center justify-center"
      >
        <h1
          ref={titleRef}
          className="text-title text-size-600 md:text-size-900 leading-none text-shadow-[0_0_8px_#ffffff]"
        >
          ATHAYA
        </h1>
        <span className="flex justify-center">
          <p className={subtitleClasses} ref={subtitleRef}>
            CSUI Student
          </p>
        </span>
      </div>
      <div
        aria-hidden="true"
        className="flex flex-col items-center absolute inset-0 z-0 pointer-events-none"
      >
        <video
          loop
          autoPlay
          muted
          playsInline
          preload="auto"
          src="/videos/synthwaveBackground.mp4"
          ref={videoRef}
          className="h-svh w-full object-cover"
        />
      </div>
    </>
  )
}
