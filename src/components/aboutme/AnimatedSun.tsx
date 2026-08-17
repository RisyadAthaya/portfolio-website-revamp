'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function AboutMeText() {
  const containerRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const container = containerRef.current
      const box = boxRef.current

      gsap.set(box, { borderRadius: '60%' })

      gsap.to(box, {
        rotation: 360,
        borderRadius: '0',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          once: true,
        },
      })

      gsap.to(box, {
        backgroundColor: 'var(--color-secondary)',
        ease: 'power2.inOut',
        rotation: 720,
        scrollTrigger: {
          trigger: container,
          start: 'top 60%',
          end: 'top 5%',
          scrub: true,
        },
      })
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className="">
      <div ref={boxRef} className="w-60 h-60 bg-primary z-10" />
    </div>
  )
}
