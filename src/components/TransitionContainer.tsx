'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

const transitionClasses = 'flex flex-1'
const blockClassesRow1 =
  'block1 flex-1 bg-white will-change-transform origin-top'
const blockClassesRow2 =
  'block2 flex-1 bg-white will-change-transform origin-bottom'

export default function TransitionContainer() {
  const blocksRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const blocks = blocksRef.current
    gsap.set(blocks, {
      visibility: 'visible',
      scaleY: 1,
    })

    gsap.to('.block1', {
      scaleY: 0,
      duration: 1,
      ease: 'power1.out',
      stagger: {
        each: 0.2,
        from: 'center',
        grid: [1, 5],
        axis: 'x',
      },
    })
    gsap.to('.block2', {
      scaleY: 0,
      duration: 1,
      ease: 'power1.out',
      stagger: {
        each: 0.2,
        from: 'center',
        grid: [1, 5],
        axis: 'x',
      },
    })
  })

  return (
    <div className="fixed top-0 left-0 w-screen h-dvh flex flex-col z-20 scale-y-100">
      <div id="transition-row-1" className={transitionClasses}>
        <div ref={blocksRef} className={blockClassesRow1}></div>
        <div ref={blocksRef} className={blockClassesRow1}></div>
        <div ref={blocksRef} className={blockClassesRow1}></div>
        <div ref={blocksRef} className={blockClassesRow1}></div>
        <div ref={blocksRef} className={blockClassesRow1}></div>
      </div>
      <div id="transition-row-2" className={transitionClasses}>
        <div ref={blocksRef} className={blockClassesRow2}></div>
        <div ref={blocksRef} className={blockClassesRow2}></div>
        <div ref={blocksRef} className={blockClassesRow2}></div>
        <div ref={blocksRef} className={blockClassesRow2}></div>
        <div ref={blocksRef} className={blockClassesRow2}></div>
      </div>
    </div>
  )
}
