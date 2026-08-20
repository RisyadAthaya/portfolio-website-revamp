'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const experiences = [
  {
    orgName: 'RISTEK',
    position: 'People Operations of Data Science & AI',
    date: 'Mar 2026 - Present',
  },
  {
    orgName: 'COMPFEST',
    position: 'Data Science Academy Expert Staff',
    date: 'Jan 2026 - Present',
  },
]

export default function Experiences() {
  const mainContainerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const expContainerRefs = useRef<(HTMLLIElement | null)[]>([])
  const orgRefs = useRef<(HTMLParagraphElement | null)[]>([])
  const descRefs = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      const mainContainer = mainContainerRef.current
      const expContainer = expContainerRefs.current
      const title = titleRef.current
      const org = orgRefs.current
      const desc = descRefs.current

      gsap.set(title, { opacity: 0, yPercent: 30 })
      gsap.set(org, { opacity: 0, xPercent: -30 })
      gsap.set(desc, { opacity: 0, xPercent: 30 })

      gsap.to(title, {
        opacity: 1,
        yPercent: 0,
        duration: 0.8,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: mainContainer,
          start: 'top 80%',
          once: true,
        },
      })

      expContainerRefs.current.forEach((expContainer, index) => {
        const org = orgRefs.current[index]
        const desc = descRefs.current[index]

        gsap.set(org, { opacity: 0, xPercent: -30 })
        gsap.set(desc, { opacity: 0, xPercent: 30 })

        gsap.to(org, {
          opacity: 1,
          xPercent: 0,
          duration: 0.8,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: expContainer,
            start: 'top 80%',
            once: true,
          },
        })
        gsap.to(desc, {
          opacity: 1,
          xPercent: 0,
          duration: 0.8,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: expContainer,
            start: 'top 80%',
            once: true,
          },
        })
      })
    },
    { scope: mainContainerRef, dependencies: [experiences] },
  )

  return (
    <div
      ref={mainContainerRef}
      className="flex flex-col items-center gap-8 py-16 w-full"
    >
      <h2 ref={titleRef} className="text-size-500 md:text-size-700">
        Experiences
      </h2>
      <ul className="flex flex-col items-center md:items-start px-16 w-full">
        {experiences.map((experience, index) => (
          <li
            key={experience.orgName}
            ref={(element) => {
              expContainerRefs.current[index] = element
            }}
            className="flex flex-col md:flex-row justify-between gap-2 md:gap-8 items-center
            w-full border-b-white border-b-2 last:border-0 py-6 md:py-8 text-size-500 md:text-size-600"
          >
            <p
              ref={(element) => {
                orgRefs.current[index] = element
              }}
            >
              {experience.orgName}
            </p>
            <div
              ref={(element) => {
                descRefs.current[index] = element
              }}
              className="flex flex-col text-center md:text-right text-size-100 md:text-size-200"
            >
              <p>{experience.position}</p>
              <p>{experience.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
