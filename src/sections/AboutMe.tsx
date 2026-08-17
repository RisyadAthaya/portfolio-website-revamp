import AboutMeText from '@/src/components/aboutme/AboutMeText'
import AnimatedSun from '@/src/components/aboutme/AnimatedSun'

export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-20 md:gap-10 lg:gap-60 w-full px-16 pt-20 pb-20 border-t-primary border-t-12">
      <AboutMeText />
      <AnimatedSun />
    </div>
  )
}
