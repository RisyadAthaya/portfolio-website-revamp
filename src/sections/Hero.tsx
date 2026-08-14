import AnimatedHeroText from "@/src/components/hero/AnimatedHeroText";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center min-h-dvh w-full overflow-hidden">
      <AnimatedHeroText />
      <div aria-hidden="true" className="flex flex-col items-center absolute inset-0 z-0">
        <video
          loop
          autoPlay
          muted
          playsInline
          preload="auto"
          src="/videos/synthwaveBackground.mp4"
          className="min-h-dvh object-cover"
        />
      </div>
    </section>
  )
}