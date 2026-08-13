'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

export default function AnimatedHeroText() {
  useGSAP(() => {
    const timeline = gsap.timeline({})
    gsap.set('.text-title', { opacity: 0, yPercent: 60 })
    gsap.set('.text-subtitle', { opacity: 0, yPercent: 40 })

    timeline.to('.text-title', {
      opacity: 1,
      yPercent: 0,
      duration: 1.75,
      ease: "power1.out"
    })

    const subtitlesTimeline = gsap.timeline({ repeat: -1 })
    const subtitles = gsap.utils.toArray('.text-subtitle') as HTMLParagraphElement[]

    subtitles.forEach((sub) => {
      subtitlesTimeline
        .to(sub, { opacity: 1, yPercent: 0, duration: 1, ease: 'power1.out' })
        .to(sub, { opacity: 0, yPercent: 40, duration: 0.7, ease: 'power1.in', delay: 0.4 })
    })

    timeline.add(subtitlesTimeline)
  }, [])

  return (
    <div className="text-center">
      <h1 className="text-title">ATHAYA</h1>
      <span className="flex relative justify-center">
        <p className="text-subtitle absolute">CSUI Student</p>
        <p className="text-subtitle absolute">Software Engineer</p>
        <p className="text-subtitle absolute">AI Engineer</p>
      </span>
    </div>
  )
}