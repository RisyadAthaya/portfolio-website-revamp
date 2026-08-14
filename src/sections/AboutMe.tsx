import AboutMeText from "@/src/components/aboutme/AboutMeText";
import AnimatedSun from "@/src/components/aboutme/AnimatedSun";

export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-20 md:gap-80 w-full p-16 py-20 md:py-30 border-t-primary border-t-12">
      <AboutMeText />
      <AnimatedSun />
    </div>
  )
}