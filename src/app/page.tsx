import Hero from "@/src/sections/Hero"
import AboutMe from "@/src/sections/AboutMe"
import Experiences from "@/src/sections/Experiences"
import Projects from "@/src/sections/Projects"
import TechStack from "@/src/sections/TechStack"
import Contacts from "@/src/sections/Contacts"

export default function Home() {
  return (
    <div className="min-h-full flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <Hero />
        <AboutMe />
        <Experiences />
        <Projects />
        <TechStack />
        <Contacts />
      </main>
    </div>
  );
}
