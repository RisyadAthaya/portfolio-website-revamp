'use client'

import { useRef } from "react"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function AboutMeText() {
  const containerRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const container = containerRef.current
    const box = boxRef.current

    gsap.to(box, {
      scaleY: 0,
      transformOrigin: 'bottom',
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        once: true
      }
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="relative">
      <p className="text-size-400">
        Creating digital solutions. Currently learning toward becoming an AI engineer.
      </p>
      <div
        ref={boxRef}
        className="absolute inset-0 bg-white z-10"
      />
    </div>
  )
}